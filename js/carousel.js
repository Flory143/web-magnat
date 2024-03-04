"use strict";

const nextStepBtn = document.querySelector(".skills-btn-next");
const prevStepBtn = document.querySelector(".skills-btn-prev");

const carousel = document.querySelector(".carousel");
let carouselItems = document.querySelector(".carousel-item");

setInterval(() => {
  printElements("right");
}, 5000); // автоматическая прокрутка каждые 3 секунды

function prePrintElements() {
  let carouselItemsW = document.querySelector(".carousel");
  if (window.innerWidth > 1600) {
    for (let i = 5; i <= carousel.children.length; i++) {
      carouselItemsW.children[i].style.display = "none";
    }
  } else if (window.innerWidth > 1300 && window.innerWidth <= 1600) {
    let i = 4; // сколько элементов должно остаться при данном разрешении
    for (i; i < carouselItemsW.children.length; i++) {
      carouselItemsW.children[i].style.display = "none";
    }
  } else if (window.innerWidth > 1000 && window.innerWidth <= 1300) {
    let i = 3; // сколько элементов должно остаться при данном разрешении
    for (i; i < carouselItemsW.children.length; i++) {
      carouselItemsW.children[i].style.display = "none";
    }
  } else if (window.innerWidth > 750 && window.innerWidth <= 1000) {
    let i = 2; // сколько элементов должно остаться при данном разрешении
    for (i; i < carouselItemsW.children.length; i++) {
      carouselItemsW.children[i].style.display = "none";
    }
  } else if (window.innerWidth < 750) {
    let i = 1; // сколько элементов должно остаться при данном разрешении
    for (i; i < carouselItemsW.children.length; i++) {
      carouselItemsW.children[i].style.display = "none";
    }
  }
}

function prePrintElementsReset() {
  let carouselItemsW = document.querySelector(".carousel");
  for (let i = 0; i < carouselItemsW.children.length; i++) {
    carouselItemsW.children[i].style.display = "flex";
  }
}

function printElements(btn) {
  prePrintElementsReset();
  let carouselItemsNow = document.querySelectorAll(".carousel-item");
  let p = document.createElement("p");
  p.classList.add("carousel-item");

  if (btn === "right") {
    p.innerHTML = `${carouselItemsNow[0].innerHTML}`;
    carouselItemsNow[0].remove();
    carousel.appendChild(p);
  } else if (btn === "left") {
    p.innerHTML = `${carouselItemsNow[carouselItemsNow.length - 1].innerHTML}`;
    carousel.replaceChildren();
    carousel.appendChild(p);
    for (let i = 0; i < carouselItemsNow.length; i++) {
      carousel.appendChild(carouselItemsNow[i]);
    }
    carouselItemsNow[carouselItemsNow.length - 1].remove();
  }
  prePrintElements();
}

nextStepBtn.addEventListener("click", () => {
  printElements("right");
});
prevStepBtn.addEventListener("click", () => {
  printElements("left");
});

// изменение при изменении ширины
window.addEventListener("resize", () => {
  prePrintElementsReset();
  prePrintElements();
});

prePrintElements();
