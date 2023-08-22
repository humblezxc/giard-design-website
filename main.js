import Masonry from 'masonry-layout';
import "./style.scss";
import "./pages/initial/index.scss";

const buttonToggle = document.querySelector('#toggle-button')
buttonToggle.addEventListener('click', function onClick() {
    const realizationContent = document.getElementById('gradient');
    let status = realizationContent.style.visibility;

    if (status === 'hidden') {
        buttonToggle.textContent = 'Rozwiń';
        realizationContent.style.visibility = 'visible';
    } else {
        buttonToggle.textContent = 'Zwiń';
        realizationContent.style.visibility = 'hidden';
    }
});

window.onload = () => {
    const grid = document.querySelector('.grid');

    const masonry = new Masonry(grid, {
        itemSelector: '.grid-item',
        gutter: '.gutter-sizer',
        percentPosition: true
    });
};
