let slideIndex = 0;
// Next-previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("blocks");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].disabled = true;
  }
  slides[slideIndex-1].style.display = "block";
  slides[slideIndex-1].disabled = false;
}
function hideElements() {
    document.getElementById("main_container").style.display = "none";
    document.getElementById("main_container").disabled = true;
}
function showMainElements() {
    document.getElementById("main_container").style.display = "flex";
    document.getElementById("main_container").disabled = false;
}
/*show different elements when clicking an image */
function professionalPage() {
    hideElements();
    document.getElementById("professional_page").disabled = false;
    document.getElementById("professional_page").style.display = "flex";
}
function personalPage() {
    document.getElementById("personal_page").disabled = false;
    document.getElementById("personal_page").style.display = "flex";
    document.getElementById("slider_container").style.display = "none";
    document.getElementById("main_text").innerHTML = "just a few words"
}

function artsPage() {
    hideElements();
    document.getElementById("arts_page").disabled = false;
    document.getElementById("arts_page").style.display = "flex";
   

}