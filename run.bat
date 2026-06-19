@echo off
echo Starting Expense Tracker PWA...
echo.
echo Opening browser at http://localhost:8000
echo.
echo To install on mobile:
echo - iOS: Open in Safari, tap Share, then "Add to Home Screen"
echo - Android: Open in Chrome, tap Menu, then "Install app"
echo.
echo Press Ctrl+C to stop the server
echo.

cd /d "%~dp0"
python -m http.server 8000

if errorlevel 1 (
    echo.
    echo Python not found. Trying Node.js http-server...
    npx http-server
)
