document.querySelectorAll('a[href^="#"').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    let href = this.getAttribute("href").substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = 100;
    // const topOffset = 0; // если не нужен отступ сверху
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

window.addEventListener("scroll", () => {
  let scrollDistance = window.scrollY;

  document.querySelectorAll(".section").forEach((el, i) => {
    if (el.offsetTop <= scrollDistance) {
      document.querySelectorAll(".navigation img").forEach((el) => {
        if (el.classList.contains("active")) {
          el.classList.remove("active");
        }
      });
      document
        .querySelectorAll(".navigation li")
        [i].querySelector("img")
        .classList.add("active");
    }
  });
});

const btnBurger = document.querySelector(".hamburger");
const btn1 = document.querySelector(".link-toggle_1");
const btn2 = document.querySelector(".link-toggle_2");

btn1.addEventListener("click", function (e) {
  e.preventDefault();
  btnBurger.click();
});
btn2.addEventListener("click", function (e) {
  e.preventDefault();
  btnBurger.click();
});
