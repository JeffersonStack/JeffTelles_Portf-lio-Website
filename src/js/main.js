(function () {
    // DOM
    let menuBar = document.querySelector('#menuBar');
    let menuMobile = document.querySelector('#menuMobile');
    let menuLinks = document.querySelector('.mobile-links');

    menuBar.addEventListener('click', function () {
        // add class css to button
        menuMobile.classList.toggle('mobile-show');
        menuLinks.classList.toggle('show-links');
    }, false)
})()