(function(doc) {
  "use strict";
  // Select DOM
  let menuBtn = doc.querySelector(".menu-btn");
  let menuMobile = doc.querySelector(".mobile-navbar");
  let layoutLeft = doc.querySelector("#is-layout-left");
  let openNavbar = false;

  menuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    if (!openNavbar) {
      menuBtn.classList.add("close");
      menuMobile.classList.add("show");
      layoutLeft.classList.add("layout-left");
      openNavbar = true;
    } else {
      menuBtn.classList.remove("close");
      menuMobile.classList.remove("show");
      layoutLeft.classList.remove("layout-left");
      openNavbar = false;
    }
  }
})(document);
