// Image Rotator Logic
const images = [
  'assets/IRLAB @ DAU GANDHINAGAR (2).jpg',
  'assets/gallary/fire_1.jpg',
  'assets/gallary/fire_9.jpg',
  'assets/gallary/fire_10.jpg'
];

let currentImageIndex = 0;
const sliderImage = document.getElementById('slider-image');

function showImage(index) {
  if (sliderImage) {
    sliderImage.style.opacity = 0;
    setTimeout(() => {
      sliderImage.src = images[index];
      sliderImage.style.opacity = 1;
    }, 200);
  }
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
}
setInterval(nextImage, 5000);

// Toggle Navbar on Mobile
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navbar').classList.toggle('active');
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


