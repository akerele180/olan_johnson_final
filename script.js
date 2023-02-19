const year = document.getElementById("cal");
const mobileClose = document.getElementById("close");
const mobileOpen = document.getElementById("open");
const mobileMenu = document.getElementById("mobile-menu");

let date = new Date();
let calYear = date.getUTCFullYear();

mobileOpen.addEventListener("click", () => {
  mobileClose.classList.toggle("hidden");
  mobileOpen.classList.toggle("hidden");
  mobileMenu.classList.toggle("-translate-x-full");
  document.getElementsByTagName("body")[0].classList.add("h-screen");
  document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
  document.getElementsByTagName("body")[0].classList.add("overflow-y-hidden");
});

mobileClose.addEventListener("click", () => {
  mobileOpen.classList.toggle("hidden");
  mobileClose.classList.toggle("hidden");
  mobileMenu.classList.toggle("-translate-x-full");
  document.getElementsByTagName("body")[0].classList.remove("h-screen");
  document.getElementsByTagName("body")[0].classList.remove("overflow-hidden");
  document
    .getElementsByTagName("body")[0]
    .classList.remove("overflow-y-hidden");
});

year.innerHTML = calYear;
