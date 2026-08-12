# Physics Chapter Template

每個物理章節建立在 `physics/chapters/<chapter-id>/`，至少包含以下檔案：

```text
README.md
ASSET_MANIFEST.csv
PAGE_PLAN.md
FORMULA_MAP.md
EXPERIMENTS.md
ATTRIBUTION.csv
assets/
```

## README.md

記錄：

- 章名
- 核心問題
- 學習目標
- 前備知識
- 概念鏈
- 使用的 Starter Pack

## PAGE_PLAN.md

建議 12–18 頁：

1. 章首視覺／核心問題
2. 現象觀察
3. 物理量與定義
4. 核心模型
5. 公式推理
6. 核心圖解
7. 例題 1
8. 圖表判讀
9. 實驗或真實資料
10. 常見迷思
11. 例題 2
12. 綜合應用
13. 概念鏈
14. 章末檢核

頁數依內容調整，不為湊頁數加入低資訊密度內容。

## FORMULA_MAP.md

每條公式記錄：

- equation
- variable definitions
- SI units
- assumptions
- related diagrams
- typical misconceptions
- example problem

## EXPERIMENTS.md

至少規劃一個：

- 可在教室完成的實驗
- Tracker / VPython / JS 模擬
- 公開真實資料分析

## ASSET_MANIFEST.csv

欄位：

```text
id,page,title,role,source,path,license_status,status,notes
```

## Evidence Label

所有科學視覺必須屬於：

- DIAGRAM
- SIMULATION
- EXPERIMENT
- DATA
- OBSERVATION
- MODEL

## Definition of Done

- 核心公式都有成立條件與 SI 單位
- 核心概念都有至少一張圖解
- 至少一頁含圖表／資料判讀
- 至少一個實驗或模擬
- 至少一個常見迷思
- 每 2–3 頁有一次 quick check
- 所有第三方內容完成 attribution
- A4 印刷與 Web SVG 都能使用
