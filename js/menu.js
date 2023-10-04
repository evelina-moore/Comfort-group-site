let btnOpenMenu = document.getElementById("btn-open-menu");
let btnCloseMenu = document.getElementById("btn-close-menu");
let menuDesktop = document.getElementById("menu-desktop");

btnOpenMenu.onclick = function (e) {
  e.preventDefault();
  menuDesktop.classList.add("opened");
};

btnCloseMenu.onclick = function (e) {
  e.preventDefault();
  menuDesktop.classList.remove("opened");
};
