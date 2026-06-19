# Expense Tracker PWA - Project Files

## Core Files
- **index.html** - Main app interface
- **app.js** - All application logic
- **style.css** - Styling and responsive design
- **manifest.json** - PWA configuration
- **service-worker.js** - Offline functionality

## Documentation
- **README.md** - Full documentation and features
- **QUICK_START.md** - Quick start guide
- **run.bat** - Windows launcher script
- **run.sh** - Mac/Linux launcher script

## How to Run

### Windows
Double-click `run.bat`

### Mac/Linux
```bash
bash run.sh
```

### Manual
```bash
python -m http.server 8000
# or
python3 -m http.server 8000
```

Then open: http://localhost:8000

## File Sizes
```
index.html ........... ~5 KB
app.js ............... ~12 KB
style.css ............ ~9 KB
manifest.json ........ ~2 KB
service-worker.js .... ~2 KB
Total ................ ~30 KB (Very lightweight!)
```

## Project Structure
```
expense-tracker-pwa/
├── index.html
├── app.js
├── style.css
├── manifest.json
├── service-worker.js
├── run.bat
├── run.sh
├── README.md
├── QUICK_START.md
└── [This file]
```

All files are standalone - no dependencies needed!
