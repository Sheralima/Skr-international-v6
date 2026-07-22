// ==========================================
// SKR INTERNATIONAL
// Manage Services JS
// ==========================================

console.log("Manage Services Loaded");

// Search Service
const searchService = document.getElementById("searchService");

if (searchService) {

    searchService.addEventListener("keyup", function () {

        let filter = this.value.toLowerCase();
        let rows = document.querySelectorAll("#servicesTable tbody tr");

        rows.forEach(function (row) {

            let text = row.innerText.toLowerCase();

            if (text.indexOf(filter) > -1) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }

        });

    });

}

// Add Service
const addServiceBtn = document.getElementById("addServiceBtn");

if (addServiceBtn) {

    addServiceBtn.addEventListener("click", function () {

        alert("Add Service Feature Coming Soon");

    });

}

// Edit Service
document.querySelectorAll(".edit-service").forEach(function (btn) {

    btn.addEventListener("click", function () {

        alert("Edit Service");

    });

});

// Delete Service
document.querySelectorAll(".delete-service").forEach(function (btn) {

    btn.addEventListener("click", function () {

        if (confirm("Delete this service?")) {

            this.closest("tr").remove();

            updateTotalServices();
        }

    });

});

// Total Services
function updateTotalServices() {

    const total = document.querySelectorAll("#servicesTable tbody tr").length;
    const totalBox = document.getElementById("totalServices");

    if (totalBox) {
        totalBox.innerHTML = total;
    }

}

updateTotalServices();
