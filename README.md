# StickerMaster AI：專業級貼圖批次製作與智慧去背裁切大師

專業級的 AI 貼圖製作工具，提供批次處理與智慧去背功能。

## 📋 前置需求

在此專案開始之前，請確保您的環境已安裝以下工具：

- [Node.js](https://nodejs.org/) (建議 v18 或以上版本)
- [Git](https://git-scm.com/)

## 🚀 安裝說明

1. **複製專案**

   ```bash
   git clone <repository_url>
   cd Sticker_Master_AI
   ```

2. **安裝套件**

   ```bash
   npm install
   ```

3. **啟動開發伺服器**

   ```bash
   npm run dev
   ```

   啟動後，請在瀏覽器開啟顯示的網址 (預設為 `http://localhost:3000`)。

## 📖 操作指南

### 1. 上傳圖片
- 支援 **拖曳 (Drag & Drop)** 或點擊 **「+」** 按鈕上傳。
- 支援多張圖片批次處理。
- 支援格式：JPG, PNG, WebP。

### 2. 階段一：裁切與去背
在此階段，您可以設定如何將一張大圖裁切成多張小圖（例如 4x3 的貼圖掃描檔），並移除背景。

- **格線設定 (Grid)**：調整「橫列 (Rows)」與「直欄 (Cols)」來決定裁切數量。
- **手動對齊 (Manual Alignment)**：
  - 開啟 **「啟用手動對齊模式」**。
  - **拖曳線條**：直接在預覽圖上拖曳格線，精準對齊每個貼圖。
  - **手機版支援**：支援觸控拖曳，方便在手機/平板上操作。
- **AI 智慧去背 (AI Background Removal)**：
  - 開啟 **「自動 AI 智慧去背」**。
  - 系統會自動移除每一張裁切後小圖的背景（完全本地運算，隱私安全）。
  - **進階設定**：點擊箭頭展開，可調整邊緣容差、保護封閉區域或增強文字辨識。

### 3. 階段二：美化與輸出
當核心處理（裁切+去背）完成後，進入此階段進行美化。

- **常用規格 (Presets)**：一鍵套用 LINE (320px) 或 Telegram (512px) 的標準尺寸。
- **留白間距 (Margin)**：調整貼圖周圍的透明留白大小。
- **白色描邊 (Stroke)**：為貼圖加上白邊（或自訂顏色），增加貼圖在深色背景下的可視度。
- **陰影與柔化 (Shadow & Feathering)**：增加立體感與邊緣平滑度。
- **輸出格式**：選擇 PNG (通用透明) 或 WebP (輕量化)。

### 4. 下載成品
- 點擊 **「下載全部成果 ZIP」**，將所有製作好的貼圖打包下載。


## 🛠️ 開發與指令

- `npm run dev`: 啟動開發伺服器
- `npm run build`: 建置生產環境版本 (檔案位於 `dist` 資料夾)
- `npm run preview`: 預覽建置後的版本

## 📦 部署 (GitHub Pages)

本專案已設定 GitHub Actions 自動部署流程。

1. 將程式碼推送到 GitHub 的 `main` 或 `master` 分支。
2. GitHub Actions 會自動執行：
   - 安裝依賴
   - 建置專案
   - 將 `dist` 資料夾的內容部署到 `gh-pages` 分支
3. 請至 GitHub Repository 的 **Settings > Pages**，確認 Source 設定為 **Deploy from a branch**，並選擇 `gh-pages` 分支。

## 📝 專案結構

- `.github/workflows/deploy.yml`: 自動部署設定檔
- `src`: 原始程式碼
- `dist`: 建置輸出目錄 (由 `npm run build` 產生)
