function openLightbox(imageUrl) {
    const lightboxContainer = document.getElementById('lightbox-container');
    const lightboxImage = document.getElementById('lightbox-image');

    lightboxImage.src = imageUrl;
    lightboxContainer.style.display = 'flex';
}

function closeLightbox() {
    const lightboxContainer = document.getElementById('lightbox-container');
    lightboxContainer.style.display = 'none';
}

const imageCells = document.querySelectorAll('.image-cell img');

imageCells.forEach((img) => {
    img.addEventListener('click', (e) => {
        e.preventDefault();
        const imageUrl = img.getAttribute('xthumbnail-orig-image');
        openLightbox(imageUrl);
    });
});

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}