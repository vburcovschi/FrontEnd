const ws = new WebSocket('wss://echo-ws-service.herokuapp.com');
const chat = document.getElementById('chat');
const messageInput = document.getElementById('input-message');
const sendButton = document.getElementById('sendBtn');
const locationButton = document.getElementById('locationBtn');

ws.onmessage = function(event) {
    displayMessage(2,'Server answer: ' + event.data);
};

sendButton.addEventListener('click', function() {
    const message = messageInput.value;
    ws.send(message);
    displayMessage(1,'User: ' + message);
    messageInput.value = ''; // Clearing an input field after submitting a message
});

locationButton.addEventListener('click', function() {
    if (!navigator.geolocation) {
        displayMessage(2,'Geolocation is not supported by your browser');
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
});

function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    const locationUrl = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    displayMessage(2,`<a href="${locationUrl}" target="_blank">Your geolocation</a>`);
}

function error() {
    displayMessage(2,'Can\'t get your geolocation. Please, check your browser settings.');
}

function displayMessage(type,message) {
    const messageElement = document.createElement('div');
    if(type==1){
        messageElement.classList.add('sent','message','message-container');
        messageElement.clientWidth = message.length;
    } else {
        messageElement.classList.add('received','message','message-container');
    }
    messageElement.innerHTML = message;
    chat.appendChild(messageElement);
}
