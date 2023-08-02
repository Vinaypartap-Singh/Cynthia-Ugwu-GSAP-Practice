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
