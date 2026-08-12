# Physics Open Asset System

這個資料夾用來管理物理教材可使用的開放素材、模擬工具、科學資料、向量圖，以及可重複生產教材資產的 production layer。

## 快速入口

- **總素材瀏覽器：[`index.html`](index.html)**
- **正式生產系統：[`production/README.md`](production/README.md)**
- **正式 Asset Registry：[`production/index.html`](production/index.html)**
- **講義視覺規格：[`HANDOUT_DESIGN_SYSTEM.md`](HANDOUT_DESIGN_SYSTEM.md)**
- **資產／章節組裝模板：[`chapters/CHAPTER_TEMPLATE.md`](chapters/CHAPTER_TEMPLATE.md)**
- 授權政策：[`LICENSE_POLICY.md`](LICENSE_POLICY.md)
- 完整來源：[`SOURCES.md`](SOURCES.md)
- 全域素材 manifest：[`ASSET_MANIFEST.csv`](ASSET_MANIFEST.csv)

## Production Layer

本系統不是單一本書的 generator。正式資產採：

> **shared core + thin per-asset configuration**

每個 asset 都有自己的 `index.html`、`asset.json`、`manifest.json`，可獨立執行並保留 stable ID、render seed、viewport、fallback fonts、learning objectives、misconception tags 與 QA contract。

目前第一組正式主題「牛頓第二定律」已覆蓋五個 asset family：

- `teach` — 概念講解
- `practice` — 引導練習
- `assess` — 概念檢核
- `diagnose` — 迷思診斷
- `reference` — 公式／判讀卡

詳見 [`production/registry/assets.json`](production/registry/assets.json)。

## 素材範圍

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

## 已可直接使用的 Starter Packs

### Mechanics
- 10 張統一風格原創 SVG
- [`mechanics/README.md`](mechanics/README.md)
- [`mechanics/index.html`](mechanics/index.html)

### Waves & Optics
- 8 張統一風格原創 SVG
- [`waves-optics/README.md`](waves-optics/README.md)
- [`waves-optics/index.html`](waves-optics/index.html)

### Electricity & Magnetism
- 10 張統一風格原創 SVG
- [`electricity-magnetism/README.md`](electricity-magnetism/README.md)
- [`electricity-magnetism/index.html`](electricity-magnetism/index.html)

### Thermodynamics & Fluids
- 8 張統一風格原創 SVG
- [`thermodynamics-fluids/README.md`](thermodynamics-fluids/README.md)
- [`thermodynamics-fluids/index.html`](thermodynamics-fluids/index.html)

### Modern Physics
- 11 張統一風格原創 SVG
- [`modern-physics/README.md`](modern-physics/README.md)
- [`modern-physics/index.html`](modern-physics/index.html)

### Measurement & Experimental Physics
- 8 張統一風格原創 SVG
- [`measurement/README.md`](measurement/README.md)
- [`measurement/index.html`](measurement/index.html)

目前 Starter Packs 共 **55 張章節級原創 SVG**，另有 5 張共用基礎 SVG。

## 素材層級

### A — Raw / Data
CSV、HDF5、ROOT、JSON、實驗與公開科學資料。

### B — Simulation
JavaScript / Python 模擬、2D / 3D 物理引擎、電路／光學／碰撞／量子模擬。

### C — Diagram
自由體圖、力向量、波動、光路、電路、場線、熱與流體示意。

### D — Presentation
SVG、PNG、WebP、PDF、MP4、GIF 與可直接放入教材的輸出。

## 授權顏色

- 🟢 `GREEN`：可納入商用母素材庫；仍依授權保留 attribution / notice。
- 🟡 `YELLOW`：來源本身可用，但含第三方內容或需要逐項確認。
- 🔴 `RED`：NonCommercial、NoDerivatives、All Rights Reserved 或不適合商業教材直接重用。

詳見 [`LICENSE_POLICY.md`](LICENSE_POLICY.md)。

## 核心來源

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

## 共用素材

- [`assets/diagrams/free-body-template.svg`](assets/diagrams/free-body-template.svg)
- [`assets/diagrams/wave-basics.svg`](assets/diagrams/wave-basics.svg)
- [`assets/diagrams/ray-optics-basic.svg`](assets/diagrams/ray-optics-basic.svg)
- [`assets/diagrams/simple-circuit.svg`](assets/diagrams/simple-circuit.svg)
- [`assets/diagrams/field-lines.svg`](assets/diagrams/field-lines.svg)

## Lucide Physics Icon Starter Pack

位置：[`assets/icons/lucide/`](assets/icons/lucide/)

目前包含 `atom.svg`、`magnet.svg`、`battery.svg`、`gauge.svg`、`waves-horizontal.svg`、`thermometer.svg`、`orbit.svg`、`ruler.svg`、`scale.svg`、`telescope.svg`。

Lucide 為 ISC 授權；授權 notice 已保存在 [`assets/icons/lucide/LICENSE.txt`](assets/icons/lucide/LICENSE.txt)。
