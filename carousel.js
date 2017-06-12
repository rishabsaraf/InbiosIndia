var slideIndex = 1;

carousel();

function carousel() {
    currentDiv(slideIndex);
    slideIndex++;
    setTimeout(carousel, 5000); // Change image every 5 seconds
}

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("carousel");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < dots.length; i++) {
   dots[i].className = dots[i].className.replace(" w3-teal", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-teal";
}
