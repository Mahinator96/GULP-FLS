function slidesPlugin (activeSlide = 0) {
  const slides = document.querySelectorAll(".gallery__item");
  const slidesTitle = document.querySelectorAll(".gallery__item-title");

  slides[activeSlide].classList.add('active');
  
  for (const slide of slides) {
    slide.addEventListener("click", () => {
      clearActiveClasses();
      clearHiddenClasses();
  
      slide.classList.add("active");
      slide.querySelector('.gallery__item-title').classList.remove('visually-hidden');
    });
  }
  
  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }
  function clearHiddenClasses() {
    slidesTitle.forEach((title) => {
      title.classList.add("visually-hidden");
    });
  }
}
slidesPlugin(2);
