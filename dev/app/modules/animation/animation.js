window.onload = () => {
  if (document.querySelector(".friend-avatar__path")) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(MotionPathPlugin);

    const container = ".friend-avatar__block";
    const avatarItem01 = ".friend-avatar__item--01";
    const avatarItem02 = ".friend-avatar__item--02";
    const avatarItem03 = ".friend-avatar__item--03";
    const avatarItem04 = ".friend-avatar__item--04";
    const avatarItem05 = ".friend-avatar__item--05";
    const avatarItem06 = ".friend-avatar__item--06";
    const avatarItem07 = ".friend-avatar__item--07";

    const pLeft = "position-left";
    const pRight = "position-right";
    const pTop = "position-top";
    const pTopLeft = "position-top-left";
    const pTopRight = "position-top-right";
    const pBottom = "position-bottom";
    const pBottomLeft = "position-bottom-left";
    const pBottomRight = "position-bottom-right";

    let checkedItem = "";

    var options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    };

    var target = qs(container);

    var callback = function(entries, observer) {
      console.log(entries[0]);
      let isIntersecting = entries[0].isIntersecting;
      if (isIntersecting && !checkedItem) {
        setTimeout(() => qs(container).classList.add("visible"), 500);
        tl.play();
      } else {
        tl.pause();
      }
    };

    var observer = new IntersectionObserver(callback, options);

    observer.observe(target);

    const duration = 40; // duration
    const delay = (duration + duration / 7) * -1;

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

    tl.pause();

    function clickOnItem(itemId) {
      if (checkedItem === itemId) {
        qs(itemId).classList.remove("popover-showed");
        setTimeout(() => qs(itemId).classList.remove("checked"), 500);
        checkedItem = "";
        setTimeout(() => tl.play(), 500);
      } else {
        tl.pause();
        if (checkedItem) {
          qs(checkedItem).classList.remove("popover-showed");
          setTimeout(() => qs(checkedItem).classList.remove("checked"), 10);
        }
        qs(itemId).classList.add("checked");
        setTimeout(() => qs(itemId).classList.add("popover-showed"), 10);
        setTimeout(() => (checkedItem = itemId), 20);
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

      if (window.matchMedia("(min-width: 768px)").matches) {
        if (progress > 82) positionLeft(item);
        else if (progress > 75) positionBottomLeft(item);
        else if (progress > 55) positionBottom(item);
        else if (progress > 48) positionBottomRight(item);
        else if (progress > 31) positionRight(item);
        else if (progress > 27) positionTopRight(item);
        else if (progress > 7) positionTop(item);
        else if (progress > 0) positionTopLeft(item);
      } else {
        if (progress > 76) positionLeft(item);
        else if (progress > 70) positionBottomLeft(item);
        else if (progress > 55) positionBottom(item);
        else if (progress > 48) positionBottomRight(item);
        else if (progress > 26) positionRight(item);
        else if (progress > 20) positionTopRight(item);
        else if (progress > 7) positionTop(item);
        else if (progress > 0) positionTopLeft(item);
      }
    }

    function positionLeft(avatar) {
      removePosition(avatar);
      avatar.classList.add(pLeft);
    }

    function positionRight(avatar) {
      removePosition(avatar);
      avatar.classList.add(pRight);
    }

    function positionTop(avatar) {
      removePosition(avatar);
      avatar.classList.add(pTop);
    }

    function positionTopLeft(avatar) {
      removePosition(avatar);
      avatar.classList.add(pTopLeft);
    }

    function positionTopRight(avatar) {
      removePosition(avatar);
      avatar.classList.add(pTopRight);
    }

    function positionBottom(avatar) {
      removePosition(avatar);
      avatar.classList.add(pBottom);
    }

    function positionBottomLeft(avatar) {
      removePosition(avatar);
      avatar.classList.add(pBottomLeft);
    }

    function positionBottomRight(avatar) {
      removePosition(avatar);
      avatar.classList.add(pBottomRight);
    }

    function removePosition(avatar) {
      avatar.classList.remove(
        pLeft,
        pRight,
        pBottom,
        pBottomLeft,
        pBottomRight,
        pTop,
        pTopLeft,
        pTopRight
      );
    }
  }
};
