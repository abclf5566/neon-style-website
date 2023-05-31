const mainTitle = document.getElementById('mainTitle');
const chars = Array.from(mainTitle.textContent);
mainTitle.textContent = '';
chars.forEach((char, i) => {
  const span = document.createElement('span');
  span.textContent = char;
  span.style.animationDelay = `${i * 0.2}s`;
  mainTitle.append(span);
});

setTimeout(() => {
  mainTitle.style.opacity = '1';
  Array.from(mainTitle.children).forEach((span, i) => {
    span.style.animation = `fade-in ${i * 0.2}s forwards`;
  });
}, 500);

setTimeout(() => {
  mainTitle.classList.add('bounce');
}, chars.length * 200 + 500);
