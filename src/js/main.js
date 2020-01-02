(function () {
    // DOM
    let menuBar = document.querySelector('#menuBar');
    let menuMobile = document.querySelector('#menuMobile');

    menuBar.addEventListener('click', function () {
        // add class css to button
        menuMobile.classList.toggle('mobile-show')
    }, false)
})()