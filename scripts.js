const hamburger = document.getElementById('menu-btn');
const nav = document.querySelector('.navbar');
const menuLinks = document.querySelectorAll('.navbar a');

function fecharMenu() {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
}

// Abrir / fechar menu
hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

// Fechar ao clicar num link
menuLinks.forEach(link => {
    link.addEventListener('click', fecharMenu);
});

// Fechar ao clicar fora
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        fecharMenu();
    }
});

// Fechar ao dar scroll
window.addEventListener('scroll', () => {
    if (nav.classList.contains('active')) {
        fecharMenu();
    }
});