(function () {
    // DOM
    let menuBar = document.querySelector('#menuBar');

    menuBar.addEventListener('click', function (event) {
        event.preventDefault()
        console.log('Estou aqui!!!')
    }, false)
})()