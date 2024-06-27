import home from "./home";
import about from "./about";
import menu from "./menu";
import './style.css';

const index = (function index() {
    home();
    const content = document.querySelector('#content');
    const homeBtn = document.querySelector('#home');
    const menuBtn = document.querySelector('#menu');
    const aboutBtn = document.querySelector('#about');

    homeBtn.addEventListener('click', () => {
        content.textContent = "";
        home();
    });
    menuBtn.addEventListener('click', () => {
        content.textContent = "";
        menu();
    });
    aboutBtn.addEventListener('click', () => {
        content.textContent = "";
        about();
    });

})();