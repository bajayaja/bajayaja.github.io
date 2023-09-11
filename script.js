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