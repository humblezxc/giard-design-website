import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Masonry from 'masonry-layout';
const buttonToggle = document.querySelector('#toggle-button');
const navHider = document.querySelector('#nav-tablet');
const navElements = document.querySelectorAll('.header__link_tablet');

Fancybox.bind('[data-fancybox="gallery"]', {
});
navHider.addEventListener('click', function onClickHide() {
    navElements.forEach(element => {
        console.log(element.style.display);
        if (element.style.display === 'none' || element.style.display === '') {
            element.style.display = 'flex';
        } else {
            element.style.display = 'none';
        }
    });
});
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
