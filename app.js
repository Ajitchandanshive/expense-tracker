// Expense Tracker App
class ExpenseTracker {
    constructor() {
        this.expenses = this.loadExpenses();
        this.currentDate = new Date();
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setTodayDate();
        this.render();
    }

    setupEventListeners() {
        document.getElementById('expenseForm').addEventListener('submit', (e) => this.addExpense(e));
        document.getElementById('prevMonth').addEventListener('click', () => this.previousMonth());
        document.getElementById('nextMonth').addEventListener('click', () => this.nextMonth());
        document.getElementById('filterCategory').addEventListener('change', () => this.render());
        document.getElementById('exportBtn').addEventListener('click', () => this.exportToCSV());
    }

    setTodayDate() {
        const today = new Date();
        document.getElementById('date').valueAsDate = today;
    }

    addExpense(e) {
        e.preventDefault();

        const expense = {
            id: Date.now(),
            description: document.getElementById('description').value,
            amount: parseFloat(document.getElementById('amount').value),
            category: document.getElementById('category').value,
            date: document.getElementById('date').value,
            timestamp: new Date(document.getElementById('date').value).getTime()
        };

        this.expenses.push(expense);
        this.saveExpenses();
        document.getElementById('expenseForm').reset();
        this.setTodayDate();
        this.render();
    }

    deleteExpense(id) {
        if (confirm('Are you sure you want to delete this expense?')) {
            this.expenses = this.expenses.filter(e => e.id !== id);
            this.saveExpenses();
            this.render();
        }
    }

    getMonthYear(date = this.currentDate) {
        return {
            month: date.getMonth(),
            year: date.getFullYear()
        };
    }

    getMonthExpenses() {
        const { month, year } = this.getMonthYear();
        return this.expenses.filter(expense => {
            const expenseDate = new Date(expense.date);
            return expenseDate.getMonth() === month && expenseDate.getFullYear() === year;
        });
    }

    getAllExpenses() {
        return this.expenses.filter(expense => {
            const expenseDate = new Date(expense.date);
            return expenseDate <= this.currentDate;
        });
    }

    getFilteredExpenses() {
        const selectedCategory = document.getElementById('filterCategory').value;
        let filtered = this.getMonthExpenses();

        if (selectedCategory) {
            filtered = filtered.filter(e => e.category === selectedCategory);
        }

        return filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    getCategoryBreakdown() {
        const monthExpenses = this.getMonthExpenses();
        const breakdown = {};

        monthExpenses.forEach(expense => {
            if (!breakdown[expense.category]) {
                breakdown[expense.category] = 0;
            }
            breakdown[expense.category] += expense.amount;
        });

        return breakdown;
    }

    calculateTotals() {
        const monthExpenses = this.getMonthExpenses();
        const monthTotal = monthExpenses.reduce((sum, e) => sum + e.amount, 0);
        const daysInMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDate();
        const averageDaily = daysInMonth > 0 ? monthTotal / daysInMonth : 0;

        return {
            monthlyTotal: monthTotal,
            thisMonthTotal: monthTotal,
            averageDaily: averageDaily
        };
    }

    formatCurrency(amount) {
        return '₹' + amount.toFixed(2);
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    }

    previousMonth() {
        this.currentDate.setMonth(this.currentDate.getMonth() - 1);
        this.render();
    }

    nextMonth() {
        this.currentDate.setMonth(this.currentDate.getMonth() + 1);
        this.render();
    }

    render() {
        this.renderMonthLabel();
        this.renderSummary();
        this.renderCategoryBreakdown();
        this.renderExpensesList();
    }

    renderMonthLabel() {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'];
        const label = `${monthNames[this.currentDate.getMonth()]} ${this.currentDate.getFullYear()}`;
        document.getElementById('currentMonth').textContent = label;
    }

    renderSummary() {
        const totals = this.calculateTotals();
        document.getElementById('monthlyTotal').textContent = this.formatCurrency(totals.monthlyTotal);
        document.getElementById('thisMonthTotal').textContent = this.formatCurrency(totals.thisMonthTotal);
        document.getElementById('averageDaily').textContent = this.formatCurrency(totals.averageDaily);
    }

    renderCategoryBreakdown() {
        const breakdown = this.getCategoryBreakdown();
        const container = document.getElementById('categoryBreakdown');
        container.innerHTML = '';

        if (Object.keys(breakdown).length === 0) {
            container.innerHTML = '<div class="empty-state">No expenses this month</div>';
            return;
        }

        Object.entries(breakdown)
            .sort((a, b) => b[1] - a[1])
            .forEach(([category, amount]) => {
                const categoryItem = document.createElement('div');
                categoryItem.className = 'category-item';
                categoryItem.innerHTML = `
                    <div class="category-name">${category}</div>
                    <div class="category-amount">${this.formatCurrency(amount)}</div>
                `;
                container.appendChild(categoryItem);
            });
    }

    renderExpensesList() {
        const filteredExpenses = this.getFilteredExpenses();
        const container = document.getElementById('expensesList');
        container.innerHTML = '';

        if (filteredExpenses.length === 0) {
            container.innerHTML = '<li class="empty-state"><div class="empty-state-icon">📋</div>No expenses found</li>';
            return;
        }

        filteredExpenses.forEach(expense => {
            const li = document.createElement('li');
            li.className = 'expense-item';
            li.innerHTML = `
                <div class="expense-details">
                    <div class="expense-description">${this.escapeHtml(expense.description)}</div>
                    <div class="expense-meta">
                        <span class="expense-category">${expense.category}</span>
                        ${this.formatDate(expense.date)}
                    </div>
                </div>
                <div class="expense-amount">${this.formatCurrency(expense.amount)}</div>
                <button class="btn-delete" onclick="app.deleteExpense(${expense.id})">Delete</button>
            `;
            container.appendChild(li);
        });
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    exportToCSV() {
        const monthExpenses = this.getMonthExpenses();
        if (monthExpenses.length === 0) {
            alert('No expenses to export for this month');
            return;
        }

        const { month, year } = this.getMonthYear();
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'];
        const filename = `expenses_${monthNames[month]}_${year}.csv`;

        const headers = ['Date', 'Description', 'Category', 'Amount (₹)'];
        const rows = monthExpenses
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .map(e => [
                this.formatDate(e.date),
                `"${e.description.replace(/"/g, '""')}"`,
                e.category,
                e.amount.toFixed(2)
            ]);

        const total = monthExpenses.reduce((sum, e) => sum + e.amount, 0);
        rows.push(['', '', 'TOTAL', total.toFixed(2)]);

        const csv = [headers, ...rows]
            .map(row => row.join(','))
            .join('\n');

        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
    }

    saveExpenses() {
        localStorage.setItem('expenses', JSON.stringify(this.expenses));
    }

    loadExpenses() {
        const saved = localStorage.getItem('expenses');
        return saved ? JSON.parse(saved) : [];
    }
}

// Initialize app
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new ExpenseTracker();
});
