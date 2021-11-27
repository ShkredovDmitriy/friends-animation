import { modals, forms, ms, info } from "~/app/_config/config";
import { formValidate } from "~/app/_helpers/formValidate";
import { apiRecovery } from "~/app/_helpers/api";
import { modalInfo } from "~/app/_helpers/modalInfo";
import { error } from "~/app/_helpers/error";
import { modalFormReset } from "~/app/_helpers/reset";
import log from "~/app/_helpers/log";

const serverError = error(forms.rec.id);

if (document.querySelector(modals.rec)) {
  // log("RECOVERY", "start");
  modalFormReset(modals.rec);
  formValidate(forms.rec.id, sendFormData);
}

// HELPERS
function sendSuccess(data: { result: boolean; error: string }) {
  // const res = JSON.parse(data);
  if (data.result) {
    $(modals.rec).modal("hide");
    modalInfo(info.recSuccess);
  } else {
    if (data.error === "email not found") serverError(ms.email.notExist);
    if (data.error === "limit send password") serverError(ms.recovery.limit);
  }
}

function sendError() {
  $(modals.rec).modal("hide");
  modalInfo(info.someError);
}

// API
function sendFormData() {
  apiRecovery(forms.rec.id, sendSuccess, sendError);
}
