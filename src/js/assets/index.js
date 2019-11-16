import $ from "jquery";
import "popper.js";

window.addEventListener("load", () => {
  class Burger {
    constructor(elem) {
      this.container = elem;
      this.menu = document.querySelector(".header-mobile");

      this.init();
    }

    init() {
      if (!this.container) {
        console.error("Нет элемента container");
      } else {
        this.openMenu();
        this.closeMenu();
      }
    }

    openMenu() {
      this.container.addEventListener("click", event => {
        event.preventDefault();
        this.menu.classList.add("show");
      });
    }

    closeMenu() {
      document.addEventListener("click", e => {
        for (let i = 0; i < this.menu.childNodes.length; i++) {
          if (
            e.target === this.menu ||
            e.target === this.menu.childNodes[i] ||
            e.target === this.container
          ) {
            return;
          }
          this.menu.classList.remove("show");
        }
      });
    }
  }

  const burgerBtn = document.querySelector(".burger");

  new Burger(burgerBtn);
});
