window.onload = () => {
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

    const friend = "friend-avatar__item";
    const popover = "friend-avatar__popover";

    const pLeft = "position-left";
    const pRight = "position-right";
    const pTop = "position-top";
    const pTopLeft = "position-top-left";
    const pTopRight = "position-top-right";
    const pBottom = "position-bottom";
    const pBottomLeft = "position-bottom-left";
    const pBottomRight = "position-bottom-right";

    let checkedItem = "";

    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };

    let target = qs(container);

    let callback = function(entries, observer) {
      let isIntersecting = entries[0].isIntersecting;
      if (isIntersecting && !checkedItem) {
        setTimeout(() => qs(container).classList.add("visible"), 500);
        slowPlay();
      } else {
        slowPause();
      }
    };

    let observer = new IntersectionObserver(callback, options);

    observer.observe(target);

    const duration = 40; // duration
    const delay = (duration + duration / 7) * -1;

    let tl = gsap.timeline({});

    function addAvatarToTimeline(avatar, duration, delay) {
      tl.to(avatar, {
        motionPath: {
          path: "#flyPath",
          align: "#flyPath",
          autoRotate: false,
          curviness: 0.5,
          alignOrigin: [0.5, 0.5]
        },
        duration: duration,
        ease: "elastic",
        delay: delay,
        ease: "linear",
        repeat: -1,
        onUpdate: function() {
          checkPosition(avatar, this.ratio);
        }
      });
    }

    addAvatarToTimeline(avatarItem01, duration, 0);
    addAvatarToTimeline(avatarItem02, duration, delay);
    addAvatarToTimeline(avatarItem03, duration, delay);
    addAvatarToTimeline(avatarItem04, duration, delay);
    addAvatarToTimeline(avatarItem05, duration, delay);
    addAvatarToTimeline(avatarItem06, duration, delay);
    addAvatarToTimeline(avatarItem07, duration, delay);

    tl.pause();

    function clickOnItem(itemId, event) {
      if (
        event.target.classList.contains(popover) ||
        event.target.parentElement.classList.contains(popover)
      ) {
      } else if (checkedItem === itemId) {
        qs(itemId).classList.remove("popover-showed");
        setTimeout(() => qs(itemId).classList.remove("checked"), 500);
        checkedItem = "";
        slowPlay();
      } else {
        slowPause();
        if (checkedItem) {
          qs(checkedItem).classList.remove("popover-showed");
          setTimeout(() => qs(checkedItem).classList.remove("checked"), 10);
        }
        qs(itemId).classList.add("checked");
        setTimeout(() => qs(itemId).classList.add("popover-showed"), 10);
        setTimeout(() => (checkedItem = itemId), 20);
      }
    }

    function clickOnBody(event) {
      if (
        event.target.classList.contains(friend) ||
        event.target.parentElement.classList.contains(friend) ||
        event.target.classList.contains(popover) ||
        event.target.parentElement.classList.contains(popover)
      ) {
      } else if (checkedItem) {
        qs(checkedItem).classList.remove("popover-showed");
        setTimeout(() => {
          qs(checkedItem).classList.remove("checked");
          checkedItem = "";
        }, 500);
        slowPlay();
      }
    }

    qs(avatarItem01).addEventListener("click", event =>
      clickOnItem(avatarItem01, event)
    );
    qs(avatarItem02).addEventListener("click", event =>
      clickOnItem(avatarItem02, event)
    );
    qs(avatarItem03).addEventListener("click", event =>
      clickOnItem(avatarItem03, event)
    );
    qs(avatarItem04).addEventListener("click", event =>
      clickOnItem(avatarItem04, event)
    );
    qs(avatarItem05).addEventListener("click", event =>
      clickOnItem(avatarItem05, event)
    );
    qs(avatarItem06).addEventListener("click", event =>
      clickOnItem(avatarItem06, event)
    );
    qs(avatarItem07).addEventListener("click", event =>
      clickOnItem(avatarItem07, event)
    );

    document.body.addEventListener("click", event => clickOnBody(event));

    // HELPERS
    function qs(selector) {
      return document.querySelector(selector);
    }

    function slowPause() {
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(time => {
        setTimeout(() => {
          tl.timeScale((10 - time) / 10);
          if (time === 10) tl.pause();
        }, time * 50);
      });
    }

    function slowPlay() {
      [2, 3, 4, 5, 6, 7, 8, 9, 10].map(time => {
        setTimeout(() => {
          tl.timeScale(time / 10);
          if (time === 2) tl.play();
        }, time * 50);
      });
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
