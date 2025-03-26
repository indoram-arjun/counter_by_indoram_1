const button = document.getElementById('clickButton');
const counter = document.getElementById('counter');
let reset = document.getElementById('reset');
let count = 0;

button.addEventListener('click', () => {
    count++;
    counter.innerText = count;
});

reset.addEventListener('click', () => {
    count = 0;
    counter.innerText = count;
}
);