// ==========================================
// SKR INTERNATIONAL
// Manage Users JS
// ==========================================

console.log("Manage Users Loaded");

// Search Users
const searchInput = document.getElementById("searchUser");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {

        let filter = this.value.toLowerCase();
        let rows = document.querySelectorAll("#usersTable tbody tr");

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

// Add User Button
const addUserBtn = document.getElementById("addUserBtn");

if (addUserBtn) {

    addUserBtn.addEventListener("click", function () {
        alert("Add User Feature Coming Soon");
    });

}

// Edit User
document.querySelectorAll(".edit-btn").forEach(function(btn){

    btn.addEventListener("click", function(){

        alert("Edit User");

    });

});

// Delete User
document.querySelectorAll(".delete-btn").forEach(function(btn){

    btn.addEventListener("click", function(){

        if(confirm("Delete this user?")){

            this.closest("tr").remove();

        }

    });

});

// Total Users Counter
const totalUsers = document.getElementById("totalUsers");

if(totalUsers){

    totalUsers.innerHTML =
    document.querySelectorAll("#usersTable tbody tr").length;

              }
