import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const productionRoot = path.resolve(here, "..");
const registryPath = path.join(productionRoot, "registry", "assets.json");

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function validate(config) {
  const errors = [];
  const families = new Set(["teach","practice","assess","diagnose","reference"]);
  if (!config.asset_id) errors.push("asset_id missing");
  if (!families.has(config.family)) errors.push("invalid family");
  if (!config.title) errors.push("title missing");
  if (!Array.isArray(config.learning_objectives) || config.learning_objectives.length === 0) errors.push("learning_objectives empty");
  if (!Array.isArray(config.misconception_tags)) errors.push("misconception_tags missing");
  if (!Number.isInteger(config?.render?.seed)) errors.push("render.seed must be integer");
  if (!config?.render?.viewport?.width || !config?.render?.viewport?.height) errors.push("viewport missing");
  if (!Array.isArray(config?.render?.fallback_fonts) || config.render.fallback_fonts.length === 0) errors.push("fallback_fonts missing");
  if (!config?.content?.diagram) errors.push("content.diagram missing");
  if (!Array.isArray(config?.qa?.checks) || config.qa.checks.length === 0) errors.push("qa checks missing");
  return errors;
}

const registry = readJson(registryPath);
let failed = 0;

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
  const errors = validate(config);
  if (config.asset_id !== item.asset_id) errors.push("registry asset_id does not match config asset_id");

  const diagramAbs = path.resolve(dir, config.content.diagram);
  if (!fs.existsSync(diagramAbs)) errors.push(`diagram not found: ${config.content.diagram}`);

  if (errors.length) {
    failed += 1;
    console.error(`FAIL ${item.asset_id}`);
    for (const error of errors) console.error(`  - ${error}`);
  } else {
    console.log(`PASS ${item.asset_id}`);
  }
}

if (failed > 0) {
  console.error(`\n${failed} asset(s) failed validation.`);
  process.exit(1);
}

console.log(`\nAll ${registry.assets.length} registered asset(s) passed validation.`);
