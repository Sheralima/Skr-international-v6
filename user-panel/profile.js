// ===================================
// SKR INTERNATIONAL
// User Profile JavaScript
// ===================================

// Profile Elements
const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");
const profilePhone = document.getElementById("profilePhone");
const profileAddress = document.getElementById("profileAddress");
const profileImage = document.getElementById("profileImage");

// Load Profile Data
function loadProfile() {

    profileName.textContent =
        localStorage.getItem("username") || "User Name";

    profileEmail.textContent =
        localStorage.getItem("email") || "user@example.com";

    profilePhone.textContent =
        localStorage.getItem("phone") || "Not Added";

    profileAddress.textContent =
        localStorage.getItem("address") || "Not Added";

    const image = localStorage.getItem("profileImage");

    if (image && profileImage) {
        profileImage.src = image;
    }
}

// Save Profile
const saveProfileBtn = document.getElementById("saveProfile");

if (saveProfileBtn) {

    saveProfileBtn.addEventListener("click", function () {

        const name = document.getElementById("editName").value;
        const email = document.getElementById("editEmail").value;
        const phone = document.getElementById("editPhone").value;
        const address = document.getElementById("editAddress").value;

        localStorage.setItem("username", name);
        localStorage.setItem("email", email);
        localStorage.setItem("phone", phone);
        localStorage.setItem("address", address);

        alert("Profile Updated Successfully");

        loadProfile();
    });

}

// Profile Image Upload
const imageInput = document.getElementById("imageInput");

if (imageInput) {

    imageInput.addEventListener("change", function () {

        const file = this.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = function (e) {

            localStorage.setItem("profileImage", e.target.result);

            if (profileImage) {
                profileImage.src = e.target.result;
            }

        };

        reader.readAsDataURL(file);

    });

}

// Load Data on Page Open
window.onload = loadProfile;
