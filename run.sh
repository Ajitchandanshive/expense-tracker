#!/bin/bash

echo "Starting Expense Tracker PWA..."
echo ""
echo "Opening browser at http://localhost:8000"
echo ""
echo "To install on mobile:"
echo "- iOS: Open in Safari, tap Share, then 'Add to Home Screen'"
echo "- Android: Open in Chrome, tap Menu, then 'Install app'"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

cd "$(dirname "$0")"

# Try Python 3 first, then Python, then Node.js
if command -v python3 &> /dev/null; then
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    python -m http.server 8000
elif command -v npx &> /dev/null; then
    npx http-server
else
    echo "Error: Python or Node.js not found. Please install one of them."
    exit 1
fi
