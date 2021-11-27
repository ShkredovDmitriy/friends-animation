import { modals, forms, ms, info } from "~/app/_config/config";
import { formValidate } from "~/app/_helpers/formValidate";
import { apiRegistration } from "~/app/_helpers/api";
import { modalInfo } from "~/app/_helpers/modalInfo";
import { error } from "~/app/_helpers/error";
import { modalFormReset } from "~/app/_helpers/reset";
import { maskPhone, maskNumber } from "~/app/_helpers/mask";
import log from "~/app/_helpers/log";

const serverError = error(forms.reg.id);

if (document.querySelector(modals.reg)) {
  // log("REGISTRATION", "start");
  $("#formRegCity").attr("data-valid-rule", "city");
  modalFormReset(modals.reg);
  maskPhone(forms.reg.phone);
  maskNumber(forms.reg.age);
  formValidate(forms.reg.id, sendFormData);
}

// HELPERS
function sendSuccess(data: { status: boolean; error: string }) {
  // const res = JSON.parse(data);
  if (data.status) {
    $(modals.reg).modal("hide");
    modalInfo("regSuccess");
  } else {
    if (data.error[0] === "end_registred") serverError(ms.reg.end);
    if (data.error[0] === "phone") serverError(ms.reg.phoneExist);
    if (data.error[0] === "email") serverError(ms.reg.emailExist);
  }
}

function sendError() {
  $(modals.reg).modal("hide");
  modalInfo(info.someError);
}

// API
function sendFormData() {
  apiRegistration(forms.reg.id, sendSuccess, sendError);
}
