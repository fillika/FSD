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

class guestCounter {
  constructor(selector) {
    this.input = document.querySelector(selector);
    this.parent = this.input.closest(".guest-container");
    this.container = this.parent.querySelector(".guest-container__inner");

    this.init();
  }

  init() {
    this.input.addEventListener("click", event => {
      if (this.container.classList.contains("show-guest")) return;

      this.container.classList.add("show-guest");
    });
    this.plus();
    this.minus();
  }

  plus() {
    const allPlus = this.container.querySelectorAll(".plus");

    allPlus.forEach(item => {
      item.addEventListener("click", event => {
        const parent = item.closest(".counter");
        const out = parent.querySelector(".guest-container__number");

        let value = +out.textContent;
        out.innerHTML = value + 1;
      });
    });
  }

  minus() {
    const allMinus = this.container.querySelectorAll(".minus");

    allMinus.forEach(item => {
      item.addEventListener("click", event => {
        const parent = item.closest(".counter");
        const out = parent.querySelector(".guest-container__number");

        let value = +out.textContent;

        if (value === 0) return;

        out.innerHTML = value - 1;
      });
    });
  }
}

const input = new guestCounter(".js-guest");
