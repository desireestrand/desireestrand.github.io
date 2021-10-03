var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"]
slideshowshowSlides(1, 0);
slideshowshowSlides(1, 1);

function slideshowplusSlides(n, no) {
slideshowshowSlides(slideIndex[no] += n, no);
}

function slideshowshowSlides(n, no) {
var i;
var x = document.getElementsByClassName(slideId[no]);
if (n > x.length) {slideIndex[no] = 1}    
if (n < 1) {slideIndex[no] = x.length}
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
}
x[slideIndex[no]-1].style.display = "block";  
}