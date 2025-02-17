const url = new URL(window.location.href);
const MIN = parseInt(url.searchParams.get('min')) || 1;
const MAX = parseInt(url.searchParams.get('max')) || 60;

const random = () => Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
const numberElm = document.getElementById('number');
const button = document.getElementById('generate');

button.onclick = () => {
    button.disabled = true;
    let i = 20;
    const interval = setInterval(() => {
        numberElm.textContent = random();
        i--;
        if (i === 0) {
            clearInterval(interval);
            button.disabled = false;
        }
    }, 50);
};