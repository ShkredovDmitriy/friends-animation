if (document.querySelector(".friend-avatar__path")) {
  gsap.registerPlugin(MotionPathPlugin);
  // gsap.registerPlugin(MotionPathHelper);

  const image01 = ".friend-avatar__item--01";
  const image02 = ".friend-avatar__item--02";
  const image03 = ".friend-avatar__item--03";
  const image04 = ".friend-avatar__item--04";
  const image05 = ".friend-avatar__item--05";
  const image06 = ".friend-avatar__item--06";
  const image07 = ".friend-avatar__item--07";

  const duration = 40; // seconds
  const delay = (duration + duration / 7) * -1;

  setTimeout(() => {
    document.querySelector(".friend-avatar__block").classList.add("visible");
  }, 500);
  let tl = gsap.timeline({});

  function addAvatarToTimeline(avatar, duration, delay, callback) {
    tl.to(avatar, {
      motionPath: {
        path: "#flyPath",
        align: "#flyPath",
        autoRotate: false,
        curviness: 0.5,
        alignOrigin: [0.5, 0.5]
      },
      duration: duration,
      delay: delay,
      ease: "linear",
      repeat: -1,
      onUpdate: callback
    });
  }

  addAvatarToTimeline(image01, duration, 0, callback01);
  addAvatarToTimeline(image02, duration, delay, callback02);
  addAvatarToTimeline(image03, duration, delay, callback03);
  addAvatarToTimeline(image04, duration, delay, callback04);
  addAvatarToTimeline(image05, duration, delay, callback05);
  addAvatarToTimeline(image06, duration, delay, callback06);
  addAvatarToTimeline(image07, duration, delay, callback07);

  let checkedItem = "";

  function clickOnItem(itemId) {
    if (checkedItem != itemId) {
      checkedItem = itemId;
      tl.pause();
      document.querySelectorAll(".friend-avatar__item").forEach(item => {
        item.classList.remove("checked");
      });
      document.querySelector(itemId).classList.add("checked");
    } else {
      checkedItem = "";
      tl.play();
      document.querySelectorAll(".friend-avatar__item").forEach(item => {
        item.classList.remove("checked");
      });
    }
  }

  document
    .querySelector(image01)
    .addEventListener("click", () => clickOnItem(image01));

  document
    .querySelector(image02)
    .addEventListener("click", () => clickOnItem(image02));

  document
    .querySelector(image03)
    .addEventListener("click", () => clickOnItem(image03));

  document
    .querySelector(image04)
    .addEventListener("click", () => clickOnItem(image04));

  document
    .querySelector(image05)
    .addEventListener("click", () => clickOnItem(image05));

  document
    .querySelector(image06)
    .addEventListener("click", () => clickOnItem(image06));

  document
    .querySelector(image07)
    .addEventListener("click", () => clickOnItem(image07));

  function callback01() {
    const avatar = document.querySelector(".friend-avatar__item--01");
    const progress = Math.floor(this.ratio * 100);
    checkPosition(avatar, progress);
    // console.log(progress);
  }

  function callback02() {
    const avatar = document.querySelector(".friend-avatar__item--02");
    const progress = Math.floor(this.ratio * 100);
    checkPosition(avatar, progress);
    // console.log(progress);
  }

  function callback03() {
    const avatar = document.querySelector(".friend-avatar__item--03");
    const progress = Math.floor(this.ratio * 100);
    checkPosition(avatar, progress);
    // console.log(progress);
  }

  function callback04() {
    const avatar = document.querySelector(".friend-avatar__item--04");
    const progress = Math.floor(this.ratio * 100);
    checkPosition(avatar, progress);
    // console.log(progress);
  }

  function callback05() {
    const avatar = document.querySelector(".friend-avatar__item--05");
    const progress = Math.floor(this.ratio * 100);
    checkPosition(avatar, progress);
    // console.log(progress);
  }

  function callback06() {
    const avatar = document.querySelector(".friend-avatar__item--06");
    const progress = Math.floor(this.ratio * 100);
    checkPosition(avatar, progress);
    // console.log(progress);
  }

  function callback07() {
    const avatar = document.querySelector(".friend-avatar__item--07");
    const progress = Math.floor(this.ratio * 100);
    checkPosition(avatar, progress);
    // console.log(progress);
  }

  // HELPERS
  function checkPosition(avatar, progress) {
    if (progress > 80) positionRight(avatar);
    else if (progress > 49) positionTop(avatar);
    else if (progress > 30) positionLeft(avatar);
    else if (progress > 0) changePosition(avatar, "bottom");
  }

  function positionRight(avatar) {
    avatar.classList.remove("position-bottom", "position-left", "position-top");
    avatar.classList.add("position-right");
  }

  function positionTop(avatar) {
    avatar.classList.remove(
      "position-bottom",
      "position-left",
      "position-right"
    );
    avatar.classList.add("position-top");
  }

  function positionLeft(avatar) {
    avatar.classList.remove(
      "position-bottom",
      "position-top",
      "position-right"
    );
    avatar.classList.add("position-left");
  }

  function changePosition(avatar, position) {
    if (position === "bottom") {
      avatar.classList.remove(
        "position-left",
        "position-top",
        "position-right"
      );
      avatar.classList.add("position-bottom");
    }
  }
}
