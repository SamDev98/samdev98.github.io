$(".navbar-collapse a").click(function () {
  $(".navbar-collapse").collapse("hide");
});

$("#mainNav a").click(function (e) {
  $("#mainNav a").removeClass("active");
  $(this).addClass("active");
});

function darkModeToggler() {
  const themeStylesheet = document.getElementById("theme");
  var element = document.getElementById("theme-toggler");
  if (themeStylesheet.href.includes("light")) {
    themeStylesheet.href = "";
    element.classList.add("far");
    element.classList.remove("fas");
  } else {
    themeStylesheet.href = "data/css/light.css";
    element.classList.add("fas");
    element.classList.remove("far");
  }
}
