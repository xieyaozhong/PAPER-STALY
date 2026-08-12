# Physics Handout Design System

這份規格定義 PAPER-STALY 物理講義的統一視覺與教學元件，確保力學、波動、電磁、熱學、近代物理與實驗資料分析都像同一套教材。

## 1. Visual Language

關鍵字：

- scientific mission
- experimental physics
- high contrast
- vector first
- data driven
- dark editorial science

主視覺採深黑／深藍背景，白色文字，橘／青兩個主要科學語意色。

### 色彩語意

- `ORANGE`：力、加速度、熱源、能量輸入、電流、作用
- `CYAN`：速度、位移、軌跡、波、磁場、量測資料
- `WHITE`：主要結論、公式、物件本體
- `GRAY`：輔助線、參考線、未啟用狀態、背景網格
- `RED`：只用於警告、錯誤、危險或高能事件，不作普通裝飾

同一頁不可讓顏色失去物理意義。

## 2. Page Structure

A4 直式為主要輸出。

建議頁面結構：

```text
SECTION LABEL
章節標題
一句核心問題
────────────────────────
主圖解 / 主資料圖
────────────────────────
公式卡 + 概念卡
────────────────────────
例題 / 實驗 / 圖表判讀
────────────────────────
KEYWORDS / QUICK CHECK
頁碼 + attribution
```

每頁最多一個主要視覺焦點。

## 3. Evidence Labels

物理講義中的圖像固定標示來源類型：

- `DIAGRAM` — 教學概念示意
- `SIMULATION` — 模擬結果
- `EXPERIMENT` — 實驗量測
- `DATA` — 公開科學資料
- `OBSERVATION` — 實際觀測影像
- `MODEL` — 物理／數值模型

學生應能分辨「示意圖」與「真正量測資料」。

## 4. Formula Card

公式卡統一包含：

1. 公式
2. 每個符號的名稱
3. SI 單位
4. 成立條件
5. 常見誤用

範例：

```text
NEWTON'S SECOND LAW
F_net = ma

F_net  淨力 / N
m      質量 / kg
a      加速度 / m s⁻²

適用：慣性參考系、經典尺度
```

公式不能只有大字公式，必須附物理意義。

## 5. Diagram Rules

### 箭頭

- 力：橘色實線箭頭
- 速度：青色實線箭頭
- 加速度：橘色箭頭，可搭配 `a`
- 位移：青色虛線或向量箭頭
- 場線：依場類型使用統一線條，不當成真實粒子路徑
- 光線：細實線＋清楚方向

### 比例

如果圖不是按比例：

`SCHEMATIC / NOT TO SCALE`

如果圖中的箭頭長度代表大小，必須在圖說明確說明。

## 6. Graph Rules

所有圖表至少包含：

- 軸名稱
- SI 單位
- 刻度方向
- 零點是否省略
- 資料／模型標籤

不可用 3D 長條圖、裝飾性透視或無意義漸層。

### 語意

- 原始量測點：圓點
- 模型／擬合：線
- 不確定度：error bar 或 band
- 預測：虛線

## 7. Example Problem Card

例題框固定分四層：

```text
KNOWN
已知量

FIND
要求量

MODEL
使用的物理模型／公式

SOLUTION
代入 → 計算 → 單位 → 合理性檢查
```

答案不能只保留數值，最後需加一句物理解讀。

## 8. Experimental Physics Card

實驗頁固定包含：

- Research Question
- Variables
- Apparatus
- Procedure
- Data
- Analysis
- Uncertainty
- Conclusion

如果用真實資料，標示 dataset 與 attribution。

## 9. Misconception Card

統一名稱：

`COMMON MISCONCEPTION / 常見迷思`

適合處理：

- 速度為零不代表加速度為零
- 向心力不是額外的一種力
- 電流不是被電阻「消耗」
- 場線不是物質軌跡
- 熱與溫度不是同一物理量
- 量子模型不是微型太陽系

## 10. Quick Check

每 2–3 頁至少一個檢核元件：

- 判斷方向
- 比較大小
- 排序
- 圖表判讀
- 單位檢查
- 一句話解釋

避免整本只在章末才出題。

## 11. Chapter Composition

完整章節建議 12–18 頁：

1. 章首視覺＋問題
2. 前備概念
3. 核心現象
4. 主公式／模型
5. 圖解深化
6. 例題
7. 圖表判讀
8. 實驗／真實資料
9. 常見迷思
10. 綜合題
11. 章末概念鏈
12. 自我檢核

## 12. Asset Selection Priority

優先順序：

1. `SELF` project-original SVG
2. GREEN open-source assets
3. Public scientific data rendered by the project
4. YELLOW third-party images after license review
5. RED assets only as reference, never in commercial output

總入口：[`index.html`](index.html)
