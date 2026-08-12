# Production Asset Families

每個資產都是一個可獨立執行的資料夾，至少包含：

```text
<ASSET_ID>/
├─ index.html
├─ asset.json
└─ manifest.json
```

資產本體不複製 shared runtime/theme；透過相對路徑引用共用 core。

## teach

用途：概念講解、示範、資訊圖、短教學頁。

必要特徵：
- learning objectives
- diagram / model / data visual
- concise summary
- quick check

## practice

用途：引導練習、步驟題、學生作答頁。

必要特徵：
- prompts
- objective traceability
- student-facing 不洩漏完整答案

## assess

用途：評量、短測、章節檢核。

必要特徵：
- questions
- scoring metadata
- coverage QA

## diagnose

用途：迷思診斷、錯誤推理分類、補救教學入口。

必要特徵：
- misconception tags
- diagnostic intent
- student reasoning cases

## reference

用途：公式卡、單位卡、圖表、定義與快速查閱資料。

必要特徵：
- compact formula / rule set
- clear units / symbol meaning
- common traps reminder

## Stable ID

格式：

`PHY-<FAMILY>-<DOMAIN>-<TOPIC>-<NNN>`

例如：

`PHY-DIAGNOSE-MECH-NEWTON2-001`

## 禁止事項

- 不把單一 PDF 當來源母檔
- 不在 shared core 裡硬寫某一 asset 的題目內容
- 不建立唯一大型 generator
- 不省略 seed、viewport、fallback fonts
- 不建立無 learning objective / misconception traceability 的正式 asset
