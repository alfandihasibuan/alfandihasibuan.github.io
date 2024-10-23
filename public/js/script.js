// Navbar Fix
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Preloader
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  const content = document.querySelector(".content");

  // Tampilkan preloader dan sembunyikan konten
  preloader.style.display = "block"; // Pastikan preloader terlihat
  content.classList.add("hidden"); // Sembunyikan konten

  // Setelah 2 detik (2000 ms), sembunyikan preloader dan tampilkan konten
  setTimeout(function () {
    preloader.style.display = "none"; // Sembunyikan preloader
    content.classList.remove("hidden"); // Tampilkan konten
  }, 5000); // 2000 ms = 2 detik
});

// Hamburger Menu
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Darkmode Toggle dengan Icon
const lightIcon = document.getElementById('light-icon'); // perbaiki selector ke id
const darkIcon = document.getElementById('dark-icon');   // perbaiki selector ke id
const html = document.querySelector('html');

// Fungsi untuk mengubah ke mode gelap
function enableDarkMode() {
  lightIcon.classList.add('hidden');
  darkIcon.classList.remove('hidden');
  html.classList.add('dark');
  localStorage.theme = 'dark';
}

// Fungsi untuk mengubah ke mode terang
function enableLightMode() {
  darkIcon.classList.add('hidden');
  lightIcon.classList.remove('hidden');
  html.classList.remove('dark');
  localStorage.theme = 'light';
}

// Cek apakah tema yang disimpan di localStorage atau sistem adalah dark mode
const isDarkMode = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

// Setel icon dan theme berdasarkan status saat ini
if (isDarkMode) {
  enableDarkMode();
} else {
  enableLightMode();
}

// Event listener untuk ikon light mode
lightIcon.addEventListener('click', enableDarkMode);

// Event listener untuk ikon dark mode
darkIcon.addEventListener('click', enableLightMode);

function enableDarkMode() {
  lightIcon.classList.add('icon-rotate-out');
  darkIcon.classList.remove('hidden');
  darkIcon.classList.add('icon-rotate-in');

  setTimeout(() => {
    lightIcon.classList.add('hidden');
    lightIcon.classList.remove('icon-rotate-out');
  }, 500); // Sesuaikan waktu dengan durasi animasi

  html.classList.add('dark');
  localStorage.theme = 'dark';
}

// Fungsi untuk mengubah ke mode terang dengan animasi
function enableLightMode() {
  darkIcon.classList.add('icon-rotate-out');
  lightIcon.classList.remove('hidden');
  lightIcon.classList.add('icon-rotate-in');

  setTimeout(() => {
    darkIcon.classList.add('hidden');
    darkIcon.classList.remove('icon-rotate-out');
  }, 500); // Sesuaikan waktu dengan durasi animasi

  html.classList.remove('dark');
  localStorage.theme = 'light';
}