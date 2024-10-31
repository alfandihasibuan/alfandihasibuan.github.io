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

// Hamburger Menu
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// moving element
const buttons = document.querySelectorAll(".interactive-button");

buttons.forEach((button) => {
  button.addEventListener("mousemove", (event) => {
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;

      button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });

  button.addEventListener("mouseleave", () => {
      button.style.transform = "translate(0, 0)";
  });
});

// typing effect
const typingElement = document.querySelector(".typing-effect");
const texts = ["TERIMA KASIH","ありがとう","THANK YOU","谢谢"];
let textIndex = 0;
let charIndex = 0;
let typingSpeed = 100;
let delayBetweenTexts = 3000;

function typeText() {
  if (charIndex < texts[textIndex].length) {
      typingElement.textContent += texts[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeText, typingSpeed);
  } else {
      setTimeout(deleteText, delayBetweenTexts);
  }
}

function deleteText() {
  if (charIndex > 0) {
      typingElement.textContent = texts[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(deleteText, typingSpeed);
  } else {
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(typeText, typingSpeed);
  }
}

typeText();