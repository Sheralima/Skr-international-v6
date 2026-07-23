// ======================================
// SKR INTERNATIONAL
// Logout JavaScript
// ======================================

// Logout Button
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", function () {

        const confirmLogout = confirm("Are you sure you want to logout?");

        if (confirmLogout) {

            // Remove Login Session
            localStorage.removeItem("isLoggedIn");

            // Redirect to Login Page
            window.location.href = "login.html";
        }

    });

}
