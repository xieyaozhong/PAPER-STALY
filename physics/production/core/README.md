# Shared Production Core

`runtime.js` 與 `theme.css` 是共用引擎；每個 asset 只保留薄設定與自己的入口。

## 原則

- 不建立單一大型 generator。
- asset 必須能獨立執行。
- `asset.json` 是單一資產的內容／metadata contract。
- render 前先跑 validation。
- `render.seed` 固定，確保 deterministic output。
- 字型使用 fallback stack，不依賴不可攜字型。
- QA metadata 與 learning objective / misconception tags 永遠跟資產一起版本控制。

## 新增 Asset

1. 在正確 family 下新增獨立資料夾。
2. 建立 `asset.json`。
3. 建立 `index.html`，只引入 shared core。
4. 先驗證再 render。
5. 加入 `registry/assets.json`。
6. 執行 `tools/validate-all.mjs`。
7. 執行 `tools/build-index.mjs` 更新索引。

## 可擴充 Renderer

目前 shared runtime 先實作 `teach` renderer；之後依 family 增加：

- `renderPracticeAsset`
- `renderAssessAsset`
- `renderDiagnoseAsset`
- `renderReferenceAsset`

Renderer 應保持小型、可測試，不把 asset-specific 文本寫入 core。
