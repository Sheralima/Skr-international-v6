// ===============================
// SKR INTERNATIONAL
// User Dashboard JavaScript
// ===============================

// Welcome Message
const username = localStorage.getItem("username") || "User";

const welcome = document.getElementById("welcomeUser");
if (welcome) {
    welcome.textContent = "Welcome, " + username;
}

// Dashboard Statistics
const totalServices = document.getElementById("totalServices");
const totalDeposit = document.getElementById("totalDeposit");
const totalWithdraw = document.getElementById("totalWithdraw");
const totalBalance = document.getElementById("totalBalance");

if (totalServices) totalServices.innerHTML = "0";
if (totalDeposit) totalDeposit.innerHTML = "0 PKR";
if (totalWithdraw) totalWithdraw.innerHTML = "0 PKR";
if (totalBalance) totalBalance.innerHTML = "0 PKR";

// Current Date
const currentDate = document.getElementById("currentDate");
if (currentDate) {
    currentDate.innerHTML = new Date().toLocaleDateString();
}
