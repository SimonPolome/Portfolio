"use strict";

// Le slider //

const btnPrev = document.querySelector(".icon--prev");
const btnNext = document.querySelector(".icon--next");

btnNext.addEventListener("click", next);
btnPrev.addEventListener("click", prev);

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



// La navigation entre les pages //

const circleAv = document.querySelector(".circle--avant");
const circleAr = document.querySelector(".circle--arriere");
const pageChoix1 = document.querySelector(".page--choix1");
const pageAvionvie = document.querySelector(".page--avionvie");
const pageAvionmort = document.querySelector(".page--avionmort");


circleAv.addEventListener("click", () => {
    pageChoix1.classList.remove('page--show');
    pageAvionvie.classList.add('page--show');    
});

circleAr.addEventListener("click", () => {
    pageChoix1.classList.remove('page--show');
    pageAvionmort.classList.add('page--show');    
});

const commencer = document.querySelector(".btn--commencer");
const pageIntro = document.querySelector(".page--intro");
const continuer = document.querySelector(".btn--continuer");
const pageEquipe = document.querySelector(".page--equipechap");
const pageMort = document.querySelector(".page--mort");


commencer.addEventListener("click", () => {
    pageIntro.classList.remove('page--show');
    pageEquipe.classList.add('page--show'); 
});

continuer.addEventListener("click", () => {
    pageMort.classList.remove('page--show');
    pageChoix1.classList.add('page--show');    
});



// Les musiques //

let sfx = {
    bgsound: new Howl({
       src: [
          '../assets/audios/soundBg.mp3',
       ],
       loop: true,
       volume: 0.1,
    }),
    soundAeroport: new Howl({
        src: [
           '../assets/audios/soundAeroport.mp3'
        ]
     }),
     soundAvion: new Howl({
        src: [
           '../assets/audios/soundAvion.mp3'
        ]
     }),
     soundCrash: new Howl({
        src: [
           '../assets/audios/soundCrash.mp3'
        ]
     }),
     soundReveil: new Howl({
        src: [
           '../assets/audios/soundReveil.mp3'
        ]
     }),
}

const soundBtn = document.querySelector(".icon--sound");
const sound = document.querySelector(".sound");
const soundOff = document.querySelector(".sound--off");
let count = 0;

soundBtn.addEventListener("click", playPause);
function playPause(){
    if(count == 0){
        count = 1;
        sfx.bgsound.pause(); 
        sound.classList.add('sound--none');
        soundOff.classList.remove('sound--none');
                 
    }else{
        count = 0;        
        sfx.bgsound.play();  
        soundOff.classList.add('sound--none');
        sound.classList.remove('sound--none');   
    }
}

commencer.addEventListener("click", () => {
    sfx.bgsound.play();
});

document.querySelector(".icon--disk1").addEventListener("click", () => {
    if (!sfx.soundAeroport.playing()) {
        sfx.soundAeroport.play();
    }    
});
document.querySelectorAll('.icon--disk2').forEach(item => {
    item.addEventListener('click', event => {
        if (!sfx.soundAvion.playing()) {
            sfx.soundAvion.play();
        }    
    })
});
document.querySelectorAll('.icon--disk3').forEach(item => {
    item.addEventListener('click', event => {
        if (!sfx.soundCrash.playing()) {
            sfx.soundCrash.play();
        }    
    })
});
document.querySelector(".icon--disk4").addEventListener("click", () => {
    if (!sfx.soundReveil.playing()) {
        sfx.soundReveil.play();
    }    
});

// Les modals //

const modalBtn = document.querySelector(".icon--photo");
const modalBg = document.querySelector(".modal-bg");
const modalClose = document.querySelector(".icon--close");

modalBtn.addEventListener("click", () => {
    modalBg.classList.add('bg-active')
});

modalClose.addEventListener("click", () => {
    modalBg.classList.remove('bg-active')
});


// Les videos //


const video2 = document.querySelector(".video--2");
const video3 = document.querySelector(".video--3");
const video4 = document.querySelector(".video--4");



btnNext.addEventListener("click", startVideo);
circleAv.addEventListener("click", startVideo);

function startVideo() {
    if(document.querySelector(".page--video2").classList.contains('page--show')){
        video2.play();
    }else if(document.querySelector(".page--video3").classList.contains('page--show')){
        video3.play();
    }
}
