const slideshows = document.querySelectorAll('.slideshow');

slideshows.forEach(slideshow => {
  let currentSlide = 0;
  const slides = slideshow.querySelectorAll('img');
  const slideCount = slides.length;

  setInterval(() => {
    slides.forEach(slide => {
      slide.classList.remove('active');
    });
    slides[currentSlide].classList.add('active');
    currentSlide = (currentSlide + 1) % slideCount;
  }, 3000); // Change slide every 3 seconds
});
