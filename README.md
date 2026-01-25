# StickerMaster AI：專業級貼圖批次製作與智慧去背裁切大師

# StickerMaster AI: Professional Batch Sticker Maker & Smart Background Removal

<div align="center">
  <p><strong>專業級的 AI 貼圖製作工具，提供批次處理與智慧去背功能。</strong></p>
  <p><strong>A professional-grade AI sticker creation tool offering batch processing and smart background removal.</strong></p>
</div>

---

## 🌟 功能特色 (Features)

### 🇹🇼 繁體中文

* **批次處理**: 支援多張圖片同時上傳與處理，大幅提升製作效率。
* **兩階段製作流程**:
  * **階段一 (Core Processing)**: 裁切掃描檔並移除背景。
  * **階段二 (Beautification)**: 美化貼圖並輸出。
* **靈活的格線設定**: 支援自訂橫列 (Rows) 與直欄 (Cols)，或使用 AI 自動偵測邊界。
* **手動精準對齊**: 獨家「手動對齊模式」，可直接拖曳格線調整每個貼圖的裁切範圍。
* **AI 智慧去背**: 內建本機端 AI 模型，自動移除背景，保護隱私（無須上傳圖片到伺服器）。
* **專業美化效果**:
  * **白色描邊 (Stroke)**: 增加貼圖在深色背景的可視度。
  * **陰影 (Shadow)**: 增加立體感。
  * **羽化 (Feathering)**: 柔化邊緣。
* **即時預覽**: 隨時切換「原始圖稿」與「美化預覽」模式。
* **多種輸出規格**: 內建 LINE (320px) 與 Telegram (512px) 預設尺寸。

### 🇺🇸 English

* **Batch Processing**: Upload and process multiple images simultaneously for maximum efficiency.
* **Two-Stage Workflow**:
  * **Stage 1 (Core Processing)**: Crop scanned sheets and remove backgrounds.
  * **Stage 2 (Beautification)**: Enhance stickers and export.
* **Flexible Grid System**: Analyze rows and columns automatically or define them manually.
* **Precise Manual Alignment**: Exclusive "Manual Mode" allows dragging grid lines directly to adjust crop areas perfectly.
* **AI Smart Removal**: Built-in local AI model removes backgrounds automatically, ensuring privacy (images are processed locally).
* **Professional Beautification**:
  * **Stroke**: Add white borders for better visibility on dark backgrounds.
  * **Shadow**: Add depth to your stickers.
  * **Feathering**: Soften edges for a polished look.
* **Instant Preview**: Toggle between "Original" and "Result" modes instantly.
* **Export Presets**: Built-in presets for LINE (320px) and Telegram (512px).

---

## 📖 使用指南 (Usage Guide)

### 1. 上傳圖片 / Upload Images

* **中文**: 將掃描好的貼圖手稿（或是多張圖片）直接拖曳到畫面中央，或點擊「+」按鈕上傳。
* **English**: Drag and drop your scanned sticker sheets (or multiple images) into the center, or click the "+" button to upload.

### 2. 階段一：裁切與去背 / Stage 1: Crop & Remove Background

這是將大張掃描檔變成單張貼圖的關鍵步驟。
This is the key step to turn large scanned sheets into individual stickers.

#### 格線設定 (Grid Settings)

* **Rows & Cols**: 設定圖片中貼圖的排列數量（例如 3x4）。
  * *Set the number of stickers in the image layout (e.g., 3x4).*
* **手動對齊 (Manual Alignment)**:
  * 啟用 **「啟用手動對齊模式」 (Enable Manual Alignment)**。
  * 直接在預覽圖上 **拖曳虛線**，調整切割範圍。
  * *Enable this mode to drag the dashed grid lines directly on the preview to adjust the crop area.*
* **AI 偵測 (AI Detection)**:
  * 點擊 **「AI 智慧偵測邊界」 (AI Smart Detect)** 嘗試自動尋找貼圖間隙（實驗性功能）。
  * *Click "AI Smart Detect" to attempt automatic gap detection (Experimental).*

#### AI 去背 (AI Background Removal)

* 啟用 **「自動 AI 智慧去背」 (Auto AI Background Removal)**。
* **進階設定 (Advanced)**:
  * **邊緣容差 (Tolerance)**: 調整去背的靈敏度。 *Adjust sensitivity.*
  * **保護封閉區 (Protect Internal)**: 避免錯誤移除貼圖內部的顏色。 *Prevent removing colors inside the sticker.*

點擊 **「執行核心處理」 (Perform Core Processing)** 開始切割與去背。
Click **"Perform Core Processing"** to start cropping and background removal.

### 3. 階段二：美化與輸出 / Stage 2: Beautify & Export

處理完素材後，在此階段統一加上效果。
Apply effects uniformly after processing the base materials.

* **規格 (Presets)**: 選擇 LINE, Telegram 或自訂尺寸。
  * *Choose LINE, Telegram, or custom dimensions.*
* **留白 (Margin)**: 調整內容與邊框的距離。
  * *Adjust the distance between content and borders.*
* **描邊 (Stroke)** / **陰影 (Shadow)**: 自由開關與調整參數。
  * *Toggle and adjust parameters freely.*
* **輸出格式 (Export Format)**: 支援 PNG (透明背景) 或 WebP。
  * *Supports PNG (Transparent) or WebP.*

最後點擊 **「下載全部成果 ZIP」 (Download All ZIP)** 即可獲得成品！
Finally, click **"Download All ZIP"** to get your stickers!

---

## 🛠️ 開發與安裝 (Development & Installation)

### 前置需求 (Prerequisites)

* Node.js (v18+)
* npm

### 安裝 (Installation)

```bash
git clone <repository_url>
cd Sticker_Master_AI
npm install
```

### 啟動開發伺服器 (Start Dev Server)

```bash
npm run dev
```

Open: `http://localhost:3000`

### 建置 (Build)

```bash
npm run build
```

---

## 📝 專案結構 (Project Structure)

* `src/services/ai`: AI 背景移除邏輯 (Background removal logic)
* `src/utils`: 影像處理工具 (Image processing utils)
* `App.tsx`: 主應用程式 (Main Application)

---

<div align="center">
  Built with ❤️ by TingYu
</div>
