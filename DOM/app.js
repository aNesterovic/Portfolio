const block = document.querySelector('.block');
block.style.top = '0px';
block.style.left = '0px'

const maxWidth = block.offsetLeft;
const maxHeight = block.offsetTop;
console.log(maxWidth);

const overMax = () => {
    const newParg = document.createElement('p')
    newParg.innerText = 'БЭМС';
    newParg.style.fontSize = '40px';
    newParg.style.color = '#5a22d4'
    block.append(newParg);
    setTimeout(() => newParg.remove(), 2000)
}
const handler = e => {
    if (e.code === 'ArrowDown') {
        if (parseInt(block.style.top) + 10 <= maxHeight) {
            block.style.top = block.style.top ? `${parseInt(block.style.top) + 10}px` : '10px';
        } else {
            overMax();
            block.style.top = `${parseInt(block.style.top) - 10 * 2}px`
        }
    }
    if (e.code === 'ArrowUp') {
        if (parseInt(block.style.top) - 10 >= -maxHeight) {
            block.style.top = block.style.top ? `${parseInt(block.style.top) - 10}px` : '-10px';
        } else {
            overMax();
            block.style.top = `${parseInt(block.style.top) + 10 * 2}px`
        }
    }
    if (e.code === 'ArrowLeft') {
        if (parseInt(block.style.left) - 10 >= -maxWidth) {
            block.style.left = block.style.left ? `${parseInt(block.style.left) - 10}px` : '-10px';
        } else {
            overMax();
            block.style.left = `${parseInt(block.style.left) + 10 * 2}px`
        }
    }
    if (e.code === 'ArrowRight') {
        if (parseInt(block.style.left) + 10 <= maxWidth) {
            block.style.left = block.style.left ? `${parseInt(block.style.left) + 10}px` : '10px';
        } else {
            overMax();
            block.style.left = `${parseInt(block.style.left) - 10 * 2}px`
        }
    }
    if (e.code === 'Space') {
        block.style.transform = 'TranslateY(-10px)'
        setTimeout(() => block.style.transform += 'TranslateY(+10px)', 100)
    }
    if (e.code === 'ControlLeft' || e.code === 'ControlRight') {
        block.style.transform = 'Scale(1.25, 0.4)'
        setTimeout(() => block.style.transform = 'Scale(1, 1)', 800)
    }
};

document.onkeydown = handler;
