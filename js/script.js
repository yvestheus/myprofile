function runTypingEffect() {
  const text = 'I am Yves Theus.';
  const typingElement = document.getElementById('typing-text');
  const typingDelay = 100;

  typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);
    }, delay * i);
  }
}

// Generate animated stars
function createStars() {
  const starsContainer = document.querySelector('.stars');
  const numberOfStars = 150;

  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.className = 'star';

    // Randomly assign size classes
    const size = Math.random();
    if (size < 0.5) {
      star.classList.add('small');
    } else if (size < 0.85) {
      star.classList.add('medium');
    } else {
      star.classList.add('large');
    }

    // Random position
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';

    // Random animation delay and duration for variety
    star.style.animationDelay = Math.random() * 3 + 's';
    star.style.animationDuration = (Math.random() * 2 + 2) + 's';

    starsContainer.appendChild(star);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  runTypingEffect();
  createStars();
});
