import log from "~/app/_helpers/log";

if (document.querySelector(".recaptcha-container")) {
  // log("CAPTCHA", "start");
  resizeCaptcha();
  $(window).resize(() => resizeCaptcha());
}

// HELPERS
function resizeCaptcha() {
  const scale: number = parseFloat($(".recaptcha-container").css("font-size"));
  const fontSize: number = scale / 16;
  $(".g-recaptcha").css("transform", "scale(" + fontSize + ")");
}
