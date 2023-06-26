const slides = document.querySelectorAll(".carousel-container__slide");
const dots = document.querySelectorAll(".dot");

const prevBtn = document.getElementById("btn-prev");
const nextBtn = document.getElementById("btn-next");

(function slider() {
  let count = 0;

  prevBtn.addEventListener("click", () => {
    count--;

    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    count++;

    updateCarousel();
  });

  function updateCarousel() {
    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    slides[count].classList.add("active");
    dots[count].classList.add("active");

    updateButtons();
  }

  function updateButtons() {
    prevBtn.disabled = count === 0;
    nextBtn.disabled = count === slides.length - 1;

    if (prevBtn.disabled) {
      prevBtn.classList.add("disabled");
    } else {
      prevBtn.classList.remove("disabled");
    }

    if (nextBtn.disabled) {
      nextBtn.classList.add("disabled");
    } else {
      nextBtn.classList.remove("disabled");
    }
  }

  updateCarousel();

  setInterval(function () {
    count++;

    if (count >= slides.length) {
      count = 0;
    }

    updateCarousel();
  }, 10000);
})();

for (let i = 0; i < dots.length; i++) {
  const dot = dots[i];

  dot.addEventListener("click", () => {
    count = i;

    updateCarousel();
  });
}
