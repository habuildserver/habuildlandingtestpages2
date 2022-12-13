const API_BASE_URL = 'https://stage.api.habuild.in'


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

var input = document.querySelector("#phone");
let code = window.intlTelInput(input, {
  initialCountry: "in",
  separateDialCode: true,
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.4/js/utils.js",
});
var inputModal = document.querySelector("#phone-modal");
let code_modal = window.intlTelInput(inputModal, {
  initialCountry: "in",
  separateDialCode: true,
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.4/js/utils.js",
});

let JoinNowMain = document.getElementById("join-now-2").addEventListener("click",()=>{
  let Name = document.getElementById("name").value
  let countryCode = code.selectedCountryData.dialCode
  let phone = countryCode+document.getElementById("phone").value;

  if(!Name || !phone){
    alert("Please enter all details")
  return;
  }
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  let raw = JSON.stringify({
    name:Name,
    mobile_number: phone,
    action_point: "CHALLENGE2",
  });
  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  fetch(`${API_BASE_URL}/api/lead?action_point=landing`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
        if(result.status==200){
          alert('Data Submitted')
        }
      if (typeof window !== "undefined") {
        window.location.href = "https://i.habuild.in/yoga21day";
      }
    })
    .catch((error) => {
      alert("Not submitted! Please try again.");
      console.log("error", error);
    });

})

let JoinNowModal = document.getElementById("join-now-modal-2").addEventListener("click",()=>{
  let Name = document.getElementById("name-modal").value
  let countryCode = code_modal.selectedCountryData.dialCode
  let phone = countryCode+document.getElementById("phone-modal").value;

  if(!Name || !phone){
    alert("Please enter all details")
  return;
  }
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  let raw = JSON.stringify({
    name:Name,
    mobile_number: phone,
    action_point: "CHALLENGE2",
  });
  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  fetch(`${API_BASE_URL}/api/lead?action_point=landing`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
        if(result.status==200){
          alert('Data Submitted')
        }
      if (typeof window !== "undefined") {
        window.location.href = "https://i.habuild.in/yoga21day";
      }
    })
    .catch((error) => {
      alert("Not submitted! Please try again.");
      console.log("error", error);
    });
})

// let form = document.querySelector("form").
// addEventListener("submit",(e)=>{
//   e.preventDefault();

//   let countryCode = code.selectedCountryData.dialCode
//   let Name = document.getElementById("name").value;
 
//   let phone = countryCode+document.getElementById("phone").value;
//     if(!Name || !phone){
//     alert("Please enter all details")
//   return;
//   }
//   let myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");
//   let raw = JSON.stringify({
//     name:Name,
//     mobile_number: phone,
//     action_point: "CHALLENGE3",
//   });
//   let requestOptions = {
//     method: "POST",
//     headers: myHeaders,
//     body: raw,
//     redirect: "follow",
//   };
//   fetch(`${API_BASE_URL}/api/lead?action_point=landing`, requestOptions)
//     .then((response) => response.json())
//     .then((result) => {
//         if(result.status==200){
//           alert('Data Submitted')
//         }
//       if (typeof window !== "undefined") {
//         window.location.href = "https://i.habuild.in/yoga21day";
//       }
//     })
//     .catch((error) => {
//       alert("Not submitted! Please try again.");
//       console.log("error", error);
//     });

// })

// $(document).ready(function () {
//   // Toggle plus minus icon on show hide of collapse element
//   $(".collapse")
//     .on("show.bs.collapse", function () {
//       $(this)
//         .prev(".card-header")
//         .find(".fa")
//         .removeClass("fa-plus")
//         .addClass("fa-minus");
//     })
//     .on("hide.bs.collapse", function () {
//       $(this)
//         .prev(".card-header")
//         .find(".fa")
//         .removeClass("fa-minus")
//         .addClass("fa-plus");
//     });
// });
