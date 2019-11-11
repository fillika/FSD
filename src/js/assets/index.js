import $ from "jquery";
import "popper.js";

console.log("Hello FiLLIka");

const burger = document.querySelector(".burger");
const closeBtn = document.querySelector(".close-btn");

burger.addEventListener("click", event => {
  showAsideMenu(event);
});

closeBtn.addEventListener("click", event => {
  closeMenu(event);
});

function showAsideMenu(event) {
  event.preventDefault();

  const menu = document.querySelector(".header-mobile");
  menu.classList.add("show");
}

function closeMenu(event) {}
