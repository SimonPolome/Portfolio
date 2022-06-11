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
    }, 500);
}, 15);

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
       volume: 0.2
    }),
    soundAeroport: new Howl({
        src: [
           'assets/audios/soundAeroport.mp3'
        ],
        volume: 0.3,
        onend: function() {
            count1 = 0;
            iconAudio1.lastElementChild.classList.remove('icon__animation');     
         }
     }),
     soundAvion: new Howl({
        src: [
           'assets/audios/soundAvion.mp3'
        ],
        volume: 0.4,
        onend: function() {
            count2 = 0;
            iconAudio2.forEach(element => {
                element.lastElementChild.classList.remove('icon__animation');  
            });
         }
     }),
     soundCrash: new Howl({
        src: [
           'assets/audios/soundCrash.mp3'
        ],
        volume: 0.7,
        onend: function() {
            count3 = 0;
            iconAudio3.forEach(element => {
                element.lastElementChild.classList.remove('icon__animation');  
            });
         }
     }),
     soundReveil: new Howl({
        src: [
           'assets/audios/soundReveil.mp3'
        ],
        onend: function() {
            count4 = 0;
         }
     }),
     soundAvalanche: new Howl({
        src: [
           'assets/audios/soundAvalanche.mp3'
        ],
        volume: 0.8,
        onend: function() {
            count5 = 0;
         }
     }),
     soundRiviere: new Howl({
        src: [
           'assets/audios/soundRiviere.mp3'
        ],
        volume: 0.8,
        onend: function() {
            count6 = 0;
         }
     })
};


const sound = document.querySelector(".sound");
const soundOff = document.querySelector(".sound--off");
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


let iconAudio1 = document.querySelector(".icon--audio1");
let count1 = 0;
iconAudio1.addEventListener("click", () => {    
    if(count1 == 0){
        count1 = 1;
        sfx.soundAeroport.play();
        iconAudio1.lastElementChild.classList.add('icon__animation');     
    }else{
        count1 = 0;        
        sfx.soundAeroport.pause();
        iconAudio1.lastElementChild.classList.remove('icon__animation');         
    } 
});
let iconAudio2 = document.querySelectorAll(".icon--audio2");
let count2 = 0;
iconAudio2.forEach(item => {
    item.addEventListener('click', () => {
        if(count2 == 0){
            count2 = 1;
            sfx.soundAvion.play(); 
            item.lastElementChild.classList.add('icon__animation');            
        }else{
            count2 = 0;        
            sfx.soundAvion.pause(); 
            item.lastElementChild.classList.remove('icon__animation');  
        }   
    });
});
let iconAudio3 = document.querySelectorAll(".icon--audio3");
let count3 = 0;
iconAudio3.forEach(item => {
    item.addEventListener('click', () => {        
        if(count3 == 0){
            count3 = 1;
            sfx.soundCrash.play(); 
            item.lastElementChild.classList.add('icon__animation');          
        }else{
            count3 = 0;        
            sfx.soundCrash.pause(); 
            item.lastElementChild.classList.remove('icon__animation');
        }    
    });
});
let iconAudio4 = document.querySelector(".icon--audio4");
let count4 = 0;
iconAudio4.addEventListener("click", () => {    
    if(count4 == 0){
        count4 = 1;
        sfx.soundReveil.play();
        iconAudio4.lastElementChild.classList.add('icon__animation');           
    }else{
        count4 = 0;        
        sfx.soundReveil.pause(); 
        iconAudio4.lastElementChild.classList.remove('icon__animation');
    }  
});
let iconAudio5 = document.querySelector(".icon--audio5");
let count5 = 0;
iconAudio5.addEventListener("click", () => {    
    if(count5 == 0){
        count5 = 1;
        sfx.soundAvalanche.play();  
        iconAudio5.lastElementChild.classList.add('icon__animation');          
    }else{
        count5 = 0;        
        sfx.soundAvalanche.pause(); 
        iconAudio5.lastElementChild.classList.remove('icon__animation'); 
    }    
});
let iconAudio6 = document.querySelector(".icon--audio6");
let count6 = 0;
iconAudio6.addEventListener("click", () => {    
    if(count6 == 0){
        count6 = 1;
        sfx.soundRiviere.play();
        iconAudio6.lastElementChild.classList.add('icon__animation');              
    }else{
        count6 = 0;        
        sfx.soundRiviere.pause(); 
        iconAudio6.lastElementChild.classList.remove('icon__animation');   
    }  
});


// Les modals //

const modalBg = document.querySelectorAll(".modal-bg");
document.querySelectorAll('.icon--photo').forEach(item => {
    item.addEventListener('click', () => {
        modalBg.forEach(element => element.classList.add('active'));
    });
});
document.querySelectorAll('.icon--close').forEach(item => {
    item.addEventListener('click', () => {
        modalBg.forEach(element => element.classList.remove('active'));
    });
});

// Les videos //

const circle1= document.querySelector(".circle--1");
const circle2 = document.querySelector(".circle--2");

commencer.addEventListener("click", startVideo);
btnNext.addEventListener("click", startVideo);
circle1.addEventListener("click", startVideo);
circle2.addEventListener("click", startVideo);

const page = document.querySelectorAll(".page--video");

function startVideo() {
    for (let i = 0; i < page.length; i++) {
        if(page[i].classList.contains('page--show')){
            page[i].lastElementChild.play();
        }
    } 
}

// Copyright date //

let answerDate = document.querySelector(".Date");
let today = new Date();
let annee = today.getFullYear();
answerDate.innerHTML = annee;







