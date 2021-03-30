let note = document.querySelector('.nowPlaying')
let keyElement = document.querySelectorAll('.keyContainer div');
let hints = document.querySelectorAll('span');

window.addEventListener('keydown' , function (e){
    let keyCode1 = document.querySelector(`.keyContainer div[data-key="${e.keyCode}"]`);
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if (!keyCode1) return;
    
    keyCode1.classList.add('playing')
    note.innerHTML = keyCode1.getAttribute('data-not')
    audio.currentTime = 0;
    audio.play();
})

keyElement.forEach(e => e.addEventListener('transitionend' , removePlaying))



function removePlaying(){
    this.classList.remove('playing')
}

hints.forEach(function(e,i){
    console.log(e,i);
    e.style = `transition-delay : ${i*30}ms`
})




