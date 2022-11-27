// $("#mobile_code").intlTelInput({
//   initialCountry: "in",
//   separateDialCode: true,
// });

var input = document.querySelector("#mobile_code");
window.intlTelInput(input, {
  initialCountry: "in",
  separateDialCode: true,
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.4/js/utils.js",
});

$(document).ready(function () {
  // Toggle plus minus icon on show hide of collapse element
  $(".collapse")
    .on("show.bs.collapse", function () {
      $(this)
        .prev(".card-header")
        .find(".fa")
        .removeClass("fa-plus")
        .addClass("fa-minus");
    })
    .on("hide.bs.collapse", function () {
      $(this)
        .prev(".card-header")
        .find(".fa")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    });
});
