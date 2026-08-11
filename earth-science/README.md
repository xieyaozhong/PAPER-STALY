# Earth Science Open Asset System

這個資料夾用來管理地球科學教材的開放素材與科學視覺化資源。

## 五層架構

```text
01_RAW_DATA/
├─ DEM
├─ Bathymetry
├─ Satellite
├─ Earthquake
├─ Weather
├─ Ocean
└─ Geology

02_SCIENCE_ASSETS/
├─ NASA
├─ USGS
├─ NOAA
├─ ESA
├─ Smithsonian
├─ Geoscience_Australia
└─ Taiwan_Open_Data

03_VISUAL_LANGUAGE/
├─ FGDC_patterns
├─ geological_symbols
├─ cmocean
├─ cmweather
├─ weather_icons
└─ map_symbols

04_RENDERING/
├─ QGIS
├─ GeoMapApp
├─ GPlates
├─ Python
└─ Blender

05_INTERACTIVE/
├─ CesiumJS
├─ MapLibre
└─ deck.gl
```

> Git 不追蹤空資料夾，所以目前先用文件與 manifest 定義結構；實際素材加入後再建立對應目錄。

## 章節素材包

- [`chapters/1-1/`](chapters/1-1/) — **1-1 地球的起源與演變**：星雲收縮 → 原行星盤 → 吸積 → 分異 → 月球形成 → 大氣與海洋；已建立 46 項 Asset Manifest、核心圖解 brief、視覺規格、下載優先序與 attribution 模板。

## 素材分級

### A — Primitive
原始資料：GeoTIFF、CSV、GeoJSON、Shapefile、NetCDF、DEM。

### B — Scientific
加工後科學素材：Hillshade、Contour、Fault Map、Bathymetry、Temperature Map、Satellite Composite。

### C — Diagram
教學示意：Plate Boundary、Rock Cycle、Weather Front、Earth Interior、Orbit。

### D — Presentation
真正放入講義或簡報的 SVG、PNG、WebP、PDF。

## 授權顏色

- 🟢 `GREEN`：可作母素材庫，仍依授權保留必要 attribution。
- 🟡 `YELLOW`：逐項檢查或含第三方例外。
- 🔴 `RED`：NC、ND、All Rights Reserved 或不適合商業教材重用。

詳見 [`LICENSE_POLICY.md`](LICENSE_POLICY.md)。

## 核心來源

目前優先級最高：

- NASA Scientific Visualization Studio
- NASA Blue Marble
- USGS
- NOAA / NOAA Ocean Exploration
- Natural Earth
- GEBCO
- NOAA ETOPO
- Macrostrat
- FGDC Geologic Patterns
- GPlates / EarthByte
- Smithsonian Open Access
- Copernicus Sentinel / ESA WorldCover
- 台灣地質雲
- 中央氣象署 Open Data
- 國土測繪中心／台灣 DTM
- NODASS

完整清單：[`SOURCES.md`](SOURCES.md)

機器可讀清單：[`ASSET_MANIFEST.csv`](ASSET_MANIFEST.csv)
