/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

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


function pictureChange0() {
  document.getElementById("theImage").src =
    "https://lh3.googleusercontent.com/qWVMJrg9KLDjz6t5nzSdTwx7vagweM6pUi2E37soBht4cb5Q4e-ewhoVvjWT261C2SB-eU815znwM4MlV20SKFyRhgaeqtw-gPjsk1k5RD-Pv1DD57DetVXADDIgid0JMaIhxwCIFA=w2400";
}

function pictureChange1() {
  document.getElementById("theImage").src =
    "https://lh3.googleusercontent.com/NLtG7POqD3YhsXvQOSnQ0OXYRTH4QOtBERhiL9vCuTukWLILNYeFbGevfre4i22VlTM-UMyfYCxa2nAy818HPkNS6w8TuOm2OT8MvmHsPXQtZClJgnexN8yZqW2tfVqQ7W6ksHBP6Q=w2400";
}

function pictureChange2() {
  document.getElementById("theImage").src =
    "https://lh3.googleusercontent.com/bgcLU70bJDjnNvp47uh57VLvIBsBpe9-GzRM5e0TAji-a6W_Wco6sFvPVNgcaNJn1lFGl6Xx1GDEjx_TYZDJAo5rf-g20GtnEgYWtyj07TALOB2na65Ai-JPyWhZut_lBSW4ISdlMQ=w2400";
}

function pictureChange3() {
  document.getElementById("theImage").src =
    "https://lh3.googleusercontent.com/vO-QY2gjqpTl9p0z6BWYeVHprCgic1XeNPqPfKNPpTllnN9VLtnISDRATbPJ4SX3hhYZ3fJtp3Sg-bVoFx9I7YEteYMdhVt56Ue7P3C7KgdjEyAJLIzCfCghx3_BqqYC_qN6mMpMgw=w2400";
}

function pictureChange4() {
  document.getElementById("theImage").src =
    "https://lh3.googleusercontent.com/0k6f3hxnY4s0ybSrHC_zUbg-pweAZz9wisxMnheUMmqw-mz5yENkf8sVVh3r0U_HeXL3vMavLR136CbE3U16ginZRUWBASwU-uSKoBRE98PYJ6dPE24oX8wi8j5XQkWEIobD6i4nHA=w2400";
}

function pictureChange5() {
  document.getElementById("theImage").src =
    "https://lh3.googleusercontent.com/ijPqEUVoveDjc8n0zqRXRF6dGoMj-BBdyC7AJ-Nt-2kQ7Q_ZhSV0iHETxTzlbKS2MoyzOxX97s6IrsUKjQ0DFPVxw507ucLljQ09edqxC2YE8SlHZIraPqw_UAcizvFp70phm1t9Eg=w2400";
}

function pictureChange6() {
  document.getElementById("theImage").src =
    "https://lh3.googleusercontent.com/PBhtevurtWTIPf54aikOyQuF9zYmFUWglN8s9sA9NoRdvXk3Yjkn4kcFmROyTkuU36YQD2Mg_McRjfk49dg50PIBwuSCDVCrZHzF53iydUPmrWQ6iAU490uPgCnapg0T8cP6lTJ_6g=w2400";
}

function pictureChange7() {
  document.getElementById("theImage").src =
    "https://lh3.googleusercontent.com/uH5XJF2pfX-TS9vLo9lj1iIaHpb2nj50rNkfEHs6Txdy_j1snm8kbUvAldIzWOB5vyqAmhLv0E0olKVacP81EHpxywABsIHkrRIRF-pzwLUwqHZf3OL68mwgfnhtEQ3gIdPwBnyiCw=w2400";
}

function pictureChange8() {
  document.getElementById("theImage").src =
    "https://lh3.googleusercontent.com/XaMQpV0uqtM9ozIvSFqKHD7Bw6imMSwfb06r7jtfb9kk86RrwE2_lciqVHF0LwMrWObVEK5DXIyv3c4C2y-YBBJSRXu9hs2Ay7chWHsEfTyoLMBlhr995yvfy8IjUrJTRp-LoDo-uw=w2400";
}

function pictureChange9() {
  document.getElementById("theImage").src =
    "https://lh3.googleusercontent.com/BeQ5aK0vmgPqyWStGo9zcfKhh_jsvxssJnPP6FCp4TPq8FDQhEbC3FeS3KQhdGMoANToOinT9XUfh_U7_d9CcnZPaS0KExt-BR11hnYxMTgKxVCfh05grg9Yi09HdO9BUHIhcp1GhA=w2400";
}
