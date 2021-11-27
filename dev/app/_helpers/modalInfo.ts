import { modals } from "../_config/config";

const modalInfo = (props: any) => {
  $("#modalInfo .modal-title").html(props.title);
  $("#modalInfo .modal-info__mess").html(props.message);
  setTimeout(() => {
    $(modals.info).modal("show");
  }, 500);
};

export { modalInfo };
