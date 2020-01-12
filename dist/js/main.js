(function(doc) {
  "use strict";
  // Select DOM
  let menuBtn = doc.querySelector(".menu-btn");
  let menuMobile = doc.querySelector(".mobile-navbar");
  let openNavbar = false;

  menuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    if (!openNavbar) {
      menuBtn.classList.add("close");
      menuMobile.classList.add("show");
      openNavbar = true;
    } else {
      menuBtn.classList.remove("close");
      menuMobile.classList.remove("show");
      openNavbar = false;
    }
  }
})(document);
