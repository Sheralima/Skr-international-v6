// ==========================================
// SKR INTERNATIONAL
// Admin Login JS
// ==========================================

console.log("Admin Login Loaded");

// Form
const loginForm = document.getElementById("adminLoginForm");

// Email
const email = document.getElementById("adminEmail");

// Password
const password = document.getElementById("adminPassword");

// Show Password
const showPassword = document.getElementById("showPassword");

if (showPassword) {

    showPassword.addEventListener("change", function () {

        if (this.checked) {
            password.type = "text";
        } else {
            password.type = "password";
        }

    });

}

// Login
if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        if (
            email.value === "admin@skr.com" &&
            password.value === "123456"
        ) {

            alert("Login Successful");

            window.location.href = "admin-dashboard.html";

        } else {

            alert("Invalid Email or Password");

        }

    });

}
