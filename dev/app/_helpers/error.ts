const error = (formId: string) => {
  const serverError = (message: string) => {
    $(`${formId} .form-error`).html(
      `<div class="form-error__text">${message}</div>`
    );
  };
  return serverError;
};

export { error };
