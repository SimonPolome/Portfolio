"use strict";

const btnPrev = document.querySelector(".icon--prev");
const btnNext = document.querySelector(".icon--next");

btnNext.addEventListener("click", next)
btnPrev.addEventListener("click", prev)

function next(){
    let elShow = document.querySelector(".page--show");
    let elNext = elShow.nextElementSibling;
    elShow.classList.remove("page--show");
    if(elNext){
        elNext.classList.add("page--show");
    }else{
        let elFirst = elShow.parentNode.firstElementChild;
        elFirst.classList.add("page--show");
    }    
};
function prev(){
    let elShow = document.querySelector(".page--show");
    let elPrev = elShow.previousElementSibling;
    elShow.classList.remove("page--show");
    if(elPrev){
        elPrev.classList.add("page--show");
    }else{
        let elLast = elShow.parentNode.firstElementChild;
        elLast.classList.add("page--show");
    }    
};


const circleav = document.querySelector(".circle--avant");
const circlear = document.querySelector(".circle--arriere");
const pagechoix = document.querySelector(".page--choix");
const pageavionvie = document.querySelector(".page--avionvie");
const pageavionmort = document.querySelector(".page--avionmort");


circleav.addEventListener("click", () => {
    pagechoix.classList.remove('page--show');
    pageavionvie.classList.add('page--show');    
});

circlear.addEventListener("click", () => {
    pagechoix.classList.remove('page--show');
    pageavionmort.classList.add('page--show');    
});


const recommencer = document.querySelector(".btn--recommencer");
const pageequipe = document.querySelector(".page--equipechap");
const pagemort = document.querySelector(".page--mort");

recommencer.addEventListener("click", () => {
    pagemort.classList.remove('page--show');
    pageequipe.classList.add('page--show');    
});

