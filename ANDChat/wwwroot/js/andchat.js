"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/andhub").build();

document.getElementById("sendBtn").disabled = true;

connection.start().then(function () {
    document.getElementById("sendBtn").disabled = false;
}).catch(function (err) {
    return console.error(err.toString());
});

document.getElementById("sendBtn").addEventListener("click", function (event) {
    var user = document.getElementById("userInput").value;
    var message = document.getElementById("messageInput").value;

    connection.invoke("SendMessage", user, message).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});

connection.on("ReceiveMessage", function (user, message) {
    var finalMessage = user + " says " + message;
    var lineMessage = document.createElement("li");
    lineMessage.textContent = finalMessage;
    document.getElementById("messagesList").appendChild(lineMessage);
});
