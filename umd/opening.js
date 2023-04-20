let animation;

window.onload = function() {
  const animationElement = document.getElementById('animation');
  animation = anime.timeline({
    autoplay: true,
  });
  animation.add({
    targets: animationElement,
    opacity: 1,
    duration: 1000,
    easing: 'easeInOutQuad',
  }).add({
    targets: animationElement,
    translateY: '-100%',
    duration: 1000,
    easing: 'easeInOutQuad',
    delay: 1000,
  }).add({
    targets: animationElement,
    opacity: 0,
    duration: 1000,
    easing: 'easeInOutQuad',
    delay: 1000,
    complete: function(anim) {
      window.parent.frames['animation-frame'].location.replace('index.html');
    },
  });
};