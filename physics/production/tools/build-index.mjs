import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const productionRoot = path.resolve(here, "..");
const registry = JSON.parse(fs.readFileSync(path.join(productionRoot, "registry", "assets.json"), "utf8"));

const cards = registry.assets.map(item => `
<article class="card">
  <div class="family">${item.family}</div>
  <h2>${item.title}</h2>
  <div class="id">${item.asset_id}</div>
  <p>${item.topic}</p>
  <div class="meta">audience · ${item.audience}<br>seed · ${item.seed}<br>status · ${item.status}</div>
  <a href="${item.entrypoint}">Open asset →</a>
</article>`).join("\n");

const html = `<!doctype html>
<html lang="zh-Hant"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Physics Production Registry｜PAPER-STALY</title>
<style>
:root{--bg:#080b10;--surface:#111720;--line:#2b3746;--text:#f5f7fb;--muted:#93a0b0;--orange:#ff9f1c;--cyan:#56d7e8}
*{box-sizing:border-box}body{margin:0;background:radial-gradient(circle at 80% 0,#122534 0,#080b10 34rem);color:var(--text);font-family:system-ui,-apple-system,"Noto Sans TC",sans-serif}.wrap{max-width:1200px;margin:auto;padding:56px 24px 80px}.eyebrow{font:700 12px ui-monospace,monospace;letter-spacing:.14em;color:var(--cyan)}h1{font-size:clamp(40px,7vw,76px);line-height:1;margin:12px 0}.lead{color:var(--muted);max-width:760px;line-height:1.7}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:18px;margin-top:36px}.card{background:rgba(17,23,32,.9);border:1px solid var(--line);border-radius:18px;padding:22px}.family{display:inline-block;color:var(--orange);font:700 11px ui-monospace,monospace;letter-spacing:.12em;text-transform:uppercase}.card h2{font-size:23px;margin:10px 0}.id{color:var(--cyan);font:600 12px ui-monospace,monospace}.card p,.meta{color:var(--muted);line-height:1.55}.meta{font:12px ui-monospace,monospace;margin:16px 0}.card a{color:var(--text);text-decoration:none;border-bottom:1px solid var(--cyan)}
</style></head><body><main class="wrap"><div class="eyebrow">PAPER-STALY / PHYSICS / PRODUCTION</div><h1>Asset Registry</h1><p class="lead">由 registry 自動生成。每一個資產都有 stable ID、獨立入口、固定 seed、learning objective 與 misconception traceability。</p><section class="grid">${cards}</section></main></body></html>`;

fs.writeFileSync(path.join(productionRoot, "index.html"), html);
console.log(`Built production/index.html with ${registry.assets.length} asset(s).`);
