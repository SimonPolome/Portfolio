"use strict";

// Burger Menu
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

// Copyright
let answerDate = document.querySelector(".Date");
            let today = new Date();
            let annee = today.getFullYear();
            answerDate.innerHTML = annee;


// Animations GSAP
let tlHome = gsap.timeline({ defaults : { ease: "power4.inOut", duration:1.5}});
let tlSkills = gsap.timeline({
    defaults : { ease: "power4.inOut", duration:1.5},
    scrollTrigger: {        
        trigger: '.section--skills',
        start: "center bottom"
    }
});
let tlWorks1 = gsap.timeline({
    defaults : { ease: "power4.inOut", duration:1.5},
    scrollTrigger: {        
        trigger: '.works__project--1',
        start: "center bottom"
    }
});
let tlWorks2 = gsap.timeline({
    defaults : { ease: "power4.inOut", duration:1.5},
    scrollTrigger: {        
        trigger: '.works__project--2',
        start: "center bottom"
    }
});
let tlWorks3 = gsap.timeline({
    defaults : { ease: "power4.inOut", duration:1.5},
    scrollTrigger: {        
        trigger: '.works__project--3',
        start: "center bottom"
    }
});
let tlAbout = gsap.timeline({
    defaults : { ease: "power4.inOut", duration:1.5},
    scrollTrigger: {        
        trigger: '.section--about',
        start: "center bottom"
    }
});


tlHome.to('.title__home--small', {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0}, "=0")
.from('.illustration--home', {opacity: 0, scale: 1.1, duration:1}, "-=1.5")
.to('.title__home--big', {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0}, "-=1.3")
.to('.title--deco', {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0}, "-=1.3")
.to('.cta--home', {opacity: 1, duration: 1, y: 0}, "-=1")

tlSkills.to('.skills__card', {stagger: 0.1, opacity: 1, y: 0})

tlWorks1.to('.project__background--1', {opacity: 1, y: 0})
.to('.title--works1', {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0}, "-=1.5")
.to('.text--works1', {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0}, "-=1.3")
.to('.btn--more1', {opacity: 1, duration: 1, y: 0}, "-=1")

tlWorks2.to('.project__background--2', {opacity: 1, y: 0})
.to('.title--works2', {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0}, "-=1.5")
.to('.text--works2', {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0}, "-=1.3")
.to('.btn--more2', {opacity: 1, duration: 1, y: 0}, "-=1")

tlWorks3.to('.project__background--3', {opacity: 1, y: 0})
.to('.title--works3', {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0}, "-=1.5")
.to('.text--works3', {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0}, "-=1.3")
.to('.btn--more3', {opacity: 1, duration: 1, y: 0}, "-=1")


tlAbout.to('.title--about', {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0}, "=0")
.from('.illustration--me', {opacity: 0, scale: 1.1, duration:1}, "-=1.5")
.to('.text--about', {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0}, "-=1.3")
.to('.text--about2', {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0}, "-=1.3")
.to('.btn__about--contact', {opacity: 1, duration: 1, y: 0}, "-=1")
