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
