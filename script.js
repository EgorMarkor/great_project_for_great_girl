// Музыка
const music = document.getElementById('background-music');
music.volume = 0.2; // Регулировка громкости

// Анимация сердечек
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heart.innerHTML = '❤️'; // Добавляем сердечко
    document.getElementById('hearts').appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);

// Добавление стилей для сердечек
const style = document.createElement('style');
style.textContent = `
    .heart {
        position: absolute;
        font-size: 2rem;
        animation: floatUp 5s linear infinite;
        color: #ff4d4d;
    }
    @keyframes floatUp {
        0% {
            transform: translateY(100vh) scale(0.5);
            opacity: 1;
        }
        100% {
            transform: translateY(-10vh) scale(1);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
