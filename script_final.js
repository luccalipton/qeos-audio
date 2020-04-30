/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 6000); // Change image every 2 seconds
}

$(document).on("scroll", function() {
  if ($(document).scrollTop() > 200) {
    $("header").addClass("shrink");
  } else {
    $("header").removeClass("shrink");
  }
});

/*appearing text*/
(function() {
  var aboutEl = $("div.about"),
    aboutElOffset = aboutEl.offset().top / 2,
    documentEl = $(document);

  documentEl.on("scroll", function() {
    if (documentEl.scrollTop() > aboutElOffset && aboutEl.hasClass("hidden"))
      aboutEl.removeClass("hidden");
  });
})();
