const square = document.querySelector('.block');
let randomFunc = (max, min = 0) => Math.floor(Math.random() * (max - min)) + min;

setInterval(() => {
    square.style.top = `${randomFunc(window.innerHeight - square.clientHeight)}px`
    square.style.left = `${randomFunc(window.innerWidth - square.clientWidth)}px`
    setInterval(() => square.style.background = `rgb(${randomFunc(255)},${randomFunc(255)},${randomFunc(255)}`, 500)
}, 1000)
