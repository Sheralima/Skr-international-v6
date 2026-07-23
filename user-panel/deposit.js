// ======================================
// SKR INTERNATIONAL
// Deposit JavaScript
// ======================================

// Elements
const depositInput = document.getElementById("depositAmount");
const depositBtn = document.getElementById("depositBtn");
const depositHistory = document.getElementById("depositHistory");
const totalDeposit = document.getElementById("totalDeposit");

// Load Data
let deposits = JSON.parse(localStorage.getItem("deposits")) || [];
let total = Number(localStorage.getItem("totalDeposit")) || 0;

// Show Deposit History
function loadDeposits() {

    if (totalDeposit) {
        totalDeposit.textContent = total + " PKR";
    }

    if (!depositHistory) return;

    depositHistory.innerHTML = "";

    if (deposits.length === 0) {
        depositHistory.innerHTML = "<p>No Deposit Yet.</p>";
        return;
    }

    deposits.forEach(function(item) {
        depositHistory.innerHTML += `
            <div class="history-card">
                <h4>${item.amount} PKR</h4>
                <p>${item.date}</p>
                <p>Status: ${item.status}</p>
            </div>
        `;
    });
}

// Deposit Button
if (depositBtn) {

    depositBtn.addEventListener("click", function () {

        const amount = Number(depositInput.value);

        if (amount < 300) {
            alert("Minimum Deposit is 300 PKR");
            return;
        }

        total += amount;

        deposits.unshift({
            amount: amount,
            date: new Date().toLocaleString(),
            status: "Pending"
        });

        localStorage.setItem("deposits", JSON.stringify(deposits));
        localStorage.setItem("totalDeposit", total);

        depositInput.value = "";

        alert("Deposit Request Submitted Successfully");

        loadDeposits();

    });

}

// Page Load
window.onload = loadDeposits;
