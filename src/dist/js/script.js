// hamburger
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("menu-active");
    hamburger.classList.toggle("is-active");
    menu.classList.toggle("hidden"); // Gunakan kelas Tailwind `hidden` untuk menyembunyikan/menampilkan menu
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const sliderTabs = document.querySelectorAll(".slider-tab");

  // Fungsi untuk menggeser slider
  function slideToIndex(index) {
    sliderWrapper.style.transform = `translateX(-${index * 100}%)`;

    // Update active state pada tab
    sliderTabs.forEach((tab, i) => {
      if (i === index) {
        // Tambahkan classes Tailwind untuk active state
        tab.classList.add("font-bold", "text-yellow-400");
        tab.classList.remove("text-white");
      } else {
        // Hapus classes active state
        tab.classList.remove("font-bold", "text-yellow-400");
        tab.classList.add("text-white");
      }
    });
  }

  // Event listener untuk setiap tab
  sliderTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      slideToIndex(index);
    });
  });

  // Inisialisasi slider pada posisi pertama
  slideToIndex(0);
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider-wrapper");
  const slides = document.querySelectorAll(".slider-item");
  const prevButton = document.querySelector("[data-carousel-prev]");
  const nextButton = document.querySelector("[data-carousel-next]");
  let currentSlide = 0;

  // Tampilkan slide pertama
  slides[0].classList.remove("hidden");

  // Fungsi untuk menampilkan slide
  function showSlide(index) {
    slides.forEach((slide) => slide.classList.add("hidden"));
    slides[index].classList.remove("hidden");
  }

  // Previous button
  prevButton.addEventListener("click", () => {
    currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    showSlide(currentSlide);
  });

  // Next button
  nextButton.addEventListener("click", () => {
    currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    showSlide(currentSlide);
  });
});


