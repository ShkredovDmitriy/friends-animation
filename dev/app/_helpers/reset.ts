const formReset = (formId: string) => {
  $(formId).trigger("reset");
  $(formId)
    .validate()
    .resetForm();
  $(`${formId} input`).removeClass("error");
  $(`${formId} textarea`).removeClass("error");
  $(`${formId} select`).removeClass("error");
  $(`${formId} select`).selectpicker("refresh");
  $(`${formId} .form-error`).html("");
};

const tableReset = (tableId: string) => {
  $(`${tableId} .table-row`).removeClass("filter-week-none");
  $(`${tableId} .table-row`).removeClass("filter-phone-none");
};

const modalFormReset = (modalId: string) => {
  $(modalId).on("show.bs.modal", () => {
    const formId = "#" + $(`${modalId} form`).attr("id");
    formReset(formId);
  });
};

const modalFilterReset = (modalId: string) => {
  $(modalId).on("show.bs.modal", () => {
    const formId = "#" + $(`${modalId} .filter`).attr("id");
    formReset(formId);
    const tableId = "#" + $(`${modalId} .table`).attr("id");
    tableReset(tableId);
  });
};

export { formReset, modalFormReset, modalFilterReset };
