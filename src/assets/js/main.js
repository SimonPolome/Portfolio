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

const commencer = document.querySelector(".btn--commencer");
const pageChoix1 = document.querySelector(".page--choix1");
const pageChoix2 = document.querySelector(".page--choix2");
const pageChoix3 = document.querySelector(".page--choix3");


commencer.addEventListener("click", () => {
    document.querySelector(".page--intro").classList.remove('page--show');
    document.querySelector(".page--image1").classList.add('page--show'); 
});


document.querySelector(".circle--avant").addEventListener("click", () => {
    pageChoix1.classList.remove('page--show');
    document.querySelector(".page--avionvie").classList.add('page--show');    
});
document.querySelector(".circle--arriere").addEventListener("click", () => {
    pageChoix1.classList.remove('page--show');
    document.querySelector(".page--avionmort").classList.add('page--show');    
});
document.querySelector(".btn--recommcencer1").addEventListener("click", () => {
    document.querySelector(".page--mort1").classList.remove('page--show');
    pageChoix1.classList.add('page--show');    
});


document.querySelector(".circle--oui").addEventListener("click", () => {
    pageChoix2.classList.remove('page--show');
    document.querySelector(".page--survievie").classList.add('page--show');    
});
document.querySelector(".circle--non").addEventListener("click", () => {
    pageChoix2.classList.remove('page--show');
    document.querySelector(".page--surviemort").classList.add('page--show');    
});
document.querySelector(".btn--recommcencer2").addEventListener("click", () => {
    document.querySelector(".page--mort2").classList.remove('page--show');
    pageChoix2.classList.add('page--show');    
});


document.querySelector(".circle--continuer").addEventListener("click", () => {
    pageChoix3.classList.remove('page--show');
    document.querySelector(".page--sauvetagevie").classList.add('page--show');    
});
document.querySelector(".circle--retourner").addEventListener("click", () => {
    pageChoix3.classList.remove('page--show');
    document.querySelector(".page--sauvetagemort").classList.add('page--show');    
});
document.querySelector(".btn--recommcencer3").addEventListener("click", () => {
    document.querySelector(".page--mort3").classList.remove('page--show');
    pageChoix3.classList.add('page--show');    
});


// Les musiques //

let sfx = {
    bgsound: new Howl({
       src: [
          'assets/audios/soundBg.mp3',
       ],
       loop: true,
       volume: 0.1,
    }),
    soundAeroport: new Howl({
        src: [
           'assets/audios/soundAeroport.mp3'
        ]
     }),
     soundAvion: new Howl({
        src: [
           'assets/audios/soundAvion.mp3'
        ]
     }),
     soundCrash: new Howl({
        src: [
           'assets/audios/soundCrash.mp3'
        ]
     }),
     soundReveil: new Howl({
        src: [
           'assets/audios/soundReveil.mp3'
        ]
     }),
     soundAvalanche: new Howl({
        src: [
           'assets/audios/soundAvalanche.mp3'
        ]
     }),
     soundRiviere: new Howl({
        src: [
           'assets/audios/soundRiviere.mp3'
        ]
     })
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
        sfx.soundAeroport.stop(); 
        sfx.soundAvion.stop();
        sfx.soundCrash.stop();
        sfx.soundReveil.stop();
        sfx.soundAvalanche.stop();
        sfx.soundRiviere.stop();
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
document.querySelector(".icon--disk5").addEventListener("click", () => {
    if (!sfx.soundAvalanche.playing()) {
        sfx.soundAvalanche.play();
    }    
});
document.querySelector(".icon--disk6").addEventListener("click", () => {
    if (!sfx.soundRiviere.playing()) {
        sfx.soundRiviere.play();
    }    
});

// Les modals //

document.querySelectorAll('.icon--photo').forEach(item => {
    item.addEventListener('click', event => {
        document.querySelector(".modal-bg1").classList.add('bg-active');
        document.querySelector(".modal-bg2").classList.add('bg-active');
        document.querySelector(".modal-bg3").classList.add('bg-active');
        document.querySelector(".modal-bg4").classList.add('bg-active');
    })
});
document.querySelectorAll('.icon--close').forEach(item => {
    item.addEventListener('click', event => {
        document.querySelector(".modal-bg1").classList.remove('bg-active')
        document.querySelector(".modal-bg2").classList.remove('bg-active')
        document.querySelector(".modal-bg3").classList.remove('bg-active');
        document.querySelector(".modal-bg4").classList.remove('bg-active');
    })
});



// Les videos //


const video2 = document.querySelector(".video--2");
const video3 = document.querySelector(".video--3");
const video4 = document.querySelector(".video--4");
const video5 = document.querySelector(".video--5");
const video6 = document.querySelector(".video--6");
const video7 = document.querySelector(".video--7");
const video8 = document.querySelector(".video--8");
const video9 = document.querySelector(".video--9");
const video10 = document.querySelector(".video--10");
const video11 = document.querySelector(".video--11");
const video12 = document.querySelector(".video--12");
const video13 = document.querySelector(".video--13");
const video14 = document.querySelector(".video--14");
const video15 = document.querySelector(".video--15");
const video16 = document.querySelector(".video--16");
const video17 = document.querySelector(".video--17");
const video18 = document.querySelector(".video--18");
const video19 = document.querySelector(".video--19");
const video20 = document.querySelector(".video--20");
const video21 = document.querySelector(".video--21");
const video22 = document.querySelector(".video--22");
const videoMort1 = document.querySelector(".video--mort1");
const videoMort2 = document.querySelector(".video--mort2");
const videoMort3 = document.querySelector(".video--mort3");




const circle1= document.querySelector(".circle--1");
const circle2 = document.querySelector(".circle--2");

btnNext.addEventListener("click", startVideo);
circle1.addEventListener("click", startVideo);
circle2.addEventListener("click", startVideo);


function startVideo() {
    if(document.querySelector(".page--video2").classList.contains('page--show')){
        video2.play();
    }else if(document.querySelector(".page--video3").classList.contains('page--show')){
        video3.play();
    }else if(document.querySelector(".page--video4").classList.contains('page--show')){
        video4.play();
    }else if(document.querySelector(".page--video5").classList.contains('page--show')){
        video5.play();
    }else if(document.querySelector(".page--video6").classList.contains('page--show')){
        video6.play();
    }else if(document.querySelector(".page--video7").classList.contains('page--show')){
        video7.play();
    }else if(document.querySelector(".page--video8").classList.contains('page--show')){
        video8.play();
    }else if(document.querySelector(".page--video9").classList.contains('page--show')){
        video9.play();
    }else if(document.querySelector(".page--video10").classList.contains('page--show')){
        video10.play();
    }else if(document.querySelector(".page--video11").classList.contains('page--show')){
        video11.play();
    }else if(document.querySelector(".page--video12").classList.contains('page--show')){
        video12.play();
    }else if(document.querySelector(".page--video13").classList.contains('page--show')){
        video13.play();
    }else if(document.querySelector(".page--video14").classList.contains('page--show')){
        video14.play();
    }else if(document.querySelector(".page--video15").classList.contains('page--show')){
        video15.play();
    }else if(document.querySelector(".page--video16").classList.contains('page--show')){
        video16.play();
    }else if(document.querySelector(".page--video17").classList.contains('page--show')){
        video17.play();
    }else if(document.querySelector(".page--video18").classList.contains('page--show')){
        video18.play();
    }else if(document.querySelector(".page--video19").classList.contains('page--show')){
        video19.play();
    }else if(document.querySelector(".page--video20").classList.contains('page--show')){
        video20.play();
    }else if(document.querySelector(".page--video21").classList.contains('page--show')){
        video21.play();
    }else if(document.querySelector(".page--video22").classList.contains('page--show')){
        video22.play();
    }else if(document.querySelector(".page--mort1").classList.contains('page--show')){
        videoMort1.play();
    }else if(document.querySelector(".page--mort2").classList.contains('page--show')){
        videoMort2.play();
    }else if(document.querySelector(".page--mort3").classList.contains('page--show')){
        videoMort3.play();
    }
    
    
    
}
