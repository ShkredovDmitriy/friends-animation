import { forms, ms } from "../_config/config";
import regx from "./regx";

// VALIDATION CUSTOM METHODS
validMethod("nameFormat", regx.name, ms.name.format);
validMethod("nameLastFormat", regx.nameLast, ms.nameLast.format);
validMethod("nameMiddleFormat", regx.nameMiddle, ms.nameMiddle.format);
validMethod("passwordFormat", regx.password, ms.password.format);
validMethod("ageFormat", regx.age, ms.age.format);
validMethod("emailFormat", regx.email, ms.email.format);
validMethod("phoneFormat", regx.phone, ms.phone.format);
validMethod("dateFormat", regx.date, ms.date.format);
validMethod("timeFormat", regx.time, ms.time.format);

// VALIDATION AUTOMATE
const formValidate = (formId, callback) => {
  const fields = $(`${formId} [data-valid-rule]`);
  const rules = {};
  const messages = {};
  $(fields).each((i, field) => {
    const rule = $(field).attr("data-valid-rule");
    const name = $(`#${field.id}`).attr("name");

    if (rule === "name") {
      rules[name] = { required: true, nameFormat: true };
      messages[name] = { required: ms.name.empty };
    }

    if (rule === "nameLast") {
      rules[name] = { required: true, nameLastFormat: true };
      messages[name] = { required: ms.nameLast.empty };
    }

    if (rule === "nameMiddle") {
      rules[name] = { required: true, nameMiddleFormat: true };
      messages[name] = { required: ms.nameMiddle.empty };
    }

    if (rule === "password") {
      rules[name] = { required: true, passwordFormat: true };
      messages[name] = { required: ms.password.empty };
    }

    if (rule === "passwordNew") {
      rules[name] = { required: true, passwordFormat: true };
      messages[name] = { required: ms.passwNew.empty };
    }

    if (rule === "passwordConfirm") {
      rules[name] = {
        required: true,
        passwordFormat: true,
        equalTo: forms.change.passw2
      };
      messages[name] = {
        required: ms.passwConf.empty,
        equalTo: ms.passwConf.equal
      };
    }

    if (rule === "email") {
      rules[name] = { required: true, emailFormat: true };
      messages[name] = { required: ms.email.empty };
    }

    if (rule === "phone") rules[name] = { required: true, phoneFormat: true };
    if (rule === "phone") messages[name] = { required: ms.phone.empty };
    if (rule === "age") rules[name] = { required: true, ageFormat: true };
    if (rule === "age") messages[name] = { required: ms.age.empty };
    if (rule === "region") rules[name] = { required: true };
    if (rule === "region") messages[name] = { required: ms.region.empty };
    if (rule === "city") rules[name] = { required: true };
    if (rule === "city") messages[name] = { required: ms.city.empty };
    if (rule === "reason") rules[name] = { required: true };
    if (rule === "reason") messages[name] = { required: ms.reason.empty };
    if (rule === "message") rules[name] = { required: true };
    if (rule === "message") messages[name] = { required: ms.message.empty };
    if (rule === "select") rules[name] = { required: true };
    if (rule === "select") messages[name] = { required: ms.select.empty };
    if (rule === "checkFN") rules[name] = { required: true };
    if (rule === "checkFN") messages[name] = { required: ms.field.empty };
    if (rule === "date") rules[name] = { required: true, dateFormat: true };
    if (rule === "date") messages[name] = { required: ms.date.empty };
    if (rule === "time") rules[name] = { required: true, timeFormat: true };
    if (rule === "time") messages[name] = { required: ms.time.empty };
    if (rule === "rules") rules[name] = { required: true };
    if (rule === "rules") messages[name] = { required: ms.rules.empty };
    if (rule === "politic") rules[name] = { required: true };
    if (rule === "politic") messages[name] = { required: ms.politic.empty };
    if (rule === "recaptcha")
      rules[name] = {
        required: function() {
          if (typeof grecaptcha === "undefined") return true;
          if (grecaptcha.getResponse() == "") return true;
          else return false;
        }
      };
    if (rule === "recaptcha") messages[name] = { required: ms.captcha.empty };
  });
  $(formId).validate({
    rules: rules,
    messages: messages,
    submitHandler: callback
  });
};

// HELPERS
function validMethod(name, reg, ms) {
  $.validator.addMethod(
    name,
    function(value, element) {
      return this.optional(element) || reg(value);
    },
    ms
  );
}

export { formValidate };
