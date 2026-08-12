# Physics Asset License Policy

本專案可能用於付費教材、商業講義或公開網站，因此「免費下載」不等於「可商用」。物理素材依下列規則分類。

## 🟢 GREEN — 可進商用母素材庫

可接受的典型授權：

- Public Domain / U.S. Government works（仍需確認個別頁面 credit）
- CC0
- CC BY 4.0 / CC BY 3.0
- MIT
- BSD-2-Clause / BSD-3-Clause
- Apache-2.0
- ISC
- zlib
- LGPL / GPL：適合程式與互動工具，但再散布修改版時必須遵守其 copyleft 條件

### 使用原則

1. 保留作者、機構、來源 URL、授權與下載日期。
2. MIT / BSD / Apache / GPL / LGPL 等程式碼若直接打包，保留 LICENSE / NOTICE。
3. CC BY 素材在圖說或 credits 中標示作者／機構與授權。
4. 政府機構網站仍需檢查個別圖片是否標示第三方攝影師或 copyright。

## 🟡 YELLOW — 逐項確認

常見情況：

- 網站整體開放，但不同圖片有不同 credit。
- 開源軟體本身可用，但 example assets 含第三方素材。
- 教科書正文是開放授權，但個別插圖由第三方提供。
- Wikimedia Commons：每個檔案有自己的 license。
- NIST：大部分聯邦政府作品可重用，但其 Image Gallery 中存在受版權保護的攝影作品。
- PhET：不同檔案類型、版本與 source code 有不同授權，必須以當前官方 licensing page 與該 repository LICENSE 為準。

## 🔴 RED — 不進商用母素材庫

- CC BY-NC / CC BY-NC-SA
- CC BY-ND
- All Rights Reserved
- 僅允許 classroom / editorial / non-commercial use
- 無授權聲明或來源不明

可保留在 `reference-only` 清單，供教學研究或重新自製圖解參考，但不可直接進入商業教材。

## 重要案例

### OpenStax Physics
`Physics` 版本正文為 CC BY 4.0，但其 art attribution 說明指出部分圖片可能有獨立來源或限制，因此圖像仍需逐張確認 caption。

### OpenStax University Physics / College Physics 2e
目前為 CC BY-NC-SA 4.0，僅可列為 reference-only，不納入商用素材白名單。

### PhET
PhET 的授權政策近年有調整，而且 regular simulation file、simulation source code、common code 的授權可能不同。任何實際加入專案的 PhET 檔案都必須重新讀取當前官方授權頁與 repository LICENSE。

### NIST
NIST 一般資訊由聯邦政府製作時通常可散布／複製，但 Gallery 內有第三方攝影作品。下載任何 NIST 圖片前先查看 `Credit` 與使用限制。

## Attribution 欄位

每個第三方素材至少記錄：

```text
asset_id
local_filename
title
creator
institution
source_url
license
license_url
credit_line
download_date
modified
commercial_ok
review_status
```
