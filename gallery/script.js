var url = document.location.href
console.log(url)
// Creating a URLSearchParams object
var urlObj = new URL(url);

// Extracting the search parameters
var params = urlObj.searchParams;

// Getting the value of the 'test' parameter
var testValue = params.get('gallery');

// Removing the double quotes from the value

// Output the result
console.log(testValue);
document.title = testValue;
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.src = imageSrc;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}
