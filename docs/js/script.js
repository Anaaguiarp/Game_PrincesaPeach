document.querySelector('.gameOver').hidden = true;

const princesaPeach = document.querySelector('.princesaPeach');
const tubo = document.querySelector('.tubo');
const nuvens = document.querySelector('.nuvens');
const flor = document.querySelector('.flor');

const pulo = () => {

    princesaPeach.classList.add('pulo');

    setTimeout(() => {

        princesaPeach.classList.remove('pulo');

    }, 500);
}

const loop = setInterval(() => {

    const posicaoTubo = tubo.offsetLeft;
    const posicaoPeach = +window.getComputedStyle(princesaPeach).bottom.replace('px', '');
    const posicaoNuvens = nuvens.offsetLeft;
    const posicaoFlor = flor.offsetLeft;

    if(posicaoTubo <= 65 && posicaoTubo > 0 && posicaoPeach < 50){

        tubo.style.animation = 'none';
        tubo.style.left = `${posicaoTubo}px`;

        princesaPeach.style.animation = 'none';
        princesaPeach.style.bottom = `${posicaoPeach}px`;

        nuvens.style.animation = 'none';
        nuvens.style.left = `${posicaoNuvens}px`;

        flor.style.animation = 'none';
        flor.style.left = `${posicaoFlor}px`;

        princesaPeach.src = 'img/peach.png';
        princesaPeach.style.width = '40px';
        princesaPeach.style.marginLeft = '20px';

        if(princesaPeach.src.includes('img/peach.png')){
            document.querySelector('.gameOver').hidden = false;
            const gameOverImg = document.querySelector('.gameOver')
            gameOverImg.style.width = '200px';
            gameOverImg.style.position = 'absolute'; 
            gameOverImg.style.top = '50%'; 
            gameOverImg.style.left = '50%'; 
            gameOverImg.style.transform = 'translate(-50%, -50%)';
            gameOverImg.style.display = 'block';

        }
        
        clearInterval(loop);

    }

}, 10)

document.addEventListener('keydown', pulo);
document.addEventListener('touchstart', (event) => {
    event.preventDefault();
    pulo();
});