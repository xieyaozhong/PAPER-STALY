import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const productionRoot = path.resolve(here, "..");
const topicsRegistry = JSON.parse(fs.readFileSync(path.join(productionRoot, "registry", "topics.json"), "utf8"));
const assetsRegistry = JSON.parse(fs.readFileSync(path.join(productionRoot, "registry", "assets.json"), "utf8"));

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function sameSet(a=[], b=[]) {
  return JSON.stringify([...a].sort()) === JSON.stringify([...b].sort());
}

let failures = 0;

for (const topicItem of topicsRegistry.topics) {
  const blueprintPath = path.join(productionRoot, topicItem.blueprint);
  if (!fs.existsSync(blueprintPath)) {
    failures += 1;
    console.error(`FAIL ${topicItem.topic_id}: blueprint missing ${topicItem.blueprint}`);
    continue;
  }

  const blueprint = readJson(blueprintPath);
  const assets = assetsRegistry.assets.filter(a => a.topic === topicItem.topic);
  const actualFamilies = assets.map(a => a.family);
  const expectedFamilies = blueprint.expected_families || [];

  const errors = [];
  if (blueprint.topic_id !== topicItem.topic_id) errors.push("topic_id mismatch between registry and blueprint");
  if (blueprint.topic !== topicItem.topic) errors.push("topic slug mismatch between registry and blueprint");
  if (!sameSet(actualFamilies, expectedFamilies)) errors.push(`family coverage mismatch: expected [${expectedFamilies.join(", ")}], got [${actualFamilies.join(", ")}]`);

  const objectiveIds = blueprint.learning_objectives.map(o => o.id);
  const misconceptionIds = blueprint.misconception_tags.map(m => m.id);

  for (const asset of assets) {
    const assetDir = path.join(productionRoot, asset.path);
    const config = readJson(path.join(assetDir, "asset.json"));
    const configObjectiveIds = config.learning_objectives.map(o => o.id);
    const unknownObjectives = configObjectiveIds.filter(id => !objectiveIds.includes(id));
    const unknownMisconceptions = config.misconception_tags.filter(id => !misconceptionIds.includes(id));
    if (unknownObjectives.length) errors.push(`${asset.asset_id}: unknown objective(s) ${unknownObjectives.join(", ")}`);
    if (unknownMisconceptions.length) errors.push(`${asset.asset_id}: unknown misconception tag(s) ${unknownMisconceptions.join(", ")}`);
  }

  const sourceDiagram = path.resolve(path.dirname(blueprintPath), blueprint.source_diagram);
  if (!fs.existsSync(sourceDiagram)) errors.push(`source diagram missing: ${blueprint.source_diagram}`);

  if (errors.length) {
    failures += 1;
    console.error(`FAIL ${topicItem.topic_id}`);
    for (const error of errors) console.error(`  - ${error}`);
  } else {
    console.log(`PASS ${topicItem.topic_id}: ${assets.length}/${expectedFamilies.length} families complete`);
  }
}

if (failures) {
  console.error(`\n${failures} topic(s) failed coverage checks.`);
  process.exit(1);
}

console.log(`\nAll ${topicsRegistry.topics.length} topic(s) have complete family coverage.`);
