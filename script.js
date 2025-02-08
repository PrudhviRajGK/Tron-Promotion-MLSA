
let backgroundMusic = document.getElementById('backgroundMusic');


window.addEventListener('load', () => {
    backgroundMusic.play().catch(err => {

        document.addEventListener('click', () => {
            backgroundMusic.play();
        }, { once: true });
    });
});

function createMovingLine() {
    const line = document.createElement('div');
    line.className = 'flowing-line';
    line.style.top = `${Math.random() * 100}vh`;
    line.style.left = `-${Math.random() * 100}px`;
    line.style.animationDuration = `${3 + Math.random() * 5}s`;
    document.body.appendChild(line);

    line.addEventListener('animationend', () => {
        document.body.removeChild(line);
    });
}

setInterval(createMovingLine, 1500);

const targetEl = document.querySelector('a-entity[mindar-image-target]');
const registerButton = document.querySelector('.tron-button');
const sponsorsSection = document.querySelector('.sponsors-section');

targetEl.addEventListener('targetFound', () => {
    registerButton.classList.add('visible');
    sponsorsSection.classList.add('visible');
    backgroundMusic.play();
});

targetEl.addEventListener('targetLost', () => {
    registerButton.classList.remove('visible');
    sponsorsSection.classList.remove('visible');
});

registerButton.addEventListener('click', () => {
    window.location.href = 'https://mlsakiit.com/';
});

