if (document.querySelector(".friend-avatar__path")) {
  gsap.registerPlugin(MotionPathPlugin);

  const container = ".friend-avatar__block";
  const avatarItem01 = ".friend-avatar__item--01";
  const avatarItem02 = ".friend-avatar__item--02";
  const avatarItem03 = ".friend-avatar__item--03";
  const avatarItem04 = ".friend-avatar__item--04";
  const avatarItem05 = ".friend-avatar__item--05";
  const avatarItem06 = ".friend-avatar__item--06";
  const avatarItem07 = ".friend-avatar__item--07";

  const pTop = "position-top";
  const pBottom = "position-bottom";
  const pLeft = "position-left";
  const pRight = "position-right";

  const duration = 40; // duration
  const delay = (duration + duration / 7) * -1;

  setTimeout(() => qs(container).classList.add("visible"), 500);

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

  addAvatarToTimeline(avatarItem01, duration, 0, callback01);
  addAvatarToTimeline(avatarItem02, duration, delay, callback02);
  addAvatarToTimeline(avatarItem03, duration, delay, callback03);
  addAvatarToTimeline(avatarItem04, duration, delay, callback04);
  addAvatarToTimeline(avatarItem05, duration, delay, callback05);
  addAvatarToTimeline(avatarItem06, duration, delay, callback06);
  addAvatarToTimeline(avatarItem07, duration, delay, callback07);

  let checkedItem = "";

  function clickOnItem(itemId) {
    if (checkedItem != itemId) {
      checkedItem = itemId;
      tl.pause();
      qsa(".friend-avatar__item").forEach(item =>
        item.classList.remove("checked")
      );
      qs(itemId).classList.add("checked");
    } else {
      checkedItem = "";
      tl.play();
      qsa(".friend-avatar__item").forEach(item =>
        item.classList.remove("checked")
      );
    }
  }

  qs(avatarItem01).addEventListener("click", () => clickOnItem(avatarItem01));
  qs(avatarItem02).addEventListener("click", () => clickOnItem(avatarItem02));
  qs(avatarItem03).addEventListener("click", () => clickOnItem(avatarItem03));
  qs(avatarItem04).addEventListener("click", () => clickOnItem(avatarItem04));
  qs(avatarItem05).addEventListener("click", () => clickOnItem(avatarItem05));
  qs(avatarItem06).addEventListener("click", () => clickOnItem(avatarItem06));
  qs(avatarItem07).addEventListener("click", () => clickOnItem(avatarItem07));

  function callback01() {
    checkPosition(avatarItem01, this.ratio);
  }

  function callback02() {
    checkPosition(avatarItem02, this.ratio);
  }

  function callback03() {
    checkPosition(avatarItem03, this.ratio);
  }

  function callback04() {
    checkPosition(avatarItem04, this.ratio);
  }

  function callback05() {
    checkPosition(avatarItem05, this.ratio);
  }

  function callback06() {
    checkPosition(avatarItem06, this.ratio);
  }

  function callback07() {
    checkPosition(avatarItem07, this.ratio);
  }

  // HELPERS
  function qs(selector) {
    return document.querySelector(selector);
  }

  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

  function checkPosition(avatar, ratio) {
    const item = qs(avatar);
    const progress = Math.floor(ratio * 100);
    if (progress > 82) positionLeft(item);
    else if (progress > 48) positionBottom(item);
    else if (progress > 31) positionRight(item);
    else if (progress > 0) positionTop(item);
  }

  function positionRight(avatar) {
    avatar.classList.remove(pBottom, pLeft, pTop);
    avatar.classList.add(pRight);
  }

  function positionTop(avatar) {
    avatar.classList.remove(pBottom, pLeft, pRight);
    avatar.classList.add(pTop);
  }

  function positionLeft(avatar) {
    avatar.classList.remove(pBottom, pTop, pRight);
    avatar.classList.add(pLeft);
  }

  function positionBottom(avatar) {
    avatar.classList.remove(pLeft, pTop, pRight);
    avatar.classList.add(pBottom);
  }
}
