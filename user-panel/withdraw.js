// ======================================
// SKR INTERNATIONAL
// Withdraw JavaScript
// ======================================

// Elements
const withdrawInput = document.getElementById("withdrawAmount");
const withdrawBtn = document.getElementById("withdrawBtn");
const withdrawHistory = document.getElementById("withdrawHistory");
const totalWithdraw = document.getElementById("totalWithdraw");

// Load Data
let withdrawals = JSON.parse(localStorage.getItem("withdrawals")) || [];
let total = Number(localStorage.getItem("totalWithdraw")) || 0;
let balance = Number(localStorage.getItem("totalDeposit")) || 0;

// Show Withdraw History
function loadWithdraws() {

    if (totalWithdraw) {
        totalWithdraw.textContent = total + " PKR";
    }

    if (!withdrawHistory) return;

    withdrawHistory.innerHTML = "";

    if (withdrawals.length === 0) {
        withdrawHistory.innerHTML = "<p>No Withdraw Request.</p>";
        return;
    }

    withdrawals.forEach(function(item) {

        withdrawHistory.innerHTML += `
            <div class="history-card">
                <h4>${item.amount} PKR</h4>
                <p>${item.date}</p>
                <p>Status: ${item.status}</p>
            </div>
        `;

    });

}

// Withdraw Button
if (withdrawBtn) {

    withdrawBtn.addEventListener("click", function () {

        const amount = Number
