// ==========================================
// SKR INTERNATIONAL
// Admin Settings JS
// ==========================================

console.log("Admin Settings Loaded");

// Save Settings
const saveBtn = document.getElementById("saveSettings");

if (saveBtn) {

    saveBtn.addEventListener("click", function () {

        alert("Settings Saved Successfully!");

    });

}

// Reset Form
const resetBtn = document.getElementById("resetSettings");

if (resetBtn) {

    resetBtn.addEventListener("click", function () {

        if (confirm("Reset all settings?")) {

            document.getElementById("settingsForm").reset();

        }

    });

}

// Change Password
const password = document.getElementById("newPassword");
const confirmPassword = document.getElementById("confirmPassword");

if (saveBtn) {

    saveBtn.addEventListener("click", function () {

        if (password && confirmPassword) {

            if (password.value !== confirmPassword.value) {

                alert("Passwords do not match!");
                return;

            }

        }

        alert("Settings Updated Successfully!");

    });

}
