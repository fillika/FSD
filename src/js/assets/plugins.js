const slider = $(".js-range-slider");
const output = $(".filter__range-total");

slider.ionRangeSlider({
  type: "double",
  min: 0,
  max: 20000,
  from: 5000,
  to: 10000,
  hide_min_max: true,
  hide_from_to: true
});

slider.on("change", function() {
  let from = $(this).data("from"); // input data-from attribute
  let to = $(this).data("to"); // input data-to attribute
  output.html(`${from}₽ - ${to}₽`);
});
