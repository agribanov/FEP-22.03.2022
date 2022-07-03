const SOCKET_URL = 'wss://fep-app.herokuapp.com';
let socket;

const nameEl = document.getElementById('name');
const btn = document.getElementById('sendBtn');
btn.addEventListener('click', () => {
    sendMessage();
});

initConnection();

function initConnection() {
    socket = new WebSocket(SOCKET_URL);

    socket.onopen = () => {
        console.log('Connection established');
    };

    socket.onmessage = onMessage;

    socket.onclose = () => {
        initConnection();
    };

    socket.onerror = (event) => {
        console.log('error', event);
        // initConnection();
    };
}

function onMessage({ data }) {
    const {
        payload: { author, message },
    } = JSON.parse(data);

    document.body.insertAdjacentHTML(
        'beforeend',
        `<div>${author}: ${message}</div>`,
    );
}

function sendMessage() {
    const mes = {
        action: 'message',
        payload: {
            author: nameEl.value,
            message: 'Hello world',
        },
    };

    socket.send(JSON.stringify(mes));
}
