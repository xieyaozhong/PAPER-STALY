# Physics Production System

這裡不是一本物理課本，而是 **可重複生產教材資產的系統**。

## 現況

目前已有：

- **4 個正式 topic**
- **5 個 asset family**
- **20 個 registered assets**
- 4 份 topic blueprint
- asset schema + topic schema
- batch validation
- topic coverage validation
- grouped registry index
- zero-dependency headless render tool

正式 topic：

1. `mechanics/newton-second-law`
2. `mechanics/inclined-plane`
3. `mechanics/projectile-motion`
4. `mechanics/uniform-circular-motion`

四個 topic 都已完整覆蓋：

```text
teach + practice + assess + diagnose + reference
```

下一個 migration topic：`mechanics/momentum-collision`。

## 固定架構

```text
production/
├─ schema/
│  ├─ asset.schema.json
│  └─ topic.schema.json
├─ core/
│  ├─ runtime.js
│  ├─ theme.css
│  └─ README.md
├─ topics/
│  └─ mechanics/
├─ assets/
│  ├─ teach/
│  ├─ practice/
│  ├─ assess/
│  ├─ diagnose/
│  └─ reference/
├─ registry/
│  ├─ assets.json
│  └─ topics.json
├─ tools/
│  ├─ validate-all.mjs
│  ├─ check-topic-coverage.mjs
│  ├─ build-index.mjs
│  └─ render-all.mjs
├─ MIGRATION_QUEUE.csv
├─ RUNBOOK.md
└─ index.html
```

## 生產模型

### Topic layer

每個概念先有 topic blueprint，集中定義：

- topic ID / slug
- domain
- source diagram
- learning objectives
- misconception tags
- expected asset families

### Asset layer

每個正式 asset 採：

```text
<ASSET_ID>/
├─ index.html
├─ asset.json
└─ manifest.json
```

- 共用 `core/runtime.js` + `core/theme.css`
- 每個 asset 可獨立執行
- stable `asset_id`
- 固定 render seed / viewport / fallback fonts
- family-specific content contract
- QA / objective / misconception traceability

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

## Formal Topics

### 牛頓第二定律

Blueprint：[`topics/mechanics/newton-second-law.json`](topics/mechanics/newton-second-law.json)

Assets：`PHY-TEACH-MECH-NEWTON2-001`、`PHY-PRACTICE-MECH-NEWTON2-001`、`PHY-ASSESS-MECH-NEWTON2-001`、`PHY-DIAGNOSE-MECH-NEWTON2-001`、`PHY-REFERENCE-MECH-NEWTON2-001`

### 斜面受力

Blueprint：[`topics/mechanics/inclined-plane.json`](topics/mechanics/inclined-plane.json)

Assets：`PHY-TEACH-MECH-INCLINE-001`、`PHY-PRACTICE-MECH-INCLINE-001`、`PHY-ASSESS-MECH-INCLINE-001`、`PHY-DIAGNOSE-MECH-INCLINE-001`、`PHY-REFERENCE-MECH-INCLINE-001`

### 拋體運動

Blueprint：[`topics/mechanics/projectile-motion.json`](topics/mechanics/projectile-motion.json)

Assets：`PHY-TEACH-MECH-PROJECTILE-001`、`PHY-PRACTICE-MECH-PROJECTILE-001`、`PHY-ASSESS-MECH-PROJECTILE-001`、`PHY-DIAGNOSE-MECH-PROJECTILE-001`、`PHY-REFERENCE-MECH-PROJECTILE-001`

### 等速圓周運動

Blueprint：[`topics/mechanics/uniform-circular-motion.json`](topics/mechanics/uniform-circular-motion.json)

Assets：`PHY-TEACH-MECH-CIRCULAR-001`、`PHY-PRACTICE-MECH-CIRCULAR-001`、`PHY-ASSESS-MECH-CIRCULAR-001`、`PHY-DIAGNOSE-MECH-CIRCULAR-001`、`PHY-REFERENCE-MECH-CIRCULAR-001`

總入口：[`index.html`](index.html)

Asset Registry：[`registry/assets.json`](registry/assets.json)

Topic Registry：[`registry/topics.json`](registry/topics.json)

Migration Queue：[`MIGRATION_QUEUE.csv`](MIGRATION_QUEUE.csv)

## Batch workflow

```text
topic blueprint
  ↓
asset config / source
  ↓
validate-all
  ↓
check-topic-coverage
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
node tools/check-topic-coverage.mjs
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
