// =====================================
// SKR INTERNATIONAL
// My Services JavaScript
// =====================================

// Default Services
let services = JSON.parse(localStorage.getItem("myServices")) || [];

// HTML Elements
const serviceList = document.getElementById("serviceList");
const totalServices = document.getElementById("totalServices");

// Show Services
function loadServices() {

    if (!serviceList) return;

    serviceList.innerHTML = "";

    if (services.length === 0) {
        serviceList.innerHTML =
        "<p>No Services Available.</p>";
    } else {

        services.forEach((service, index) => {

            serviceList.innerHTML += `
            <div class="service-card">
                <h3>${service.name}</h3>
                <p>Status: <strong>${service.status}</strong></p>

                <button onclick="removeService(${index})">
                    Remove
                </button>
            </div>
            `;

        });

    }

    if (totalServices) {
        totalServices.textContent = services.length;
    }

}

// Add Service
const addServiceBtn = document.getElementById("addService");

if (addServiceBtn) {

    addServiceBtn.addEventListener("click", function () {

        const serviceName =
            document.getElementById("serviceName").value;

        if (serviceName === "") {
            alert("Please Enter Service Name");
            return;
        }

        services.push({
            name: serviceName,
            status: "Active"
        });

        localStorage
