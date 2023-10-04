// let sliderNav = document.querySelectorAll(".slider-nav li");

// for (let i = 0; i < sliderNav.length; i++) {
//   sliderNav[i].onclick = function (e) {
//     e.preventDefault();

//     document.querySelector(".slider-nav li.active").classList.remove("active");
//     document.querySelector(".slider-item.active").classList.remove("active");
//       e.target.classList.add("active");
//       let id = e.target.dataset.id;

//     document.querySelector(".slider-item[data-id='" + id + "']").classList.add("active");
//   };
// }

$(".slider-nav li").on("click", function (e) {
  e.preventDefault();

  $(".slider-nav li.active").removeClass("active");
  let id = $(this).data("id");

  $(".slider-item.active").fadeOut("slow", function () {
    $(this).removeClass("active");
    $(".slider-item[data-id='" + id + "']").fadeIn("slow", function () {
      $(this).addClass("active");
    });
  });

  $(this).addClass("active");
});
