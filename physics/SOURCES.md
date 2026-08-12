# Physics Open Sources

> Last review: 2026-08-12
>
> 本清單以「可直接用於教材／互動網站」為目標。實際下載前仍以來源頁與單一檔案的 LICENSE / credit 為準。

## S 級｜優先建立母素材庫

### 1. OpenStax Physics
- URL: https://openstax.org/books/physics/
- 類型：高中／基礎物理教材、圖解、題目架構
- 主授權：CC BY 4.0
- Status: 🟡 YELLOW
- 原因：正文可改作與商用，但 OpenStax 明確說明部分 art 可能有獨立來源／授權；抽圖時必須逐張檢查 caption。
- 適合：力學、能量、波、光、電學、磁學、熱學、現代物理的圖解參考與可重用開放圖。

### 2. CERN Open Data Portal
- URL: https://opendata.cern.ch/
- 類型：粒子物理真實資料、事件資料、CMS / ATLAS / ALICE / LHCb 教學資料
- 授權：datasets 與 metadata 為 CC0；其他內容看個別頁面
- Status: 🟢 GREEN（data） / 🟡 YELLOW（其他 content）
- 適合：粒子碰撞事件、直方圖、現代物理、資料分析、Jupyter 教材。

### 3. Gravitational Wave Open Science Center (GWOSC)
- URL: https://gwosc.org/
- 類型：LIGO / Virgo / KAGRA 重力波公開資料、event catalog、tutorials
- 授權：公開資料 CC BY 4.0；依官方 acknowledgement 規範引用
- Status: 🟢 GREEN
- 適合：波動、頻譜、時域訊號、傅立葉分析、重力波、真實科學資料判讀。

### 4. Open Source Physics / ComPADRE
- URL: https://www.compadre.org/osp/
- 類型：物理模擬、Tracker、EJS、Data Tool、計算物理
- 程式碼授權：OSP source / compiled code 依 GPL v2 or later
- Narrative / curriculum：可能由作者另行授權，需逐項確認
- Status: 🟢 GREEN（code，遵守 GPL） / 🟡 YELLOW（curriculum）
- 適合：運動學、力學、波動、熱學、統計物理、計算模型。

### 5. Singapore Open Source Physics
- URL: https://www.compadre.org/osp/items/detail.cfm?ID=15208
- 類型：大量 Easy JavaScript / Easy Java Simulation 物理互動模型入口
- ComPADRE record：Public Domain
- Status: 🟢 GREEN（以該 record 標示為準；進一步抓單一模型時仍檢查其 metadata）
- 適合：中學物理互動教材與教學模型。

### 6. Manim Community
- URL: https://github.com/ManimCommunity/manim
- 類型：Python 科學／數學動畫引擎
- 授權：MIT
- Status: 🟢 GREEN
- 適合：向量、運動、波、場線、光學、相圖、微積分物理動畫。

### 7. Matter.js
- URL: https://github.com/liabru/matter-js
- 類型：Web 2D rigid-body physics engine
- 授權：MIT
- Status: 🟢 GREEN
- 適合：碰撞、重力、摩擦、彈性、約束、剛體互動教材。

### 8. Three.js
- URL: https://github.com/mrdoob/three.js
- 類型：Web 3D rendering library
- 授權：core MIT
- Status: 🟢 GREEN（core） / 🟡 YELLOW（examples / bundled third-party assets 逐項確認）
- 適合：3D 力向量、軌道、場、光學、分子、空間物理示意。

### 9. VPython
- URL: https://github.com/vpython/vpython-jupyter
- 類型：Python / Jupyter 即時 3D 科學視覺化
- 授權：MIT
- Status: 🟢 GREEN
- 適合：拋體、軌道、彈簧、電磁場、向量、碰撞與實驗模型。

### 10. QuTiP
- URL: https://github.com/qutip/qutip
- 類型：Quantum Toolbox in Python
- 授權：BSD-3-Clause
- Status: 🟢 GREEN
- 適合：量子態、Bloch sphere、量子振盪、量子光學、開放量子系統。

## A 級｜專題與互動工具

### 11. Tracker Video Analysis
- URL: https://github.com/OpenSourcePhysics/tracker
- 類型：影片追蹤、運動學、模型疊加、實驗數據分析
- 基於 OSP；repo 內有 LICENSE
- Status: 🟢 GREEN（遵守 repo / GPL 條件）
- 適合：自由落體、拋體、碰撞、圓周運動、簡諧運動等真實影片分析。

### 12. CircuitJS1
- URL: https://github.com/sharpie7/circuitjs1
- 類型：瀏覽器電路模擬器
- 授權：GPL-2.0 or later
- Status: 🟢 GREEN（程式；散布修改版需遵守 GPL）
- 適合：直流電路、RC、RLC、二極體、晶體管、邏輯電路。

### 13. NIST Physics / Physical Measurement Laboratory
- URL: https://www.nist.gov/physics
- 類型：SI、量測、原子鐘、量子、光學、磁學、熱學、輻射與科學資料
- 一般 NIST 聯邦政府資訊多屬 public information；但個別 Gallery 圖片可能有第三方 copyright
- Status: 🟡 YELLOW
- 適合：測量學、SI、常數、量子實驗、科學儀器、標準與實驗實景。

### 14. p5.js
- URL: https://github.com/processing/p5.js
- 類型：Web creative coding / Canvas / sound
- 授權：LGPL-2.1
- Status: 🟢 GREEN（遵守 LGPL）
- 適合：自製波形、粒子、場線、互動圖、教學動畫。

### 15. Lucide
- URL: https://github.com/lucide-icons/lucide
- 類型：UI SVG icons
- 授權：ISC
- Status: 🟢 GREEN
- 適合：教材 UI、速度、計時、燈泡、電池、溫度、尺、實驗工具等輔助 icon。

### 16. Tabler Icons
- URL: https://github.com/tabler/tabler-icons
- 類型：SVG icon library
- 授權：MIT
- Status: 🟢 GREEN
- 適合：統一教材圖示語言。

### 17. Material Symbols
- URL: https://fonts.google.com/icons
- 類型：Google Material SVG / variable icon system
- 授權：Apache-2.0
- Status: 🟢 GREEN
- 適合：UI 補缺口，不建議與 Lucide / Tabler 在同一資訊層級混用。

## Modern Physics / Data 特別來源

### 18. CERN CMS Open Data Jupyter Materials
- URL: https://opendata.cern.ch/record/cms-5101
- 類型：Jupyter + CMS CSV 教學範例
- Portal record data：CC0
- Status: 🟢 GREEN（下載後再檢查 notebook repository 本身 LICENSE）
- 適合：粒子事件、直方圖、資料清理、Python 物理實作。

### 19. NIST scientific data images
- URL: https://www.nist.gov/image-gallery
- 類型：原子、量子、光學、標準、儀器與 scientific data images
- Status: 🟡 YELLOW
- 原因：Gallery 同時存在 `Courtesy NIST` scientific data 與有明確攝影師 copyright 的照片；只下載個別頁面確認可重用的項目。

## Reference-only / 需警告

### 20. OpenStax University Physics Vol. 1–3
- URL: https://openstax.org/details/books/university-physics-volume-1
- 目前主授權：CC BY-NC-SA 4.0
- Status: 🔴 RED for commercial master asset
- 用途：概念與章節架構參考；商業教材不要直接抽圖或改作。

### 21. OpenStax College Physics 2e
- URL: https://openstax.org/details/books/college-physics-2e
- 目前主授權：CC BY-NC-SA 4.0
- Status: 🔴 RED for commercial master asset

### 22. PhET Interactive Simulations
- URL: https://phet.colorado.edu/en/licensing
- 類型：高品質互動模擬
- Status: 🟡 YELLOW / 🔴 commercial caution
- 原因：授權政策與檔案類型有差異，而且近年政策有調整。Regular simulation、simulation source、common source code 可能分別使用 CC、GPL、MIT 或其他條款；任何實際包入專案的檔案都必須重新查當前官方 licensing page 與該 repo LICENSE。
- 建議：非商業課堂可直接使用官方連結；商業教材不要預設可以嵌入或截圖。

### 23. Falstad Math / Physics Applets
- URL: https://www.falstad.com/mathphysics.html
- 授權頁：課堂使用與未修改 screenshot 可用；修改／再散布主要限非商業，其他用途需聯絡作者
- Status: 🔴 RED for commercial master asset
- 用途：互動設計參考；若要商業教材，建議用 Matter.js / p5.js / Manim 自製等效圖解。

### 24. Wikimedia Commons
- URL: https://commons.wikimedia.org/
- 類型：大量物理實驗、歷史科學圖、向量圖、儀器照片
- Status: 🟡 YELLOW
- 原因：每個檔案授權不同；只加入已確認 Public Domain / CC0 / CC BY / CC BY-SA 且符合專案用途的單檔。

## 建議的素材分工

```text
真實資料       → CERN Open Data / GWOSC / NIST
基礎教材圖解   → OpenStax Physics + 自製 SVG
運動實驗       → Tracker / OSP
2D 互動        → Matter.js / p5.js
3D 互動        → VPython / Three.js
動畫影片       → Manim
電路           → CircuitJS1
量子           → QuTiP
圖示           → Lucide / Tabler / Material Symbols
```
