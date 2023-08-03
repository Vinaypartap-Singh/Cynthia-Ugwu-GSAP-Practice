// const scroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true,
// });

(function () {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    smoothMobile: false,
  });
  new ResizeObserver(() => scroll.update()).observe(
    document.querySelector("#main")
  );
})();

(function heroAnimation() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: -10,
    duration: 1.3,
    opacity: 0,
    ease: Expo.easeInOut,
  })
    .to(".boundingElement", {
      delay: -0.9,
      y: 0,
      duration: 2,
      ease: Expo.easeInOut,
      stagger: 0.2,
    })
    .from("#heroFooter", {
      opacity: 0,
      delay: -1.2,
      duration: 1.5,
      ease: Expo.easeInOut,
    });
})();
