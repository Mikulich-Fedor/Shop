var slideIndex = 1;

showSlides(slideIndex);

function pluseSlides(n) {
  showSlides((slideIndex += 1));
}

function showSlides(n) {
  var i;
  var slide = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slide.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slide.length;
  }

  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("actise", " ");
  }
  slide[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}
