export function validateAssetConfig(config) {
  const errors = [];
  const families = new Set(["teach","practice","assess","diagnose","reference"]);
  if (!config || typeof config !== "object") errors.push("config must be an object");
  if (!config?.asset_id) errors.push("asset_id is required");
  if (!families.has(config?.family)) errors.push("family must be teach/practice/assess/diagnose/reference");
  if (!config?.title) errors.push("title is required");
  if (!Array.isArray(config?.learning_objectives) || config.learning_objectives.length === 0) errors.push("learning_objectives must not be empty");
  if (!Array.isArray(config?.misconception_tags)) errors.push("misconception_tags must be an array");
  if (!Number.isInteger(config?.render?.seed)) errors.push("render.seed must be an integer");
  if (!config?.render?.viewport?.width || !config?.render?.viewport?.height) errors.push("render.viewport width/height are required");
  if (!Array.isArray(config?.render?.fallback_fonts) || config.render.fallback_fonts.length === 0) errors.push("fallback_fonts are required");
  if (!config?.content?.summary) errors.push("content.summary is required");
  if (!config?.content?.diagram) errors.push("content.diagram is required");
  if (!Array.isArray(config?.qa?.checks) || config.qa.checks.length === 0) errors.push("qa.checks are required");
  return errors;
}

export function deterministicRandom(seed) {
  let state = seed >>> 0;
  return () => {
    state = (1664525 * state + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

function esc(value="") {
  return String(value)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;");
}

export async function loadAssetConfig(url="./asset.json") {
  const response = await fetch(url, {cache:"no-store"});
  if (!response.ok) throw new Error(`Cannot load asset config: ${response.status}`);
  return response.json();
}

export function renderError(root, errors) {
  root.innerHTML = `<div class="error-box"><strong>ASSET VALIDATION FAILED</strong><ul>${errors.map(e=>`<li>${esc(e)}</li>`).join("")}</ul></div>`;
}

function renderSharedShell(root, config, bodyHtml, secondaryHtml="") {
  const rand = deterministicRandom(config.render.seed);
  const objectives = config.learning_objectives.map(o=>`<li>${esc(o.statement)}</li>`).join("");
  const tags = config.misconception_tags.map(t=>`<span class="tag">${esc(t)}</span>`).join("");
  const qaCount = config.qa.checks.filter(c=>c.required).length;
  const visualNonce = Math.floor(rand()*1000000);

  root.innerHTML = `
  <main class="asset-shell" data-asset-id="${esc(config.asset_id)}" data-render-seed="${config.render.seed}" data-render-nonce="${visualNonce}">
    <header class="asset-header">
      <div class="asset-id">${esc(config.asset_id)}</div>
      <div>
        <div class="asset-kicker">${esc(config.family)} / ${esc(config.topic || "physics")}</div>
        <h1 class="asset-title">${esc(config.title)}</h1>
        <p class="meta-value">${esc(config.content.summary)}</p>
      </div>
    </header>
    <section class="asset-grid">
      <article class="panel diagram-panel">${bodyHtml}</article>
      <aside class="panel">
        ${secondaryHtml}
        <div class="meta-label">LEARNING OBJECTIVES</div>
        <ul>${objectives}</ul>
        <div class="meta-label">MISCONCEPTION TAGS</div>
        <div class="tag-row">${tags}</div>
        <div class="meta-label" style="margin-top:22px">RENDER METADATA</div>
        <div class="meta-value">seed ${config.render.seed}<br>${config.render.viewport.width} × ${config.render.viewport.height}<br>${esc(config.render.theme)}</div>
        <div class="qa-status">QA CONTRACT · ${qaCount} required checks attached</div>
      </aside>
    </section>
  </main>`;
}

function diagramBlock(config) {
  return `<div class="meta-label">DIAGRAM</div><img src="${esc(config.content.diagram)}" alt="${esc(config.title)} 圖解" />`;
}

function formulaBlock(config) {
  const formula = config.content.formulae?.[0] || "";
  return formula ? `<div class="formula-card">${esc(formula)}</div>` : "";
}

function orderedItems(items=[], label="ITEMS") {
  if (!items.length) return "";
  return `<div class="quick-check"><div class="meta-label">${esc(label)}</div><ol>${items.map((q,i)=>`<li><strong>${i+1}.</strong> ${esc(q)}</li>`).join("")}</ol></div>`;
}

export function renderTeachAsset(root, config) {
  renderSharedShell(
    root,
    config,
    `${diagramBlock(config)}${formulaBlock(config)}${orderedItems(config.content.quick_check || [], "QUICK CHECK")}`
  );
}

export function renderPracticeAsset(root, config) {
  renderSharedShell(
    root,
    config,
    `${diagramBlock(config)}${formulaBlock(config)}${orderedItems(config.content.prompts || config.content.quick_check || [], "PRACTICE")}`,
    `<div class="meta-label">MODE</div><p class="meta-value">先作答，再對照提示；不直接顯示完整解答。</p>`
  );
}

export function renderAssessAsset(root, config) {
  const questions = config.content.questions || config.content.quick_check || [];
  renderSharedShell(
    root,
    config,
    `${diagramBlock(config)}${orderedItems(questions, "ASSESSMENT")}`,
    `<div class="meta-label">SCORING</div><p class="meta-value">${esc(config.content.scoring || "依 manifest / teacher key 評分")}</p>`
  );
}

export function renderDiagnoseAsset(root, config) {
  const cases = config.content.cases || config.content.quick_check || [];
  renderSharedShell(
    root,
    config,
    `${diagramBlock(config)}${formulaBlock(config)}${orderedItems(cases, "DIAGNOSE")}`,
    `<div class="meta-label">DIAGNOSTIC INTENT</div><p class="meta-value">${esc(config.content.diagnostic_intent || "辨識概念錯誤，而非只判斷答案對錯。")}</p>`
  );
}

export function renderReferenceAsset(root, config) {
  const references = config.content.references || config.content.quick_check || [];
  renderSharedShell(
    root,
    config,
    `${diagramBlock(config)}${formulaBlock(config)}${orderedItems(references, "REFERENCE NOTES")}`,
    `<div class="meta-label">USE</div><p class="meta-value">${esc(config.content.use_note || "快速查找、複習與解題時引用。")}</p>`
  );
}

export async function bootAsset({configUrl="./asset.json"}={}) {
  const root = document.querySelector("#asset-root");
  if (!root) throw new Error("#asset-root is required");
  try {
    const config = await loadAssetConfig(configUrl);
    const errors = validateAssetConfig(config);
    if (errors.length) return renderError(root, errors);
    if (config.family === "teach") return renderTeachAsset(root, config);
    if (config.family === "practice") return renderPracticeAsset(root, config);
    if (config.family === "assess") return renderAssessAsset(root, config);
    if (config.family === "diagnose") return renderDiagnoseAsset(root, config);
    if (config.family === "reference") return renderReferenceAsset(root, config);
    renderError(root, [`Unknown family '${config.family}'.`]);
  } catch (error) {
    renderError(root, [error.message]);
  }
}
