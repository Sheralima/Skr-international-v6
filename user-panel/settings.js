// ======================================
// SKR INTERNATIONAL
// Settings JavaScript
// ======================================

// Elements
const saveSettingsBtn = document.getElementById("saveSettings");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const address = document.getElementById("address");

// Load Settings
function loadSettings() {

    if (fullName)
        fullName.value = localStorage.getItem("username") || "";

    if (email)
        email.value = localStorage.getItem("email") || "";

    if (phone)
        phone.value = localStorage.getItem("phone") || "";

    if (address)
        address.value = localStorage.getItem("address") || "";
}

// Save Settings
if (saveSettingsBtn) {

    saveSettingsBtn.addEventListener("click", function () {

        localStorage.setItem("username", fullName.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("phone", phone.value);
        localStorage.setItem("address", address.value);

        alert("Settings Saved Successfully.");

    });

}

// Load Data
window.onload = loadSettings;
