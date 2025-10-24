// Special teddy bear audio and neon effect
function playTeddyAudio() {
    const audio = document.getElementById('background-audio');
    audio.currentTime = 0; // Reset playing audio to start
    audio.play().catch(error => {
        console.log('Teddy audio play failed:', error);
        alert('🎵 Could not play the song! Please check browser permissions or file existence. 🧸');
    });

    // Add neon effect to teddy bear
    const teddyBear = document.querySelector('.teddy-bear');
    teddyBear.classList.add('neon-teddy');
    setTimeout(() => {
        teddyBear.classList.remove('neon-teddy');
    }, 3000); // Remove neon effect after 3 seconds

    // Add rose when audio starts playing
    const rose = document.createElement('div');
    rose.className = 'rose';
    rose.textContent = '🌹';
    rose.style.left = Math.random() * 80 + 'vw';
    rose.style.top = Math.random() * 80 + 'vh';
    rose.style.animationDelay = '0s';
    document.body.appendChild(rose);
    setTimeout(() => rose.remove(), 5000);
}

// Play audio function for the heart button
function playAudio() {
    const audio = document.getElementById('background-audio');
    audio.currentTime = 0; // Reset to start
    audio.play().catch(error => {
        console.log('Audio play failed:', error);
        alert('🎵 Could not play the song! Please check browser permissions or file existence. 💖');
    });

    // Add sparkle effect to heart button
    const heartBtn = document.querySelector('.play-audio-btn');
    heartBtn.classList.add('heart-pulse');
    setTimeout(() => {
        heartBtn.classList.remove('heart-pulse');
    }, 2000); // Remove pulse after 2 seconds
}

// Auto-play audio on page load (with user interaction check)
document.addEventListener('DOMContentLoaded', () => {
    // Note: Autoplay may be blocked by browsers; user must interact first
    // For now, start paused
});

// Slideshow functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

// Auto slideshow
setInterval(() => {
    changeSlide(1);
}, 3000); // Change slide every 3 seconds

// Initialize slideshow
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});

// Dynamic floating elements
function createFloatingElements() {
    const body = document.body;

    // Balloons
    for (let i = 0; i < 10; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.textContent = ['🎈', '🎈', '🎈', '🎈', '🎈'][Math.floor(Math.random() * 5)];
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.animationDelay = Math.random() * 10 + 's';
        body.appendChild(balloon);
        setTimeout(() => balloon.remove(), 10000);
    }

    // Gifts
    for (let i = 0; i < 10; i++) {
        const gift = document.createElement('div');
        gift.className = 'gift';
        gift.textContent = '🎁';
        gift.style.left = Math.random() * 90 + 'vw';
        gift.style.top = Math.random() * 80 + 20 + 'vh';
        gift.style.animationDelay = Math.random() * 6 + 's';
        body.appendChild(gift);
    }



    // Candy Chocolate
    for (let i = 0; i < 10; i++) {
        const candy = document.createElement('div');
        candy.className = 'candy';
        candy.textContent = ['🍫', '🍬'][Math.floor(Math.random() * 2)];
        candy.style.left = Math.random() * 100 + 'vw';
        candy.style.top = Math.random() * 100 + 'vh';
        candy.style.animationDelay = Math.random() * 6 + 's';
        body.appendChild(candy);
        setTimeout(() => candy.remove(), 6000);
    }

    // Cartoon Emoji Moon
    for (let i = 0; i < 3; i++) {
        const moon = document.createElement('div');
        moon.className = 'moon-float';
        moon.textContent = '🌙';
        moon.style.left = Math.random() * 100 + 'vw';
        moon.style.top = Math.random() * 100 + 'vh';
        moon.style.animationDelay = Math.random() * 10 + 's';
        body.appendChild(moon);
        setTimeout(() => moon.remove(), 10000);
    }

    // Confetti
    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.textContent = ['🎉', '✨', '🎊', '🎈', '🌈'][Math.floor(Math.random() * 5)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 8 + 's';
        body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 8000);
    }

    // Fireworks
    for (let i = 0; i < 5; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.textContent = '🎆';
        firework.style.left = Math.random() * 90 + 'vw';
        firework.style.top = Math.random() * 50 + 'vh';
        firework.style.animationDelay = Math.random() * 5 + 's';
        body.appendChild(firework);
        setTimeout(() => firework.remove(), 2000);
    }

    // Sparkles
    for (let i = 0; i < 10; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.textContent = '✨';
        sparkle.style.left = Math.random() * 100 + 'vw';
        sparkle.style.top = Math.random() * 100 + 'vh';
        sparkle.style.animationDelay = Math.random() * 3 + 's';
        body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 3000);
    }
}

// Cute baby click function
function showBabyMessage() {
    const message = document.createElement('div');
    message.className = 'message-popup';
    message.innerHTML = 'A cute lockdown baby! 💕<br>So precious and full of love! 🍼';
    document.body.appendChild(message);
    setTimeout(() => message.remove(), 3000); // Remove after 3 seconds
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    createFloatingElements();
    setInterval(createFloatingElements, 15000); // Repeat every 15 seconds
});
