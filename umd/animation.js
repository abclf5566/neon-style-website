
gsap.from('.left-bar',{duration:2,x:'-100%'})

gsap.registerPlugin(ScrollTrigger);
//gsap.fromTo('.abouttext', {scrollTrigger:{trigger: '.abouttext',toggleActions: 'restart none none none'},autoAlpha: 0, y: 50}, {duration: 2, autoAlpha: 1, y: 0});
const boxes = gsap.utils.toArray('.abouttext');
boxes.forEach((abouttext, i) => {
  const anim = gsap.fromTo(abouttext, {autoAlpha: 0, y: 50}, {duration: 2, autoAlpha: 1, y: 0});
  ScrollTrigger.create({
    trigger: abouttext,
    animation: anim,
    toggleActions: 'restart none none none',
  });
});