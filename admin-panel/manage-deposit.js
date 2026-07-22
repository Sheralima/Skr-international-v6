// ==========================================
// SKR INTERNATIONAL
// Manage Deposits JS
// ==========================================

console.log("Manage Deposits Loaded");

// Search Deposit
const searchDeposit = document.getElementById("searchDeposit");

if (searchDeposit) {

    searchDeposit.addEventListener("keyup", function () {

        let filter = this.value.toLowerCase();
        let rows = document.querySelectorAll("#depositTable tbody tr");

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

// Approve Deposit
document.querySelectorAll(".approve-btn").forEach(function(btn){

    btn.addEventListener("click", function(){

        alert("Deposit Approved");

        this.innerHTML = "Approved";
        this.disabled = true;

    });

});

// Reject Deposit
document.querySelectorAll(".reject-btn").forEach(function(btn){

    btn.addEventListener("click", function(){

        if(confirm("Reject this deposit?")){

            this.innerHTML = "Rejected";
            this.disabled = true;

        }

    });

});

// Total Deposits
const totalDeposits = document.getElementById("totalDeposits");

if(totalDeposits){

    totalDeposits.innerHTML =
    document.querySelectorAll("#depositTable tbody tr").length;

}
