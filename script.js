window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("btn-back-to-top").style.opacity = 1;
    document.getElementById("navbar").style.opacity = 1;
  } else {
    document.getElementById("btn-back-to-top").style.opacity = 0;
    document.getElementById("navbar").style.opacity = 0;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".category-button");
  const images = document.querySelectorAll("#image-gallery .col-md-4");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");
      filterImages(category);
    });
  });

  function filterImages(category) {
    images.forEach((image) => {
      const imageCategory = image.getAttribute("data-category");
      if (category === "all" || category === imageCategory) {
        // image.classList.add("fade-in");
        image.style.display = "block";
      } else {
        // image.classList.remove("fade-in");
        image.style.display = "none";
      }
    });
  }
});

function checkMessage() {
  (() => {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add("was-validated");
        },
        false
      );
    });
  })();
}
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// JavaScript
function toggleTheme(theme) {
  // ตรวจสอบธีมปัจจุบัน
  const currentTheme = document.body.dataset.bsTheme;

  // ตรวจสอบธีมที่ต้องการและเปลี่ยนแปลง
  if (currentTheme !== theme) {
    document.body.dataset.bsTheme = theme;
  }
}
function toggleThemeSideBar() {
  document.body.dataset.bsTheme =
    document.body.dataset.bsTheme === "light" ? "dark" : "light";
}

var initialBackgroundSize = "cover"; // ขนาดเริ่มต้นของภาพพื้นหลัง

window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  var bgScale = 1 + scrollPosition * 0.05; // ปรับค่าซูมตามตำแหน่งการเลื่อน
  var newBackgroundSize = "auto " + (100 + bgScale) + "%"; // ปรับขนาดใหม่ของภาพพื้นหลัง

  // จำกัดค่าขนาดของภาพพื้นหลังเพื่อให้ไม่ซูมเกินไป
  if (bgScale > 1) {
    document.querySelector(".bg").style.backgroundSize = newBackgroundSize;
  } else {
    document.querySelector(".bg").style.backgroundSize = initialBackgroundSize;
  }
});

// เพิ่มการเรียกฟังก์ชันเมื่อหน้าเว็บโหลดเสร็จ
window.addEventListener("load", function () {
  document.querySelector(".bg").style.backgroundSize = initialBackgroundSize; // Set the initial background size to cover
});

// loading
let progress = 0;
const fakeLoaderInterval = window.setInterval(function () {
  const lp = document.querySelector(".loading-progress");
  progress = progress + getRandomArbitrary(10, 25);
  lp.style.transform = `translateX(${progress}%)`;

  if (progress >= 75) {
    window.clearInterval(fakeLoaderInterval);
    lp.style.transform = "translateX(100%)";
    setTimeout(
      () =>
        (document.querySelector(".loading").style.transform =
          "translateY(calc(100% + 10px))"),
      400
    );
  }
}, getRandomArbitrary(50, 100));

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

document.addEventListener("DOMContentLoaded", function () {
  var offcanvasElement = document.getElementById("offcanvasNavbar");
  var bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement);

  var toggleButton = document.getElementById("navbarToggle");
  toggleButton.addEventListener("click", function () {
    bsOffcanvas.toggle();
  });
});
