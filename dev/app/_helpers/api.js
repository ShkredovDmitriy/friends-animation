import { urlsDev, urlsProd, forms } from "../_config/config";

let urls = urlsProd;
if (process.env.NODE_ENV === "development") urls = urlsDev;

const apiRegistration = (formId, sucess, error) => {
  const formData = formFieldsValues(formId);
  const request = postRequest(formData, urls.apiRegistration, sucess, error);
};

const apiCity = (formData, sucess, error) => {
  const request = postRequest(formData, urls.apiCity, sucess, error);
};

const apiRecovery = (formId, sucess, error) => {
  const formData = formFieldsValues(formId);
  const request = postRequest(formData, urls.apiRecovery, sucess, error);
};

const apiLogin = (formId, sucess, error) => {
  const formData = formFieldsValues(formId);
  const request = postRequest(formData, urls.apiLogin, sucess, error);
};

const apiConfirm = (sucess, error) => {
  const formData = {};
  formData.email = $(forms.confirm.email).val();
  const request = postRequest(formData, urls.apiConfirm, sucess, error);
};

const apiHand = (sucess, error) => {
  const formData = formFieldsValues(forms.hand.id);
  $.ajax({
    type: "POST",
    url: urls.apiHand,
    data: formData,
    dataType: "json",
    success: sucess,
    error: error
  });
};

const apiFeedback = (sucess, error) => {
  const formData = formFieldsValues(forms.feedback.id);
  $.ajax({
    type: "POST",
    url: urls.apiFeedback,
    data: formData,
    dataType: "json",
    success: sucess,
    error: error
  });
};

// HELPERS
function formFieldsValues(formId) {
  const data = {};
  const fields = $(`${formId} [data-valid-rule]`);
  $(fields).each((i, field) => {
    const name = $(`#${field.id}`).attr("name");
    data[name] = $(`#${field.id}`).val();
  });
  return data;
}

function postRequest(formData, url, success, error) {
  return $.ajax({
    type: "POST",
    url: url,
    data: formData,
    dataType: "json",
    success: success,
    error: error
  });
}

export {
  apiRegistration,
  apiCity,
  apiRecovery,
  apiLogin,
  apiConfirm,
  apiHand,
  apiFeedback
};
