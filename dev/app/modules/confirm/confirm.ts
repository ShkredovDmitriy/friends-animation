import { modals, forms, ms, info } from "~/app/_config/config";
import { apiConfirm } from "~/app/_helpers/api";
import { modalInfo } from "~/app/_helpers/modalInfo";
import { error } from "~/app/_helpers/error";
import { modalFormReset } from "~/app/_helpers/reset";
import log from "~/app/_helpers/log";

const serverError = error(forms.confirm.id);

if (document.querySelector(modals.confirm)) {
  // log("CONFIRM", "start");
  modalFormReset(modals.confirm);
  $(forms.confirm.button).on("click", () => sendFormData());
}

// HELPERS
function sendFormSuccess(data: { result: boolean; error: string }) {
  // const res = JSON.parse(data);
  if (data.result) {
    $(modals.confirm).modal("hide");
    modalInfo("confirmSuccess");
  } else {
    console.log(data);
    if (data.error === "email confirmed") serverError(ms.email.confirmed);
    if (data.error === "email not found") serverError(ms.email.notExist);
    if (data.error === "time_limit") serverError(ms.recovery.limit);
  }
}

function sendFormError() {
  $(modals.confirm).modal("hide");
  modalInfo(info.someError);
}

// API
function sendFormData() {
  apiConfirm(sendFormSuccess, sendFormError);
}
