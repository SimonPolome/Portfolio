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
}
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
}


// Le loader //

const num = document.querySelector('.loader__num');
let counter = 0;

setInterval(() => {
    setTimeout(() => {
        if(counter==100){
            clearInterval();
        }else{
            counter+=1;
            num.textContent = counter + "%";
        }
    }, 100);
}, 25);

// La navigation entre les pages //

const commencer = document.querySelector(".btn--commencer");
const pageChoix1 = document.querySelector(".page--choix1");
const pageChoix2 = document.querySelector(".page--choix2");
const pageChoix3 = document.querySelector(".page--choix3");


commencer.addEventListener("click", () => {
    document.querySelector(".page--intro").classList.remove('page--show');
    document.querySelector(".page--video1").classList.add('page--show'); 
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


// Les sons //

let sfx = {
    bgsound: new Howl({
       src: [
          'assets/audios/soundBg.mp3',
       ],
       loop: true,
       volume: 0.1
    }),
    soundAeroport: new Howl({
        src: [
           'assets/audios/soundAeroport.mp3'
        ],
        volume: 0.3
     }),
     soundAvion: new Howl({
        src: [
           'assets/audios/soundAvion.mp3'
        ],
        volume: 0.4
     }),
     soundCrash: new Howl({
        src: [
           'assets/audios/soundCrash.mp3'
        ],
        volume: 0.8
     }),
     soundReveil: new Howl({
        src: [
           'assets/audios/soundReveil.mp3'
        ]
     }),
     soundAvalanche: new Howl({
        src: [
           'assets/audios/soundAvalanche.mp3'
        ],
        volume: 0.8
     }),
     soundRiviere: new Howl({
        src: [
           'assets/audios/soundRiviere.mp3'
        ],
        volume: 0.8
     })
};


const sound = document.querySelector(".sound");
const soundOff = document.querySelector(".sound--off");
let count = 0;
let countBg = 0;


commencer.addEventListener("click", () => {
    sfx.bgsound.play();
});

document.querySelector(".icon--sound").addEventListener("click", () => {
    if(countBg == 0){
        countBg = 1;
        sfx.bgsound.pause(); 
        sound.classList.add('sound--none');
        soundOff.classList.remove('sound--none');            
    }else{
        countBg = 0;        
        sfx.bgsound.play();  
        soundOff.classList.add('sound--none');
        sound.classList.remove('sound--none');   
    } 
});


document.querySelector(".icon--audio1").addEventListener("click", () => {
    if(count == 0){
        count = 1;
        sfx.soundAeroport.play();            
    }else{
        count = 0;        
        sfx.soundAeroport.pause();  
    } 
});
document.querySelectorAll('.icon--audio2').forEach(item => {
    item.addEventListener('click', () => {
        if(count == 0){
            count = 1;
            sfx.soundAvion.play();           
        }else{
            count = 0;        
            sfx.soundAvion.pause(); 
        }   
    });
});
document.querySelectorAll('.icon--audio3').forEach(item => {
    item.addEventListener('click', () => {
        if(count == 0){
            count = 1;
            sfx.soundCrash.play();           
        }else{
            count = 0;        
            sfx.soundCrash.pause(); 
        }    
    });
});
document.querySelector(".icon--audio4").addEventListener("click", () => {
    if(count == 0){
        count = 1;
        sfx.soundReveil.play();           
    }else{
        count = 0;        
        sfx.soundReveil.pause(); 
    }  
});
document.querySelector(".icon--audio5").addEventListener("click", () => {
    if(count == 0){
        count = 1;
        sfx.soundAvalanche.play();           
    }else{
        count = 0;        
        sfx.soundAvalanche.pause(); 
    }    
});
document.querySelector(".icon--audio6").addEventListener("click", () => {
    if(count == 0){
        count = 1;
        sfx.soundRiviere.play();           
    }else{
        count = 0;        
        sfx.soundRiviere.pause(); 
    }  
});

// Les modals //

const modalBg = document.querySelectorAll(".modal-bg");
document.querySelectorAll('.icon--photo').forEach(item => {
    item.addEventListener('click', () => {
        modalBg.forEach(element => (element).classList.add('bg-active'));
    });
});
document.querySelectorAll('.icon--close').forEach(item => {
    item.addEventListener('click', () => {
        modalBg.forEach(element => (element).classList.remove('bg-active'));
    });
});



// Les videos //

const video1 = document.querySelector(".video--1");
const video2 = document.querySelector(".video--2");
const video3 = document.querySelector(".video--3");
const video3Mort = document.querySelector(".video--3-mort");
const video4 = document.querySelector(".video--4");
const video4Mort = document.querySelector(".video--4-mort");
const video5 = document.querySelector(".video--5");
const video5Mort = document.querySelector(".video--5-mort");
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

commencer.addEventListener("click", startVideo);
btnNext.addEventListener("click", startVideo);
circle1.addEventListener("click", startVideo);
circle2.addEventListener("click", startVideo);

function startVideo() {
    if(document.querySelector(".page--video1").classList.contains('page--show')){
        video1.play();
    }else if(document.querySelector(".page--video2").classList.contains('page--show')){
        video2.play();
    }else if(document.querySelector(".page--video3").classList.contains('page--show')){
        video3.play();
    }else if(document.querySelector(".page--video3-mort").classList.contains('page--show')){
        video3Mort.play();
    }else if(document.querySelector(".page--video4").classList.contains('page--show')){
        video4.play();
    }else if(document.querySelector(".page--video4-mort").classList.contains('page--show')){
        video4Mort.play();
    }else if(document.querySelector(".page--video5").classList.contains('page--show')){
        video5.play();
    }else if(document.querySelector(".page--video5-mort").classList.contains('page--show')){
        video5Mort.play();
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

// Copyright date //

let answerDate = document.querySelector(".Date");
let today = new Date();
let annee = today.getFullYear();
answerDate.innerHTML = annee;







