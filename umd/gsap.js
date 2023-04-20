
window.addEventListener('load', () => {
  gsap.from('.fadeIn', {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: 'power2.out',
  });
});
