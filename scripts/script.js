// $("#mobile_code").intlTelInput({
//   initialCountry: "in",
//   separateDialCode: true,
// });
$("#carouselExampleControls")
  .carousel({})
  .on("slide.bs.carousel", function () {
    document.getElementById("video1").pause();
    document.getElementById("video2").pause();
    document.getElementById("video3").pause();
    document.getElementById("video4").pause();
    document.getElementById("video5").pause();
    document.getElementById("video6").pause();
  });

$(".carousel").carousel({
  interval: 8000,
});

$(".inp-parent input").focusin(function () {
  if ($(window).width() < 767) {
    $(".inp-parent").css("margin-top", "30px");
  }
});

$(".inp-parent input").focusout(function () {
  if ($(window).width() < 767) {
    $(".inp-parent").css("margin-top", "0px");
  }
});

var input = document.querySelector("#mobile_code");
window.intlTelInput(input, {
  initialCountry: "in",
  separateDialCode: true,
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.4/js/utils.js",
});
var inputModal = document.querySelector("#mobile_code_modal");
window.intlTelInput(inputModal, {
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
