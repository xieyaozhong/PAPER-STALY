# Physics Open Asset System

這個資料夾用來管理物理教材可使用的開放素材、模擬工具、科學資料、向量圖與授權資訊。

## 目標

建立一套可重複使用於講義、簡報、互動網站與題目圖解的物理素材母庫，涵蓋：

```text
01_MECHANICS/
02_ENERGY/
03_WAVES/
04_OPTICS/
05_ELECTRICITY/
06_MAGNETISM/
07_THERMODYNAMICS/
08_FLUIDS/
09_MODERN_PHYSICS/
10_MEASUREMENT/
11_OPEN_DATA/
12_INTERACTIVE/
13_ICONS_DIAGRAMS/
14_ANIMATION/
```

## 已可直接使用的章節素材包

### Mechanics Starter Pack
入口：[`mechanics/README.md`](mechanics/README.md)

已完成 10 張統一風格原創 SVG：牛頓第二定律、斜面受力、拋體運動、等速圓周運動、動量碰撞、機械能、胡克定律、力矩、滑輪、運動圖像。

可直接查看縮圖 Gallery：[`mechanics/index.html`](mechanics/index.html)

### Waves & Optics Starter Pack
入口：[`waves-optics/README.md`](waves-optics/README.md)

已完成 8 張統一風格原創 SVG：波的基本量、疊加、駐波、都卜勒效應、反射、折射、凸透鏡成像、雙狹縫干涉。

素材清單：[`waves-optics/ASSET_MANIFEST.csv`](waves-optics/ASSET_MANIFEST.csv)

## 素材層級

### A — Raw / Data
- CSV / HDF5 / ROOT / JSON
- 實驗與公開科學資料
- 波形、粒子事件、量測資料

### B — Simulation
- JavaScript / Python 模擬
- 2D / 3D 物理引擎
- 電路、光學、碰撞、量子模擬

### C — Diagram
- 自由體圖
- 力向量
- 波動示意
- 光路
- 電路
- 場線
- 熱與流體示意

### D — Presentation
- SVG
- PNG / WebP
- PDF
- MP4 / GIF
- 可直接放進講義的圖表

## 授權顏色

- 🟢 `GREEN`：可納入商用母素材庫；仍保留必要 attribution / notice。
- 🟡 `YELLOW`：來源本身可用，但內含第三方內容或需要逐項確認。
- 🔴 `RED`：NonCommercial、NoDerivatives、All Rights Reserved 或不適合商業教材直接重用。

詳見 [`LICENSE_POLICY.md`](LICENSE_POLICY.md)。

## 第一批核心來源

### 教材與圖解
- OpenStax Physics
- NIST Physics / Physical Measurement Laboratory
- Wikimedia Commons（逐檔檢查）

### 模擬／動畫
- Open Source Physics / Tracker
- Manim Community
- Matter.js
- Three.js
- VPython
- CircuitJS1
- QuTiP

### 真實科學資料
- CERN Open Data
- Gravitational Wave Open Science Center (GWOSC)

### UI / 圖示
- Lucide
- Tabler Icons
- Material Symbols

完整來源與授權狀態：[`SOURCES.md`](SOURCES.md)

機器可讀清單：[`ASSET_MANIFEST.csv`](ASSET_MANIFEST.csv)

視覺規格：[`VISUAL_SYSTEM.md`](VISUAL_SYSTEM.md)

授權紀錄模板：[`ATTRIBUTION_TEMPLATE.csv`](ATTRIBUTION_TEMPLATE.csv)

## 已放入專案的自製基礎 SVG

- [`assets/diagrams/free-body-template.svg`](assets/diagrams/free-body-template.svg)
- [`assets/diagrams/wave-basics.svg`](assets/diagrams/wave-basics.svg)
- [`assets/diagrams/ray-optics-basic.svg`](assets/diagrams/ray-optics-basic.svg)
- [`assets/diagrams/simple-circuit.svg`](assets/diagrams/simple-circuit.svg)
- [`assets/diagrams/field-lines.svg`](assets/diagrams/field-lines.svg)

## 已加入的 Lucide 物理 icon starter pack

位置：[`assets/icons/lucide/`](assets/icons/lucide/)

目前包含 `atom.svg`、`magnet.svg`、`battery.svg`、`gauge.svg`、`waves-horizontal.svg`、`thermometer.svg`、`orbit.svg`、`ruler.svg`、`scale.svg`、`telescope.svg`。

Lucide 為 ISC 授權；授權 notice 已一併保存在 [`assets/icons/lucide/LICENSE.txt`](assets/icons/lucide/LICENSE.txt)。
