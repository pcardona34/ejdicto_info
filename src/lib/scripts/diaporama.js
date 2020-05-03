/* ==================================== *
 *      e j D i c t o  info             *
 * ==================================== *
 * (c)2012-2020 - Patrick Cardona       *
 * Licence GPL version 3 ou ultérieure  *
 * VOIR la licence complète à la racine *
 * ==================================== */

/* Gestion du diaporama */
/* D'après W3.css : https://www.w3schools.com/w3css/w3css_slideshow.asp */

var slideIndex = 1;
exports.slideIndex;

exports.plusDivs = function (n) {
  showDivs(slideIndex += n);
};

exports.currentDiv = function (n) {
  showDivs(slideIndex = n);
};

exports.showDivs = function(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i = i + 1) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i = i + 1) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
};