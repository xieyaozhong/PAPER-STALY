# License Policy

本庫的目標不是單純收藏網址，而是建立可長期重用的地科教材素材系統。所有加入母素材庫的檔案都應能追溯來源與授權。

## GREEN — 優先納入

可優先作為教材母素材庫來源，但仍需遵守各自 attribution／notice：

- Public Domain / US Government works（仍檢查第三方例外）
- CC0
- CC BY 4.0 / CC BY 3.0
- MIT
- BSD-3-Clause
- Apache-2.0
- Taiwan Government Open Data License 1.0

## YELLOW — 逐項檢查

以下狀況不直接整批匯入：

- 官方網站同時包含政府作品與第三方授權素材
- 聚合平台，每個 dataset 授權不同
- 免費使用但不是明確 open license
- 衛星／地圖平台的服務條款與底層資料授權分離
- 圖片含人物、商標、NASA insignia、第三方 logo
- 書籍主體為 CC BY，但內嵌部分圖片另有版權

## RED — 不進商業母素材庫

- CC BY-NC / CC BY-NC-SA
- CC BY-ND
- All Rights Reserved
- 僅限個人或教育用途
- 無法確認來源或授權

可保留連結作「教學展示／參考」，但不要把檔案打包進可販售教材。

## 每個素材至少記錄

```text
asset_id
file_name
category
source_name
source_url
creator_or_agency
license
license_url
attribution
retrieved_at
modified
notes
```

## NASA / USGS / NOAA 特別規則

美國政府機構的多數官方作品可重用，但不要直接推論網站上每個檔案都屬 Public Domain。下載時仍需確認：

- 是否標示第三方 copyright
- NASA logo / insignia 使用限制
- 人物肖像與 endorsement 問題
- caption 中是否要求特殊 credit

## 教材輸出建議

每份教材最後保留一頁或一段：

```text
Image & Data Credits
NASA / USGS / NOAA / ESA / ...
```

並由 manifest 自動產生 attribution，避免人工遺漏。
