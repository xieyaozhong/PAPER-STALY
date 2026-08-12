# Physics Production Runbook

## 1. Validate all registered assets

```bash
cd physics/production
node tools/validate-all.mjs
```

檢查內容：

- duplicate asset ID / path / entrypoint
- `asset.json`
- `manifest.json`
- `index.html`
- registry / config / manifest 一致性
- family-specific required fields
- render seed / viewport / fallback fonts
- diagram path
- manifest source path
- learning objective / misconception traceability
- QA checks

## 2. Check topic family coverage

```bash
node tools/check-topic-coverage.mjs
```

這一步以 `registry/topics.json` 與 topic blueprint 為準，確認：

- topic registry 與 blueprint ID 一致
- source diagram 存在
- 每個正式 topic 是否具備預期的 asset families
- asset 使用的 learning objective 是否屬於該 topic
- misconception tag 是否屬於該 topic

目前正式 topic 預設要求：

```text
teach + practice + assess + diagnose + reference
```

## 3. Rebuild production index

```bash
node tools/build-index.mjs
```

輸出：

```text
physics/production/index.html
```

索引只讀 `registry/assets.json`，並依 topic 分組。

## 4. Batch render PNG

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

## 5. Manual preview

asset 使用 ES module + fetch 讀取 `asset.json`，因此建議透過本機 HTTP server 預覽：

```bash
cd <repo-root>
python -m http.server 8000
```

然後開啟：

```text
http://localhost:8000/physics/production/
```

## 6. Production order

固定順序：

```text
topic blueprint
  ↓
asset source/config
  ↓
validate-all
  ↓
check-topic-coverage
  ↓
build index
  ↓
batch render
  ↓
visual QA
  ↓
publish / compose
```

不要跳過 validation 或 topic coverage 直接 render。
