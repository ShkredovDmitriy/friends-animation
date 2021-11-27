gsap.registerPlugin(ScrollTrigger);
gsap.defaults({
  ease: "none"
});

const section1 = ".section-start";
const section2 = ".section-info";
const section3 = ".section-faq";
const header = ".header";
const footer = ".footer";

const line1 = ".decor-line-1 .decor-line__inner";
const line2 = ".decor-line-2 .decor-line__inner";
const line3 = ".decor-line-3 .decor-line__inner";
const line4 = ".decor-line-4 .decor-line__inner";
const line5 = ".decor-line-5 .decor-line__inner";
const line6 = ".decor-line-6 .decor-line__inner";

const circle1 = ".decor-circle-1";
const circle2 = ".decor-circle-2";
const circle3 = ".decor-circle-3";
const circle4 = ".decor-circle-4";
const circle6 = ".decor-circle-6";

const step1 = ".info-step-1";
const step2 = ".info-step-2";
const step3 = ".info-step-3";
const step4 = ".info-step-4";

const step1active = "info-step info-step-1 active";
const step2active = "info-step info-step-2 active";
const step3active = "info-step info-step-3 active";
const step4active = "info-step info-step-4 active";

const image0 = ".section-info__image-0";
const image1 = ".section-info__image-1";
const image2 = ".section-info__image-2";
const image3 = ".section-info__image-3";
const image4 = ".section-info__image-4";

const image1active = "section-info__image section-info__image-1 active";
const image2active = "section-info__image section-info__image-2 active";
const image3active = "section-info__image section-info__image-3 active";
const image4active = "section-info__image section-info__image-4 active";

const circle1active = "decor-circle decor-circle-1 active";
const circle2active = "decor-circle decor-circle-2 active";
const circle3active = "decor-circle decor-circle-3 active";
const circle4active = "decor-circle decor-circle-4 active";
const circle6active = "decor-circle decor-circle-6 active";

const iconScrollDown = ".section-start__scroll-down";

if (window.matchMedia("(min-width: 751px)").matches) {
  // -- DESKTOP ANIMATION

  // SECTION START
  let timeLine1 = gsap.timeline({
    scrollTrigger: {
      markers: true,
      trigger: section2,
      markers: false,
      start: "top 95%",
      end: "top 85%",
      scrub: 1
    }
  });
  timeLine1.fromTo(iconScrollDown, { opacity: 1 }, { opacity: 0, duration: 1 });

  // SECTION INFO
  let timeLine2 = gsap.timeline({
    scrollTrigger: {
      markers: true,
      trigger: section2,
      markers: false,
      pin: true,
      start: "top 0",
      end: "top -160%",
      scrub: true
    }
  });
  timeLine2
    .fromTo(
      line1,
      { height: "0%" },
      { height: "100%", duration: 2, delay: 0.3 }
    )
    .set(circle1, { className: circle1active })
    .set(step1, { className: step1active })
    .set(image1, { className: image1active })
    .fromTo(
      line2,
      { height: "0%" },
      { height: "100%", duration: 1, delay: 0.1 }
    )
    .set(circle2, { className: circle2active })
    .set(step2, { className: step2active })
    .set(image1, {
      className: "section-info__image section-info__image-1"
    })
    .set(image2, { className: image2active })
    .fromTo(
      line3,
      { height: "0%" },
      { height: "100%", duration: 1, delay: 0.1 }
    )
    .set(circle3, { className: circle3active })
    .set(step3, { className: step3active })
    .set(image3, { className: image3active })
    .fromTo(
      line4,
      { height: "0%" },
      { height: "100%", duration: 1, delay: 0.1 }
    )
    .set(circle4, { className: circle4active })
    .set(step4, { className: step4active })
    .set(image4, { className: image4active });

  // SECTION FAQ
  let timeLine3 = gsap.timeline({
    scrollTrigger: {
      trigger: section3,
      markers: false,
      start: "top 90%",
      end: "top 10%",
      scrub: true
    }
  });
  timeLine3
    .fromTo(line5, { height: "0%" }, { height: "100%", duration: 2 })
    .fromTo(line6, { height: "0%" }, { height: "100%", duration: 1 })
    .set(circle6, { className: circle6active })
    .to(line6, { height: "100%", duration: 1 });
} else {
  // -- MOBILE ANIMATION

  // SECTION INFO
  let timeLine1 = gsap.timeline({
    scrollTrigger: {
      markers: true,
      trigger: section2,
      markers: false,
      pin: true,
      start: "top 0",
      end: "top -150%",
      scrub: true
    }
  });
  timeLine1
    .fromTo(
      step1,
      { opacity: "0", y: 100 },
      { opacity: "1", y: 0, duration: 1, delay: 0.1 }
    )
    .set(image1, { className: image1active, delay: -0.8 })
    .fromTo(
      step1,
      { opacity: "1", scale: 1 },
      { opacity: "0", scale: 0, duration: 1, delay: 0.1 }
    )
    .fromTo(
      step2,
      { opacity: "0", y: 100 },
      { opacity: "1", y: 0, duration: 1, delay: -1.25 }
    )
    .set(image2, { className: image2active, delay: -0.8 })
    .fromTo(
      step2,
      { opacity: "1", scale: 1 },
      { opacity: "0", scale: 0, duration: 1, delay: 0.1 }
    )
    .fromTo(
      step3,
      { opacity: "0", y: 100 },
      { opacity: "1", y: 0, duration: 1, delay: -1.25 }
    )
    .set(image3, { className: image3active, delay: -0.8 })
    .fromTo(
      step3,
      { opacity: "1", scale: 1 },
      { opacity: "0", scale: 0, duration: 1, delay: 0.1 }
    )
    .fromTo(
      step4,
      { opacity: "0", y: 100 },
      { opacity: "1", y: 0, duration: 1, delay: -1.25 }
    )
    .set(image4, { className: image4active, delay: -0.8 })
    .fromTo(step4, { opacity: "1" }, { opacity: "1", duration: 0.5 });

  // SECTION HEADER && FOOTER
  let timeLine2 = gsap.timeline({
    scrollTrigger: {
      markers: true,
      trigger: footer,
      markers: false,
      start: "top 50%",
      end: "top 40%",
      scrub: true
    }
  });
  timeLine2.fromTo(
    header,
    { opacity: "1", y: 0 },
    { opacity: "0", y: "-120%", duration: 1 }
  );
}
