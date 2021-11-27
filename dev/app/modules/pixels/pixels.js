if (document.querySelector(".section-pixels")) {
  const pixels = $(".section-pixels__col");
  let delay = 0;
  $(pixels).each((i, pixel) => {
    if (delay > 9.9) delay = 0;
    gsap.from(pixel, { scale: 0.5, autoAlpha: 0, duration: 1, delay: delay });
    delay += 1;
  });
}
