# Physics Production Runbook

## 1. Validate all registered assets

```bash
cd physics/production
node tools/validate-all.mjs
```

檢查內容：

- registry path
- `asset.json`
- `manifest.json`
- `index.html`
- required metadata
- render seed / viewport / fallback fonts
- diagram path
- QA checks

## 2. Rebuild production index

```bash
node tools/build-index.mjs
```

輸出：

```text
physics/production/index.html
```

索引只讀 `registry/assets.json`，不要手動維護兩套 asset list。

## 3. Batch render PNG

```bash
node tools/render-all.mjs
```

此工具無 npm 第三方依賴，但需要系統存在 Chromium / Chrome。

如果無法自動找到瀏覽器：

```bash
CHROME_BIN=/path/to/chrome node tools/render-all.mjs
```

Windows PowerShell：

```powershell
$env:CHROME_BIN="C:\Program Files\Google\Chrome\Application\chrome.exe"
node tools/render-all.mjs
```

輸出：

```text
physics/production/_renders/<ASSET_ID>.png
```

## 4. Manual preview

asset 使用 ES module + fetch 讀取 `asset.json`，因此建議透過本機 HTTP server 預覽：

```bash
cd <repo-root>
python -m http.server 8000
```

然後開啟：

```text
http://localhost:8000/physics/production/
```

## 5. Production order

固定順序：

```text
asset source
  ↓
validate
  ↓
build index
  ↓
batch render
  ↓
visual QA
  ↓
publish / compose
```

不要跳過 validation 直接 render。
