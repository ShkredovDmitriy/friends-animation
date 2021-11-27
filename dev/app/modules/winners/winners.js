import { modals, forms } from "~/app/_config/config";
import { modalFilterReset } from "~/app/_helpers/reset";
import { maskPhone } from "~/app/_helpers/mask";
import log from "~/app/_helpers/log";

const selector = ".modal-winners__scrollbar-container .table-body .table-row";

if (document.querySelector(modals.winners)) {
  // log("WINNERS", "start");
  modalFilterReset(modals.winners);
  sortWinnersByWeek();
  activateSortByPhone();
  maskPhone(forms.filter.phone);
  $(forms.filter.id).on("submit", e => e.preventDefault());
}

// HELPERS
function sortWinnersByWeek() {
  $(forms.filter.week).on("change", event => {
    const week = event.target.value;
    $(selector).addClass("filter-week-none");
    $(`${selector}[data-week='${week}']`).removeClass("filter-week-none");
  });
}

function activateSortByPhone() {
  $(forms.filter.phone).on("input", () =>
    setTimeout(() => {
      sortWinnersByPhone();
    }, 200)
  );
}

function sortWinnersByPhone() {
  let phone = $(forms.filter.phone).val();
  console.log(phone);
  if (phone) {
    phone = [...phone];
    phone[2] = "(";
    phone[3] = "*";
    phone[4] = "*";
    phone[5] = "*";
    phone[6] = ")";
    phone[7] = "*";
    phone[8] = "*";
    phone[9] = "*";
    phone = phone.join("");
    console.log(phone);
    $(`${selector} .table-cell:nth-child(2)`).each((id, cell) => {
      const field = $(cell).text();
      if (field.indexOf(phone) < 0) {
        $(cell)
          .parent()
          .addClass("filter-phone-none");
      } else {
        $(cell)
          .parent()
          .removeClass("filter-phone-none");
      }
    });
  } else {
    $(selector).removeClass("filter-phone-none");
  }
}
