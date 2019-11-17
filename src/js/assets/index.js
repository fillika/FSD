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
    this.allOutput = this.container.querySelectorAll(
      ".guest-container__number"
    );
    this.arrow = this.parent.querySelector(".material-icons");
    this.clearBtn = this.parent.querySelector(".guest-container__btn-clear");
    this.applyBtn = this.parent.querySelector(".guest-container__btn-apply");

    this.init();
  }

  init() {
    this.input.addEventListener("click", event => {
      if (this.container.classList.contains("show-guest")) return;
      this.arrow.style.transform = "rotate(180deg)";
      this.container.classList.add("show-guest");
    });
    this.arrow.addEventListener("click", event => {
      if (this.container.classList.contains("show-guest")) return;
      this.arrow.style.transform = "rotate(180deg)";
      this.container.classList.add("show-guest");
    });
    this.plus();
    this.minus();
    this.clear();
    this.apply();
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

  clear() {
    this.clearBtn.addEventListener("click", event => {
      event.preventDefault();
      this.allOutput.forEach(item => {
        item.innerHTML = 0;
        this.input.value = "";
      });
    });
  }

  apply() {
    let count = 0;

    this.applyBtn.addEventListener("click", event => {
      event.preventDefault();
      this.allOutput.forEach(item => {
        const val = +item.textContent;
        count = count + val;

        if (count === 1) {
          this.input.value = count + " гость";
        } else if (count >= 2 && count <= 4) {
          this.input.value = count + " гостя";
        } else {
          this.input.value = count + " гостей";
        }
      });
      count = 0;
      this.container.classList.remove("show-guest");
      this.arrow.style.transform = "rotate(0deg)";
    });
  }
}
class bedCounter extends guestCounter {
  constructor(selector) {
    super(selector);
  }

  apply() {
    let count = 0;

    this.applyBtn.addEventListener("click", event => {
      event.preventDefault();
      this.allOutput.forEach(item => {
        const val = +item.textContent;
        count = count + val;

        if (count === 1) {
          this.input.value = count + " спальное место";
        } else if (count >= 2 && count <= 4) {
          this.input.value = count + " спальных места";
        } else {
          this.input.value = count + " спальных мест";
        }
      });
      count = 0;
      this.container.classList.remove("show-guest");
      this.arrow.style.transform = "rotate(0deg)";
    });
  }
}

const input = new guestCounter(".js-guest");
const bedInput = new bedCounter(".js-bed");
