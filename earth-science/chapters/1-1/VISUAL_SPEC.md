# 1-1 Visual Specification

## 1. Design language

關鍵字：`scientific mission`、`orbital data`、`deep space`、`geology diagram`、`high contrast`、`editorial science`。

整體需像科學任務簡報與研究機構資料頁，而不是科幻遊戲 UI。

## 2. Layout

- 主版型：A4 直式
- 基準網格：12 欄
- 外邊界：14–18 mm
- 圖文間距：4 / 8 / 12 / 16 / 24 mm 級距
- 每頁最多 1 個主要視覺焦點
- 核心圖解優先跨 8–12 欄
- 補充資料卡控制在 3–4 欄

## 3. Typography

- 大標題：高對比無襯線、較粗字重
- 內文：乾淨無襯線、避免過窄字面
- 數據／年代：等寬或 tabular numerals
- 英文 mission label 可使用全大寫與字距

建議層級：

- H1：章名
- H2：核心概念
- H3：資料卡／步驟
- BODY：說明
- LABEL：資料標記、來源、年代、單位

## 4. Color system

主介面以黑、白、灰為基礎。科學色只用於表示資料意義，不作純裝飾。

建議語意：

- 高溫／熔融：暖色序列
- 冷卻／水：冷色序列
- 密度層級：由淺至深
- 時間軸：單一主色漸進
- 正負異常：使用 diverging scientific colormap

避免彩虹色譜與無意義漸層。

## 5. Icons

統一：

- 單色
- 固定 stroke width
- rounded 或 geometric 選一套到底
- 同頁不混用 filled / outline

可用開源來源：

- Lucide — ISC
- Tabler Icons — MIT
- Material Symbols — Apache 2.0
- Font Awesome Free — 依實際版本授權

禁止：emoji、彩色 sticker、擬物 3D icon。

## 6. Image treatment

科學照片須有資訊價值，例如：原行星盤觀測、月球表面、火山逸氣、地球衛星影像。

處理方式：

- 優先保留真實科學色彩／標準 scientific composite
- 裁切需保留觀測主體
- 不過度套濾鏡
- 圖說必須標註「觀測影像／藝術想像／模擬」

## 7. Diagram style

- 自製向量示意優先
- 細節只保留與教學問題相關者
- 箭頭代表因果或運動時須明確
- 不用陰影製造假 3D，除非深度本身是概念
- 密度分異、盤面溫度、吸積過程需具有視覺方向性

## 8. Output

### Print
- A4
- 300 dpi raster minimum
- SVG/PDF 保留向量
- 文字不可 rasterize，除非字型授權或相容性要求

### Web
- SVG first
- WebP for photographs
- 2x raster fallback
- 圖片附 alt text

## 9. Branding guardrail

本教材可參考 NASA 科學視覺語言與使用可合法重用的 NASA 資料，但：

- 不把 NASA Meatball／Worm Logo 當教材識別
- 不造成 NASA、南一出版社或其他機構背書的印象
- 第三方 credit 素材逐項核對
