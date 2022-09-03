"use strict";


const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");
const animation1 = document.querySelector(".menu__line--top");
const animation2 = document.querySelector(".menu__line--bottom");
const main = document.querySelector("main");

menu.addEventListener("click", mobileMenu);

function mobileMenu() {
    menu.classList.toggle("active");
    nav.classList.toggle("active");
    animation1.classList.toggle("active");
    animation2.classList.toggle("active");
    main.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav__link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    menu.classList.remove("active");
    nav.classList.remove("active");
    animation1.classList.remove("active");
    animation2.classList.remove("active");
    main.classList.remove("active");
}


let answerDate = document.querySelector(".Date");
            let today = new Date();
            let annee = today.getFullYear();
            answerDate.innerHTML = annee;


