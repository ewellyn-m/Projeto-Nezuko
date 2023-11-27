const nezuko = document.querySelector('.nezuko');
const pipe = document.querySelector('.pipe');

const jump = () => {
    nezuko.classList.add('jump');

    setTimeout(() => {

        nezuko.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const nezukoPosition = +window.getComputedStyle(nezuko).bottom.replace('px', '');
    
    if (pipePosition <= 110 && pipePosition > 0 && nezukoPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        nezuko.style.animation = 'none';
        nezuko.style.bottom = `${nezukoPosition}px`;

        nezuko.src = './src/imagens/gameover.png';
        nezuko.style.width = '75px'
        nezuko.style.marginLeft = '50px'

        clearInterval(loop);

    }

}, 10);

document.addEventListener('keydown', jump);