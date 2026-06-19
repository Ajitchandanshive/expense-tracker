# Daily Expense Tracker PWA

A Progressive Web App for tracking daily expenses and calculating monthly spending. Works on both desktop and mobile devices, and works offline!

## Features

✅ **Add Daily Expenses** - Quickly log expenses with description, amount, and category
✅ **Categorize Spending** - Organize expenses into categories (Food, Transport, Entertainment, etc.)
✅ **Monthly Overview** - View total spending, average daily expense, and category breakdown
✅ **Month Navigation** - Easily switch between different months to view historical data
✅ **Filter & Search** - Filter expenses by category to see spending patterns
✅ **Export to CSV** - Download monthly expenses as CSV file for spreadsheet analysis
✅ **Offline Support** - Works completely offline with local storage
✅ **Mobile Friendly** - Fully responsive design, works great on phones and tablets
✅ **Installable** - Install as an app on your mobile home screen or desktop
✅ **No Ads** - Completely free and private, all data stored locally

## Installation

### Option 1: Using Python (Easiest)

**Windows:**
```bash
cd C:\Users\Ajit\expense-tracker-pwa
python -m http.server 8000
```

**Mac/Linux:**
```bash
cd ~/expense-tracker-pwa
python3 -m http.server 8000
```

Then open: http://localhost:8000

### Option 2: Using Node.js

```bash
npm install -g http-server
cd expense-tracker-pwa
http-server
```

### Option 3: Using VS Code

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html` and select "Open with Live Server"

## Usage

1. **Open the app** in your browser at http://localhost:8000
2. **Add Expense**: Fill in the form with:
   - Description (e.g., "Coffee", "Groceries")
   - Amount in Rupees (₹)
   - Category (Food, Transport, Entertainment, etc.)
   - Date (defaults to today)
3. **View Dashboard**: See monthly total, average daily spend, and category breakdown
4. **Browse History**: Scroll down to see all expenses for the month
5. **Filter**: Select a category from the dropdown to filter expenses
6. **Delete**: Click "Delete" on any expense to remove it
7. **Export**: Click "Export to CSV" to download your monthly expenses

## Installation as Mobile App

### iOS (Safari)
1. Open the app in Safari at http://localhost:8000 (on same network as your computer)
2. Tap the **Share** button
3. Tap **Add to Home Screen**
4. Name it "Expense Tracker" and tap **Add**

### Android (Chrome)
1. Open the app in Chrome
2. Tap the **Menu** button (three dots)
3. Tap **Install app** or **Add to Home Screen**
4. Confirm the installation

## Installation as Desktop App

### Chrome Desktop
1. Open the app at http://localhost:8000
2. Click the **Install** button (appears in the address bar)
3. Click **Install** to add to your desktop
4. The app will appear in your applications menu

## Categories

- 🍔 **Food** - Groceries, restaurants, snacks
- 🚗 **Transport** - Fuel, public transport, parking
- 🎬 **Entertainment** - Movies, games, hobbies
- 🛍️ **Shopping** - Clothes, accessories
- 💡 **Utilities** - Electricity, water, internet
- ⚕️ **Health** - Medicines, doctor visits
- 📚 **Education** - Books, courses, tuition
- 📌 **Other** - Miscellaneous expenses

## Data Storage

All your data is stored locally in your browser using:
- **LocalStorage**: For permanent data storage
- **IndexedDB**: For better performance with large datasets
- **Service Worker**: For offline functionality

⚠️ **Important**: Your data is private and never sent to any server. Clear browser data/cache will delete all expenses.

## Backup Your Data

To backup your expenses:
1. Click **"Export to CSV"** to download current month
2. Repeat for each month you want to backup
3. Keep these CSV files in a safe location

## Tips

- Use consistent descriptions for better tracking
- Review spending weekly to stay on budget
- Export regularly to maintain backups
- Check category breakdown to identify spending patterns

## Browser Compatibility

- ✅ Chrome/Chromium (v67+)
- ✅ Firefox (v55+)
- ✅ Safari (v11.1+)
- ✅ Edge (v79+)
- ✅ Mobile Chrome
- ✅ Mobile Safari

## Troubleshooting

**App not loading?**
- Make sure the server is running
- Clear browser cache and refresh
- Try incognito/private mode

**Data not saving?**
- Check if LocalStorage is enabled in browser settings
- Make sure you're not in private/incognito mode
- Try a different browser

**Export not working?**
- Check popup/download permissions
- Try in a different browser
- Add expenses first!

**Service Worker not working?**
- Make sure you're using HTTPS (or localhost)
- Clear service worker cache
- Check browser console for errors

## Development

The app consists of:
- `index.html` - App structure
- `style.css` - Styling and responsive design
- `app.js` - Core application logic
- `manifest.json` - PWA configuration
- `service-worker.js` - Offline support

## Future Enhancements

- 📊 Analytics and charts
- 🎯 Budget goals and alerts
- 💼 Multiple accounts/users
- ☁️ Cloud sync across devices
- 📈 Income tracking
- 💳 Bill reminders

## License

Free and open source - use it as you wish!

## Support

If you encounter any issues or have suggestions, you can modify the code directly since it's all in plain JavaScript and CSS.

---

**Enjoy tracking your expenses! 💰**
