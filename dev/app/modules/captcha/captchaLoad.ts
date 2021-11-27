import log from "~/app/_helpers/log";
import { modals } from "~/app/_config/config";

let recaptchaLoaded: boolean = false;

function recaptchaLoad() {
  if (!recaptchaLoaded) {
    // log("RECAPTCHA LOAD", "start");
    $(".recaptcha-container").addClass("recaptcha-spinner");
    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://www.google.com/recaptcha/api.js";
    setTimeout(() => head.appendChild(script), 1000);
    recaptchaLoaded = true;
  }
}

$(modals.feedback).on("show.bs.modal", () => recaptchaLoad());
