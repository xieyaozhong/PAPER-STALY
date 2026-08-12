import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const productionRoot = path.resolve(here, "..");
const registry = JSON.parse(fs.readFileSync(path.join(productionRoot, "registry", "assets.json"), "utf8"));

const familyOrder = ["teach","practice","assess","diagnose","reference"];
const grouped = new Map();
for (const item of registry.assets) {
  if (!grouped.has(item.topic)) grouped.set(item.topic, []);
  grouped.get(item.topic).push(item);
}

function esc(value="") {
  return String(value).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;");
}

function card(item) {
  return `<article class="card">
  <div class="family">${esc(item.family)}</div>
  <h3>${esc(item.title)}</h3>
  <div class="id">${esc(item.asset_id)}</div>
  <div class="meta">audience · ${esc(item.audience)}<br>seed · ${item.seed}<br>status · ${esc(item.status)}</div>
  <a href="${esc(item.entrypoint)}">Open asset →</a>
</article>`;
}

const topicSections = [...grouped.entries()].map(([topic, items]) => {
  items.sort((a,b) => familyOrder.indexOf(a.family) - familyOrder.indexOf(b.family));
  const title = items[0]?.title?.split("｜")[0] || topic;
  const objectiveCount = new Set(items.flatMap(i => i.learning_objectives || [])).size;
  const misconceptionCount = new Set(items.flatMap(i => i.misconception_tags || [])).size;
  return `<section class="topic">
    <div class="topic-head">
      <div><div class="topic-code">${esc(topic)}</div><h2>${esc(title)}</h2></div>
      <div class="topic-stats"><span>${items.length} assets</span><span>${objectiveCount} objectives</span><span>${misconceptionCount} misconception tags</span></div>
    </div>
    <div class="grid">${items.map(card).join("\n")}</div>
  </section>`;
}).join("\n");

const topicCount = grouped.size;
const familyCount = new Set(registry.assets.map(a => a.family)).size;

const html = `<!doctype html>
<html lang="zh-Hant"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Physics Production Registry｜PAPER-STALY</title>
<style>
:root{--bg:#080b10;--surface:#111720;--line:#2b3746;--text:#f5f7fb;--muted:#93a0b0;--orange:#ff9f1c;--cyan:#56d7e8}
*{box-sizing:border-box}body{margin:0;background:radial-gradient(circle at 80% 0,#122534 0,#080b10 34rem);color:var(--text);font-family:system-ui,-apple-system,"Noto Sans TC",sans-serif}.wrap{max-width:1280px;margin:auto;padding:56px 24px 90px}.eyebrow{font:700 12px ui-monospace,monospace;letter-spacing:.14em;color:var(--cyan)}h1{font-size:clamp(42px,7vw,78px);line-height:1;margin:12px 0}.lead{color:var(--muted);max-width:860px;line-height:1.7}.stats{display:flex;gap:10px;flex-wrap:wrap;margin:24px 0 48px}.stat{border:1px solid var(--line);border-radius:999px;padding:8px 12px;color:var(--muted);font:600 12px ui-monospace,monospace}.stat strong{color:var(--cyan)}.topic{margin:0 0 54px}.topic-head{display:flex;justify-content:space-between;gap:22px;align-items:end;border-bottom:1px solid var(--line);padding-bottom:16px;margin-bottom:20px}.topic-code{font:700 11px ui-monospace,monospace;letter-spacing:.12em;color:var(--orange)}.topic h2{font-size:30px;margin:7px 0 0}.topic-stats{display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end}.topic-stats span{font:600 11px ui-monospace,monospace;color:var(--muted);border:1px solid var(--line);border-radius:999px;padding:7px 9px}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:16px}.card{background:rgba(17,23,32,.9);border:1px solid var(--line);border-radius:18px;padding:20px}.family{display:inline-block;color:var(--orange);font:700 11px ui-monospace,monospace;letter-spacing:.12em;text-transform:uppercase}.card h3{font-size:20px;margin:10px 0}.id{color:var(--cyan);font:600 11px ui-monospace,monospace;overflow-wrap:anywhere}.meta{color:var(--muted);font:12px ui-monospace,monospace;line-height:1.55;margin:15px 0}.card a{color:var(--text);text-decoration:none;border-bottom:1px solid var(--cyan)}@media(max-width:700px){.topic-head{display:block}.topic-stats{justify-content:flex-start;margin-top:14px}}
</style></head><body><main class="wrap"><div class="eyebrow">PAPER-STALY / PHYSICS / PRODUCTION</div><h1>Asset Registry</h1><p class="lead">由 registry 自動生成並依 topic 分組。正式 asset 皆保留 stable ID、獨立入口、固定 seed、learning objectives、misconception tags 與 QA contract。</p><div class="stats"><span class="stat"><strong>${topicCount}</strong> topics</span><span class="stat"><strong>${familyCount}</strong> families</span><span class="stat"><strong>${registry.assets.length}</strong> registered assets</span></div>${topicSections}</main></body></html>`;

fs.writeFileSync(path.join(productionRoot, "index.html"), html);
console.log(`Built production/index.html with ${topicCount} topic(s) / ${registry.assets.length} asset(s).`);
