import { modals, forms, ms, info } from "~/app/_config/config";
import { formValidate } from "~/app/_helpers/formValidate";
import { apiLogin } from "~/app/_helpers/api";
import { modalInfo } from "~/app/_helpers/modalInfo";
import { error } from "~/app/_helpers/error";
import { modalFormReset } from "~/app/_helpers/reset";
import log from "~/app/_helpers/log";

const serverError = error(forms.login.id);

if (document.querySelector(modals.login)) {
  // log("LOGIN", "start");
  modalFormReset(modals.login);
  $(".form-login-to-rec").on("click", buttonRecClick);
  $(".form-login-to-reg").on("click", buttonRegClick);
  formValidate(forms.login.id, sendFormData);
}

// HELPERS
function buttonRecClick() {
  $(modals.login).modal("hide");
  setTimeout(() => $(modals.rec).modal("show"), 500);
}

function buttonRegClick() {
  $(modals.login).modal("hide");
  setTimeout(() => $(modals.reg).modal("show"), 500);
}

function sendSuccess(data: { result: boolean; error: string }) {
  // const res = JSON.parse(data);
  if (data.result) {
    $(modals.login).modal("hide");
    window.location.reload();
  } else {
    if (data.error === "no_user") serverError(ms.user.notFound);
    if (data.error === "user_block") serverError(ms.user.block);
    if (data.error === "email_validate") {
      const email: any = $(forms.login.email).val();
      $(modals.login).modal("hide");
      setTimeout(() => {
        $(modals.confirm).modal("show");
        $(forms.confirm.email).val(email);
      }, 500);
    }
  }
}

function sendError() {
  $(modals.login).modal("hide");
  modalInfo(info.someError);
}

// API
function sendFormData() {
  apiLogin(forms.login.id, sendSuccess, sendError);
}
