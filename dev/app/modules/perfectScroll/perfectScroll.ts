import PerfectScrollbar from "perfect-scrollbar";

function initPrScrollbarY(select: any) {
  return new PerfectScrollbar(select, {
    suppressScrollX: true
  });
}

if (document.querySelector(".modal-winners__scrollbar-container")) {
  const prScrollWinners = initPrScrollbarY(
    document.querySelector(".modal-winners__scrollbar-container")
  );
}

// if (document.querySelector(".modal-faq__scrollbar-container")) {
//   const prScroll = initPrScrollbarY(
//     document.querySelector(".modal-faq__scrollbar-container")
//   );
// }
