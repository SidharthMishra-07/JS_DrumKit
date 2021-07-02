
window.addEventListener("keydown",playsound)
function playsound(e){
    
    const audio = document.querySelector(` audio[data-key= "${e.keyCode}" ] `);
    const key = document.querySelector(` .key[data-key= "${e.keyCode}" ] `);
    if(!audio) return;

    audio.currentTime=0;       //rewind to start (inbuilt function)
    audio.play();              //audio.play() is an inbuilt function in js. It play the audio in web

    //Other inbuilt functions are:
    //audio.pause() , audio.load(), audio.play()
    //Inbuilt Properties
    //audio.currentSrc  audio.currentTime  audio.duration

    key.classList.add('playing');                       //including the 'playing' CSS
    }
    const keys = document.querySelectorAll(".key");     //gets all .key classes
    keys.forEach((key)=>key.addEventListener('transitionend',removeTransition))  // runs a loop adds EventListener 'transitionend' to each key and then executes the removeTransition function

    //defining the function removeTransition
    function removeTransition(e){
        if(e.propertyName!== 'transform') return;
        this.classList.remove('playing');               //here 'this' points to key class
    }

