const burger = document.getElementById("menu");
const nav = document.querySelector("nav");

let menu = false;

burger.addEventListener("click", () => {
  !menu ? (nav.style.translate = "0") : (nav.style.translate = "100%");
  menu = !menu;
});
