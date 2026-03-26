// Matrix effect
function createMatrixEffect() {
  const canvas = document.createElement('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.zIndex = '-1';
  document.body.insertBefore(canvas, document.body.firstChild);

  const ctx = canvas.getContext('2d');
  const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
  const charArray = chars.split('');
  const fontSize = 16;
  const columns = canvas.width / fontSize;
  const drops = [];

  for (let i = 0; i < columns; i++) {
    drops[i] = 1;
  }

  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0f0';
    ctx.font = fontSize + 'px Arial';

    for (let i = 0; i < drops.length; i++) {
      const text = charArray[Math.floor(Math.random() * charArray.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
        drops[i] = 0;
      }

      drops[i]++;
    }
  }

  setInterval(draw, 50);
}

// Toggle between universities
function toggleUniversity(university) {
  const inacapSection = document.getElementById('inacap-section');
  const duocucSection = document.getElementById('duocuc-section');

  if (university === 'inacap') {
    inacapSection.style.display = 'block';
    duocucSection.style.display = 'none';
  } else if (university === 'duocuc') {
    inacapSection.style.display = 'none';
    duocucSection.style.display = 'block';
  }
}

// Initialize
window.addEventListener('DOMContentLoaded', function() {
  createMatrixEffect();
  // Show INACAP by default
  toggleUniversity('inacap');
});