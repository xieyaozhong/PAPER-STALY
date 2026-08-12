import fs from "node:fs";
import path from "node:path";
import http from "node:http";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const productionRoot = path.resolve(here, "..");
const physicsRoot = path.resolve(productionRoot, "..");
const repoRoot = path.resolve(physicsRoot, "..");
const registry = JSON.parse(fs.readFileSync(path.join(productionRoot, "registry", "assets.json"), "utf8"));
const outRoot = path.join(productionRoot, "_renders");
fs.mkdirSync(outRoot, { recursive: true });

const chromeCandidates = [
  process.env.CHROME_BIN,
  "chromium",
  "chromium-browser",
  "google-chrome",
  "google-chrome-stable",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
].filter(Boolean);

function findChrome() {
  for (const candidate of chromeCandidates) {
    const probe = spawnSync(candidate, ["--version"], { stdio: "ignore" });
    if (!probe.error && probe.status === 0) return candidate;
  }
  return null;
}

function mimeType(file) {
  const ext = path.extname(file).toLowerCase();
  return ({
    ".html":"text/html; charset=utf-8",
    ".js":"text/javascript; charset=utf-8",
    ".json":"application/json; charset=utf-8",
    ".css":"text/css; charset=utf-8",
    ".svg":"image/svg+xml",
    ".png":"image/png",
    ".jpg":"image/jpeg",
    ".jpeg":"image/jpeg"
  })[ext] || "application/octet-stream";
}

function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const requestPath = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
      const target = path.resolve(repoRoot, `.${requestPath}`);
      if (!target.startsWith(repoRoot)) {
        res.writeHead(403); res.end("Forbidden"); return;
      }
      let file = target;
      if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, "index.html");
      if (!fs.existsSync(file)) {
        res.writeHead(404); res.end("Not found"); return;
      }
      res.writeHead(200, {"Content-Type": mimeType(file), "Cache-Control":"no-store"});
      fs.createReadStream(file).pipe(res);
    });
    server.listen(0, "127.0.0.1", () => resolve(server));
  });
}

const chrome = findChrome();
if (!chrome) {
  console.error("No Chromium/Chrome executable found. Set CHROME_BIN to a Chromium-compatible browser path.");
  process.exit(2);
}

const server = await startServer();
const port = server.address().port;
let failures = 0;

try {
  for (const item of registry.assets) {
    const configPath = path.join(productionRoot, item.path, "asset.json");
    const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
    const width = config.render.viewport.width;
    const height = config.render.viewport.height;
    const output = path.join(outRoot, `${item.asset_id}.png`);
    const url = `http://127.0.0.1:${port}/physics/production/${item.entrypoint}`;

    const result = spawnSync(chrome, [
      "--headless",
      "--disable-gpu",
      "--hide-scrollbars",
      `--window-size=${width},${height}`,
      `--screenshot=${output}`,
      url
    ], { stdio: "inherit" });

    if (result.status !== 0 || !fs.existsSync(output)) {
      failures += 1;
      console.error(`FAIL render ${item.asset_id}`);
    } else {
      console.log(`PASS render ${item.asset_id} -> ${path.relative(productionRoot, output)}`);
    }
  }
} finally {
  server.close();
}

if (failures) process.exit(1);
console.log(`Rendered ${registry.assets.length} asset(s).`);
