import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const productionRoot = path.resolve(here, "..");
const registryPath = path.join(productionRoot, "registry", "assets.json");
const families = new Set(["teach","practice","assess","diagnose","reference"]);

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function sameSet(a = [], b = []) {
  return JSON.stringify([...a].sort()) === JSON.stringify([...b].sort());
}

function objectiveIds(config) {
  return (config.learning_objectives || []).map(o => o.id);
}

function validateConfig(config) {
  const errors = [];
  if (!config.asset_id) errors.push("asset_id missing");
  if (!families.has(config.family)) errors.push("invalid family");
  if (!config.title) errors.push("title missing");
  if (!config.audience) errors.push("audience missing");
  if (!config.topic) errors.push("topic missing");
  if (!Array.isArray(config.learning_objectives) || config.learning_objectives.length === 0) errors.push("learning_objectives empty");
  if ((config.learning_objectives || []).some(o => !o.id || !o.statement)) errors.push("learning_objective requires id + statement");
  if (!Array.isArray(config.misconception_tags)) errors.push("misconception_tags missing");
  if (!Number.isInteger(config?.render?.seed)) errors.push("render.seed must be integer");
  if (!config?.render?.viewport?.width || !config?.render?.viewport?.height) errors.push("viewport missing");
  if (!config?.render?.theme) errors.push("render.theme missing");
  if (!Array.isArray(config?.render?.fallback_fonts) || config.render.fallback_fonts.length === 0) errors.push("fallback_fonts missing");
  if (!config?.content?.summary) errors.push("content.summary missing");
  if (!config?.content?.diagram) errors.push("content.diagram missing");
  if (!Array.isArray(config?.qa?.checks) || config.qa.checks.length === 0) errors.push("qa checks missing");
  if ((config?.qa?.checks || []).some(c => !c.id || !c.description || typeof c.required !== "boolean")) errors.push("each qa check requires id + description + required boolean");

  if (config.family === "teach" && !Array.isArray(config.content.quick_check)) errors.push("teach requires content.quick_check");
  if (config.family === "practice" && !Array.isArray(config.content.prompts)) errors.push("practice requires content.prompts");
  if (config.family === "assess" && (!Array.isArray(config.content.questions) || !config.content.scoring)) errors.push("assess requires questions + scoring");
  if (config.family === "diagnose" && (!Array.isArray(config.content.cases) || !config.content.diagnostic_intent)) errors.push("diagnose requires cases + diagnostic_intent");
  if (config.family === "reference" && (!Array.isArray(config.content.references) || !config.content.use_note)) errors.push("reference requires references + use_note");

  return errors;
}

const registry = readJson(registryPath);
let failed = 0;

if (!Array.isArray(registry.assets)) {
  console.error("FAIL registry: assets must be an array");
  process.exit(1);
}

const duplicateChecks = [
  ["asset_id", registry.assets.map(a => a.asset_id)],
  ["path", registry.assets.map(a => a.path)],
  ["entrypoint", registry.assets.map(a => a.entrypoint)]
];

for (const [label, values] of duplicateChecks) {
  const seen = new Set();
  for (const value of values) {
    if (seen.has(value)) {
      failed += 1;
      console.error(`FAIL registry: duplicate ${label} '${value}'`);
    }
    seen.add(value);
  }
}

for (const item of registry.assets) {
  const dir = path.join(productionRoot, item.path);
  const configFile = path.join(dir, "asset.json");
  const manifestFile = path.join(dir, "manifest.json");
  const entrypointFile = path.join(dir, "index.html");

  const missing = [configFile, manifestFile, entrypointFile].filter(f => !fs.existsSync(f));
  if (missing.length) {
    failed += 1;
    console.error(`FAIL ${item.asset_id}: missing ${missing.map(f=>path.relative(productionRoot,f)).join(", ")}`);
    continue;
  }

  const config = readJson(configFile);
  const manifest = readJson(manifestFile);
  const html = fs.readFileSync(entrypointFile, "utf8");
  const errors = validateConfig(config);

  if (config.asset_id !== item.asset_id) errors.push("registry asset_id does not match config asset_id");
  if (manifest.asset_id !== item.asset_id) errors.push("registry asset_id does not match manifest asset_id");
  if (config.family !== item.family || manifest.family !== item.family) errors.push("family mismatch across registry/config/manifest");
  if (config.title !== item.title) errors.push("registry title does not match config title");
  if (config.topic !== item.topic) errors.push("registry topic does not match config topic");
  if (config.audience !== item.audience) errors.push("registry audience does not match config audience");
  if (config.render.seed !== item.seed) errors.push("registry seed does not match config seed");
  if (manifest?.render_metadata?.seed !== config.render.seed) errors.push("manifest seed does not match config seed");
  if (manifest.entrypoint !== "index.html") errors.push("manifest entrypoint must be index.html");
  if (manifest.config !== "asset.json") errors.push("manifest config must be asset.json");
  if (!sameSet(objectiveIds(config), item.learning_objectives)) errors.push("registry learning_objectives do not match config");
  if (!sameSet(config.misconception_tags, item.misconception_tags)) errors.push("registry misconception_tags do not match config");
  if (!sameSet(manifest?.traceability?.learning_objectives, objectiveIds(config))) errors.push("manifest learning_objectives do not match config");
  if (!sameSet(manifest?.traceability?.misconception_tags, config.misconception_tags)) errors.push("manifest misconception_tags do not match config");

  const diagramAbs = path.resolve(dir, config.content.diagram);
  if (!fs.existsSync(diagramAbs)) errors.push(`diagram not found: ${config.content.diagram}`);

  for (const source of manifest.source_assets || []) {
    const sourceAbs = path.resolve(dir, source.path);
    if (!fs.existsSync(sourceAbs)) errors.push(`manifest source not found: ${source.path}`);
  }

  if (!html.includes("bootAsset")) errors.push("entrypoint does not boot shared runtime");
  if (!html.includes("core/theme.css")) errors.push("entrypoint does not reference shared theme");

  if (errors.length) {
    failed += 1;
    console.error(`FAIL ${item.asset_id}`);
    for (const error of errors) console.error(`  - ${error}`);
  } else {
    console.log(`PASS ${item.asset_id}`);
  }
}

if (failed > 0) {
  console.error(`\n${failed} validation failure(s).`);
  process.exit(1);
}

console.log(`\nAll ${registry.assets.length} registered asset(s) passed validation.`);
