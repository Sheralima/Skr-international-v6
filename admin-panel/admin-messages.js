// ==========================================
// SKR INTERNATIONAL
// Admin Messages JS
// ==========================================

console.log("Admin Messages Loaded");

// Reply Button
document.querySelectorAll(".reply-btn").forEach(function(btn){

    btn.addEventListener("click", function(){

        alert("Reply feature coming soon.");

    });

});

// Delete Message
document.querySelectorAll(".delete-btn").forEach(function(btn){

    btn.addEventListener("click", function(){

        if(confirm("Delete this message?")){

            this.closest(".message-card").remove();

            updateTotalMessages();

        }

    });

});

// Total Messages
function updateTotalMessages(){

    const total =
    document.querySelectorAll(".message-card").length;

    const box =
    document.getElementById("totalMessages");

    if(box){

        box.innerHTML = total;

    }

}

updateTotalMessages();
