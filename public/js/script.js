// Navbar Fix
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  const content = document.querySelector(".content");

  preloader.style.display = "none"; // Sembunyikan preloader
  content.classList.remove("hidden"); // Tampilkan konten dengan menghapus kelas hidden
});

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});
