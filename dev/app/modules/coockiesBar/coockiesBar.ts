import log from "~/app/_helpers/log";

if (document.querySelector(".coockies-bar")) {
  // log("COOCKIES BAR", "start");
  if (!localStorage.getItem("coockies_policy")) {
    coockieShow();
    $(".button-coockies-bar").on("click", () => coockieHide());
  }
}

// HELPERS
function coockieShow() {
  $(".coockies-bar").addClass("coockies-bar__block");
  setTimeout(() => $(".coockies-bar").addClass("coockies-bar__active"), 100);
}

function coockieHide() {
  $(".coockies-bar").removeClass("coockies-bar__active");
  setTimeout(() => $(".coockies-bar").addClass("coockies-bar__block"), 400);
  localStorage.setItem("coockies_policy", "true");
}
