import log from "~/app/_helpers/log";

let isMenuActive: boolean = false;

if (document.querySelector(".button-mob-menu")) {
  // log("MOBILE MENU", "start");
  $(".button-mob-menu").on("click", () => {
    !isMenuActive ? mobMenuShow() : mobMenuHide();
  });
  $(".main-menu__link").on("click", () => mobMenuHide());
}

// HELPERS
function mobMenuShow() {
  $("body").addClass("molile-menu-opened");
  $(".mobile-menu").animate({ top: "0" }, 500);
  $(".button-mob-menu").addClass("is-active");
  isMenuActive = true;
}

function mobMenuHide() {
  $("body").removeClass("molile-menu-opened");
  $(".mobile-menu").animate({ top: "-110vh" }, 500);
  $(".button-mob-menu").removeClass("is-active");
  isMenuActive = false;
}
