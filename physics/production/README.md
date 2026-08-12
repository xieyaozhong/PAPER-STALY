# Physics Production System

這裡不是一本物理課本，而是 **可重複生產教材資產的系統**。

## 固定架構

```text
production/
├─ schema/
│  └─ asset.schema.json
├─ core/
│  ├─ runtime.js
│  ├─ theme.css
│  └─ README.md
├─ assets/
│  ├─ teach/
│  ├─ practice/
│  ├─ assess/
│  ├─ diagnose/
│  └─ reference/
├─ registry/
│  └─ assets.json
├─ tools/
│  ├─ validate-all.mjs
│  ├─ build-index.mjs
│  └─ render-all.mjs
├─ RUNBOOK.md
└─ index.html
```

## 生產模型

- 共用：`core/runtime.js` + `core/theme.css`
- 個別資產：薄設定 `asset.json` + 獨立 `index.html` + `manifest.json`
- 每個 asset 資料夾可單獨執行，不依賴唯一主程式
- 每個 asset 都有固定 `asset_id`
- render seed、viewport、fallback fonts 固定
- schema validation 在 render 前執行
- QA 與 learning objective / misconception tag 一起保存
- registry 是 batch validation / index / render 的唯一資產清單來源

## 五個 Asset Family

1. `teach` — 概念講解、資訊圖、示範頁
2. `practice` — 題目、引導練習、步驟卡
3. `assess` — 評量、檢核、測驗
4. `diagnose` — 迷思診斷、錯誤分類
5. `reference` — 公式表、圖表、單位與資料卡

詳細 family contract：[`assets/README.md`](assets/README.md)

## Source-first

正式來源是 HTML / SVG / JSON / CSS，不以 PDF 當母檔。
PNG / PDF 均視為可重建輸出。

## 第一組正式主題：牛頓第二定律

同一個 learning objective set 已建立五個不同用途的正式資產：

- `PHY-TEACH-MECH-NEWTON2-001`
- `PHY-PRACTICE-MECH-NEWTON2-001`
- `PHY-ASSESS-MECH-NEWTON2-001`
- `PHY-DIAGNOSE-MECH-NEWTON2-001`
- `PHY-REFERENCE-MECH-NEWTON2-001`

它們共用 Mechanics SVG 與 shared core，但各自保留自己的內容設定、seed、audience、traceability 與 QA。

總入口：[`index.html`](index.html)

Registry：[`registry/assets.json`](registry/assets.json)

## Batch workflow

```text
source
  ↓
validate
  ↓
build index
  ↓
batch render
  ↓
visual QA
  ↓
publish / compose
```

指令與平台說明：[`RUNBOOK.md`](RUNBOOK.md)

### Validation

```bash
node tools/validate-all.mjs
```

### Index generation

```bash
node tools/build-index.mjs
```

### Batch render

```bash
node tools/render-all.mjs
```

`render-all.mjs` 使用 Node 內建 HTTP server 與系統 Chromium / Chrome headless，不需要 npm 第三方套件。產生的 `_renders/` 不進版控。
