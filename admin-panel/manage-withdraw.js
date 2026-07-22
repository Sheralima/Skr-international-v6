// ==========================================
// SKR INTERNATIONAL
// Manage Withdraws JS
// ==========================================

console.log("Manage Withdraws Loaded");

// Search Withdraw
const searchWithdraw = document.getElementById("searchWithdraw");

if (searchWithdraw) {

    searchWithdraw.addEventListener("keyup", function () {

        let filter = this.value.toLowerCase();
        let rows = document.querySelectorAll("#withdrawTable tbody tr");

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

// Approve Withdraw
document.querySelectorAll(".approve-btn").forEach(function(btn){

    btn.addEventListener("click", function(){

        alert("Withdraw Approved");

        this.innerHTML = "Approved";
        this.disabled = true;

    });

});

// Reject Withdraw
document.querySelectorAll(".reject-btn").forEach(function(btn){

    btn.addEventListener("click", function(){

        if(confirm("Reject this withdraw request?")){

            this.innerHTML = "Rejected";
            this.disabled = true;

        }

    });

});

// Total Withdraw Requests
const totalWithdraws = document.getElementById("totalWithdraws");

if(totalWithdraws){

    totalWithdraws.innerHTML =
    document.querySelectorAll("#withdrawTable tbody tr").length;

}
