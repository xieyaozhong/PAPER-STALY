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
└─ tools/
   ├─ validate-all.mjs
   └─ build-index.mjs
```

## 生產模型

- 共用：`core/runtime.js` + `core/theme.css`
- 個別資產：薄設定 `asset.json` + 獨立 `index.html`
- 每個 asset 資料夾可單獨開啟，不依賴「唯一主程式」
- 每個 asset 都有固定 `asset_id`
- render seed 固定，避免輸出漂移
- schema validation 在 render 前執行
- QA 與 learning objective / misconception tag 一起保存

## 五個 Asset Family

1. `teach` — 概念講解、資訊圖、示範頁
2. `practice` — 題目、引導練習、步驟卡
3. `assess` — 評量、檢核、測驗
4. `diagnose` — 迷思診斷、錯誤分類
5. `reference` — 公式表、圖表、單位與資料卡

## Source-first

正式來源是 HTML / SVG / JSON / CSS，不以 PDF 當母檔。
PDF、PNG 等均視為可重建輸出。

## 第一個正式資產

`assets/teach/PHY-TEACH-MECH-NEWTON2-001/`

主題：牛頓第二定律 `F_net = ma`。

它示範完整規格：

- schema contract
- stable asset ID
- student-facing metadata
- learning objectives
- misconception tags
- deterministic render seed
- QA checklist
- 使用既有 Mechanics SVG
