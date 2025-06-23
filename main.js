// Image Rotator Logic
const images = [
  'assets/IRLAB @ DAU GANDHINAGAR (2).jpg',
  'assets/gallary/fire_1.jpg'
  'assets/gallary/fire_12.jpg',
  'assets/gallary/fire_9.jpg',
  'assets/gallary/fire_10.jpg',
  'assets/gallary/14.jpeg',
  'assets/gallary/53.jpeg',
  'assets/gallary/54.jpeg'
  
  
];

let currentImageIndex = 0;
const sliderImage = document.getElementById('slider-image');

// Show selected image with fade effect
function showImage(index) {
  if (sliderImage) {
    sliderImage.style.opacity = 0;
    setTimeout(() => {
      sliderImage.src = images[index];
      sliderImage.style.opacity = 1;
    }, 200);
  }
}

// Next image function
function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
}

// Previous image function
function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(currentImageIndex);
}

// Initial image display
showImage(currentImageIndex);

// Auto-slide every 5 seconds
setInterval(nextImage, 5000);

// Attach button click events (remove inline onclick from HTML)
document.querySelector('.prev-btn')?.addEventListener('click', prevImage);
document.querySelector('.next-btn')?.addEventListener('click', nextImage);

// Toggle Navbar on Mobile
document.getElementById('hamburger')?.addEventListener('click', () => {
  document.getElementById('navbar')?.classList.toggle('active');
});

// Enable Dropdowns on Click (Mobile)
document.querySelectorAll(".dropdown > a").forEach((dropdownLink) => {
  dropdownLink.addEventListener("click", function (e) {
    if (window.innerWidth < 768) {
      e.preventDefault();
      document.querySelectorAll(".dropdown").forEach((item) => {
        if (item !== dropdownLink.parentElement) {
          item.classList.remove("open");
        }
      });
      dropdownLink.parentElement.classList.toggle("open");
    }
  });
});
