// let acc = document.getElementsByClassName("accordion");
// let i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     let panel = this.nextElementSibling;
//     if (panel.style.maxHeight){
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     }
//   });
// }

$(document).ready(function () {
  $(".accordion").click(function () {
    $(this).toggleClass("active");
    var panel = $(this).next();
    if (panel.css("max-height") !== "0px") {
      panel.css("max-height", "0px");
    } else {
      panel.css("max-height", panel.prop("scrollHeight") + "px");
    }
  });
});