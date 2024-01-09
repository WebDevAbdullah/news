let mql = window.matchMedia("(max-width: 991.98px)");

const changeSlide = (slide) => {
  var swiper = new Swiper(".swiper", {
    slidesPerView: slide,
    spaceBetween: 30,
    autoplay: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};

const handleMediaQuery = () => {
  if (mql.matches) {
    changeSlide(1);
  } else {
    changeSlide(3);
  }
};

// Call the function initially
handleMediaQuery();

// Update when window resizes
mql.addListener(handleMediaQuery);

// Get Current Year
let date = new Date();
let year = date.getFullYear();
document.getElementById("current-year").innerHTML = "جميع الحقوق محفوظة أكاديمية حسوب" + " &copy; " + year;
