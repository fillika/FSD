const slider = $(".js-range-slider");
const output = $(".filter__range-total");
const datepicker_main = $(".datepicker-main");
const datepicker_second = $(".my-datepicker");

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

const config = {
  todayButton: 1,
  classes: "dt-second",
  range: true,
  multipleDatesSeparator: " - ",
  minDate: new Date(),
  clearButton: true,
  toggleSelected: true,
  // inline: true,
  onShow: function(inst, animationCompleted) {
    const todayBtn = inst.nav.$buttonsContainer[0].firstChild;
    console.log(todayBtn);
    todayBtn.innerHTML = "Принять";
    todayBtn.addEventListener("click", function(event) {
      event.preventDefault();
      inst.hide();
    });
  }
};

const dateP = datepicker_main
  .datepicker({
    todayButton: 1,
    classes: "dt-main",
    range: true,
    multipleDatesSeparator: " - ",
    minDate: new Date(),
    clearButton: true,
    toggleSelected: true,
    onSelect: function(fd, d, picker) {
      const arr = fd.split(" - ");
      const output = $(".js-input")[0];

      if (arr[1] === undefined) {
        output.value = "";
        return;
      }

      output.value = arr[1];
      picker.$el[0].value = arr[0];
    },
    onShow: function(inst, animationCompleted) {
      const todayBtn = inst.nav.$buttonsContainer[0].firstChild;
      console.log(todayBtn);
      todayBtn.innerHTML = "Принять";
      todayBtn.addEventListener("click", function(event) {
        event.preventDefault();
        inst.hide();
      });
    }
  })
  .data("datepicker");

datepicker_second.datepicker(config);

$(".js-input").click(function() {
  dateP.show();
});
