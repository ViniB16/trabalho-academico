const slides = document.querySelectorAll('.slide');
const fala = document.getElementById('fala');
const contador = document.getElementById('contador');
const barra = document.getElementById('barra');
const anterior = document.getElementById('anterior');
const proximo = document.getElementById('proximo');
const mascoteBox = document.getElementById('mascoteBox');

let atual = 0;

// Mascote em teste (v.3 - melhorar quando possível)
const slidesComMascote = [1, 2, 4, 6, 9];

function mostrar(i) {
    atual = Math.max(0, Math.min(i, slides.length - 1));

    const mostrarMascote = slidesComMascote.includes(atual);

    mascoteBox.classList.toggle('escondido', !mostrarMascote);

    slides.forEach((s, n) => {
        s.classList.toggle('ativo', n === atual);
    });

    slides[atual].scrollTop = 0;

    contador.textContent =
        String(atual + 1).padStart(2, '0') +
        ' / ' +
        String(slides.length).padStart(2, '0');

    barra.style.width =
        ((atual + 1) / slides.length * 100) + '%';

    anterior.disabled = atual === 0;
    proximo.disabled = atual === slides.length - 1;

    fala.style.animation = 'none';
    void fala.offsetWidth;

    fala.textContent = slides[atual].dataset.fala;
    fala.style.animation = 'entrar .45s ease';
}

anterior.onclick = () => mostrar(atual - 1);

proximo.onclick = () => mostrar(atual + 1);

document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        mostrar(atual + 1);
    }

    if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        mostrar(atual - 1);
    }
});

mostrar(0);