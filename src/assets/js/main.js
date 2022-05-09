"use strict";

// Le slider //

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

// La navigation entre les pages //

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

const commencer = document.querySelector(".btn--commencer");
const pageintro = document.querySelector(".page--intro");
const continuer = document.querySelector(".btn--continuer");
const pageequipe = document.querySelector(".page--equipechap");
const pagemort = document.querySelector(".page--mort");


commencer.addEventListener("click", () => {
    pageintro.classList.remove('page--show');
    pageequipe.classList.add('page--show'); 
});

continuer.addEventListener("click", () => {
    pagemort.classList.remove('page--show');
    pagechoix.classList.add('page--show');    
});

// Les musiques //

var sfx = {
    bgsound: new Howl({
       src: [
          'http://simon-polome.ovh/projets/musiques/audio.mp3',
       ],
       loop: true,
       volume: 0.1,
    }),
    people: new Howl({
        src: [
           'http://simon-polome.ovh/projets/musiques/david.mp3'
        ]
     }),
     flight: new Howl({
        src: [
           'https://assets.codepen.io/21542/howler-demo-bg-music.mp3'
        ]
     })
}

const soundBtn = document.querySelector(".icon--sound");
const sound = document.querySelector(".sound");
const soundoff = document.querySelector(".sound--off");
const audio = document.querySelector(".audio");
var count = 0;

soundBtn.addEventListener("click", playPause)
function playPause(){
    if(count == 0){
        count = 1;
        sfx.bgsound.pause(); 
        sound.classList.add('sound--none');
        soundoff.classList.remove('sound--none');
                 
    }else{
        count = 0;        
        sfx.bgsound.play();  
        soundoff.classList.add('sound--none');
        sound.classList.remove('sound--none');   
    }
}

commencer.addEventListener("click", () => {
    sfx.bgsound.play();
});

const disk1 = document.querySelector(".icon--disk1");
const disk2 = document.querySelector(".icon--disk2");

disk1.addEventListener("click", () => {
    if (!sfx.people.playing()) {
        sfx.people.play();
    }    
});

disk2.addEventListener("click", () => {
    if (!sfx.flight.playing()) {
        sfx.flight.play();
    }    
});


// Les modals //

var modalBtn = document.querySelector(".icon--photo");
var modalBg = document.querySelector(".modal-bg");
var modalClose = document.querySelector(".icon--close");

modalBtn.addEventListener("click", () => {
    modalBg.classList.add('bg-active')
});

modalClose.addEventListener("click", () => {
    modalBg.classList.remove('bg-active')
});
