var menuBtn = document.querySelector(".menu-btn");
var menu = document.getElementById("menu");
var isOpen = false;

menuBtn.addEventListener("click", function () {
  isOpen = !isOpen;
  if (isOpen) {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});