import { apiCity } from "~/app/_helpers/api";

$(".basicAutoComplete").autoComplete({
  minLength: 2,
  noResultsText: "Город не найден",
  events: {
    searchPost: parseResult,
    search: function(qry, callback) {
      var region = $("#formRegRegion").val();
      const formData = { region_id: region, city: qry };
      if (region) apiCity(formData, callback, callback);
    }
  }
});

// HELPERS
function parseResult(data) {
  // const res = JSON.parse(data);
  let cities = [];
  if (data.result) cities = data.city;
  return cities;
}

// $(".basicAutoComplete").autoComplete("show");
