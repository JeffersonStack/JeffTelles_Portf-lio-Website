(function(doc) {
  "use strict";
  // Select DOM
  let menuBar = doc.querySelector(".mobile-btn");
  let menuMobile = doc.querySelector(".mobile-navbar");
  let openNavbar = false;

  menuBar.addEventListener("click", toggleMenu);

  function toggleMenu() {
    if (!openNavbar) {
      menuMobile.classList.add("show");
      openNavbar = true;
    } else {
      menuMobile.classList.remove("show");
      openNavbar = false;
    }
  }
})(document);
