// ======================================
// SKR INTERNATIONAL
// Messages JavaScript
// ======================================

// Elements
const messageInput = document.getElementById("messageInput");
const sendMessageBtn = document.getElementById("sendMessageBtn");
const messageList = document.getElementById("messageList");

// Load Messages
let messages = JSON.parse(localStorage.getItem("userMessages")) || [];

// Show Messages
function loadMessages() {

    if (!messageList) return;

    messageList.innerHTML = "";

    if (messages.length === 0) {
        messageList.innerHTML = "<p>No Messages Found.</p>";
        return;
    }

    messages.forEach(function(msg, index) {

        messageList.innerHTML += `
            <div class="message-card">
                <p>${msg.text}</p>
                <small>${msg.date}</small><br>

                <span>Status: ${msg.status}</span><br><br>

                <button onclick="deleteMessage(${index})">
                    Delete
                </button>
            </div>
        `;

    });

}

// Send Message
if (sendMessageBtn) {

    sendMessageBtn.addEventListener("click", function () {

        const text = messageInput.value.trim();

        if (text === "") {
            alert("Please enter your message.");
            return;
        }

        messages.unshift({
            text: text,
            date: new Date().toLocaleString(),
            status: "Sent"
        });

        localStorage.setItem(
            "userMessages",
            JSON.stringify(messages)
        );

        messageInput.value = "";

        alert("Message Sent Successfully.");

        loadMessages();

    });

}

// Delete Message
function deleteMessage(index) {

    messages.splice(index, 1);

    localStorage.setItem(
        "userMessages",
        JSON.stringify(messages)
    );

    loadMessages();

}

// Page Load
window.onload = loadMessages;
