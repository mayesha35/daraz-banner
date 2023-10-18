$(document).ready(function () {
  $(".li1").hover(function () {
    let isHovered = $(this).is(":hover");
    if (isHovered) {
      $(".sidebar2-items1").stop().show(500);
    } else {
      $(".sidebar2-items1").stop().hide();
    }
  });
  $(".li2").hover(function () {
    let isHovered = $(this).is(":hover");
    if (isHovered) {
      $(".sidebar2-items2").stop().show(500);
    } else {
      $(".sidebar2-items2").stop().hide();
    }
  });
  $(".li3").hover(function () {
    let isHovered = $(this).is(":hover");
    if (isHovered) {
      $(".sidebar2-items3").stop().show(500);
    } else {
      $(".sidebar2-items3").stop().hide();
    }
  });
  $(".li4").hover(function () {
    let isHovered = $(this).is(":hover");
    if (isHovered) {
      $(".sidebar2-items4").stop().show(500);
    } else {
      $(".sidebar2-items4").stop().hide();
    }
  });
  $(".li5").hover(function () {
    let isHovered = $(this).is(":hover");
    if (isHovered) {
      $(".sidebar2-items5").stop().show(500);
    } else {
      $(".sidebar2-items5").stop().hide();
    }
  });
  $(".li6").hover(function () {
    let isHovered = $(this).is(":hover");
    if (isHovered) {
      $(".sidebar2-items6").stop().show(500);
    } else {
      $(".sidebar2-items6").stop().hide();
    }
  });
  $(".li7").hover(function () {
    let isHovered = $(this).is(":hover");
    if (isHovered) {
      $(".sidebar2-items7").stop().show(500);
    } else {
      $(".sidebar2-items7").stop().hide();
    }
  });
  $(".li8").hover(function () {
    let isHovered = $(this).is(":hover");
    if (isHovered) {
      $(".sidebar2-items8").stop().show(500);
    } else {
      $(".sidebar2-items8").stop().hide();
    }
  });
  $(".li9").hover(function () {
    let isHovered = $(this).is(":hover");
    if (isHovered) {
      $(".sidebar2-items9").stop().show(500);
    } else {
      $(".sidebar2-items9").stop().hide();
    }
  });
  $(".li10").hover(function () {
    let isHovered = $(this).is(":hover");
    if (isHovered) {
      $(".sidebar2-items10").stop().show(500);
    } else {
      $(".sidebar2-items10").stop().hide();
    }
  });
  $(".li11").hover(function () {
    let isHovered = $(this).is(":hover");
    if (isHovered) {
      $(".sidebar2-items11").stop().show(500);
    } else {
      $(".sidebar2-items11").stop().hide();
    }
  });
  $(".li12").hover(function () {
    let isHovered = $(this).is(":hover");
    if (isHovered) {
      $(".sidebar2-items12").stop().show(500);
    } else {
      $(".sidebar2-items12").stop().hide();
    }
  });
});

//slider

let slideIndex = 0;

showSlides();
function showSlides() {
  var i;

  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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

  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

//mobile slider

let slideIndex2 = 0;

showSlides2();
function showSlides2() {
  var j;

  let slides2 = document.getElementsByClassName("images");

  for (j = 0; j < slides2.length; j++) {
    slides2[j].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > slides2.length) {
    slideIndex2 = 1;
  }

  slides2[slideIndex2 - 1].style.display = "block";

  setTimeout(showSlides2, 2000); // Change image every 2 seconds
}
