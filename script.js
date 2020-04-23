/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  myFunction();
};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

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
