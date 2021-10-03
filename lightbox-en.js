// Open the Modal
function openModalEn() {
    document.getElementById("myModalEn").style.display = "block";
  }
  
  // Close the Modal
  function closeModalEn() {
    document.getElementById("myModalEn").style.display = "none";
  }
  
  var slideIndexEn = 1;
  showSlidesEn(slideIndexEn);

  // Thumbnail image controls
  function currentSlideEn(n) {
    showSlidesEn(slideIndexEn = n);
  }
  
  // Thumbnail image controls
  function showSlidesEn(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesEn");
    var dots = document.getElementsByClassName("hover-shadowEn");
    var captionTextEn = document.getElementById("captionEn");
    if (n > slides.length) {slideIndexEn = 1}
    if (n < 1) {slideIndexEn = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexEn-1].style.display = "block";
    dots[slideIndexEn-1].className += " active";
    captionTextEn.innerHTML = dots[slideIndexEn-1].alt;
  }