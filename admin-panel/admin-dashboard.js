// ==========================================
// SKR INTERNATIONAL
// Admin Dashboard JS
// ==========================================

// Welcome Message
console.log("Admin Dashboard Loaded");

// Current Date
const dateBox = document.getElementById("currentDate");

if (dateBox) {
    const today = new Date();

    dateBox.innerHTML = today.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric"
    });
}

// Dashboard Cards
const totalUsers = document.getElementById("totalUsers");
const totalServices = document.getElementById("totalServices");
const totalMessages = document.getElementById("totalMessages");
const totalDeposits = document.getElementById("totalDeposits");

if (totalUsers) totalUsers.innerHTML = "0";
if (totalServices) totalServices.innerHTML = "0";
if (totalMessages) totalMessages.innerHTML = "0";
if (totalDeposits) totalDeposits.innerHTML = "0";

// Refresh Button
const refreshBtn = document.getElementById("refreshBtn");

if (refreshBtn) {
    refreshBtn.addEventListener("click", function () {
        location.reload();
    });
}

// Logout Button
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {

        if (confirm("Are you sure you want to logout?")) {
            window.location.href = "admin-login.html";
        }

    });
}
