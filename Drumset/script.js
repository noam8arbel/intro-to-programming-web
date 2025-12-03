let crash = document.getElementById("crash")
crash.addEventListener('click', playCrash)

function playCrash() {
    let crashsound = new Audio("crash.mp3");
    crashsound.play()
}

let kick = document.getElementById("kick")
kick.addEventListener('click', playKick)

function playKick() {
    let kicksound = new Audio("kick-bass.mp3");
    kicksound.play()
}

let snare = document.getElementById("snare")
snare.addEventListener('click', playSnare)

function playSnare() {
    let snaresound = new Audio("snare.mp3");
    snaresound.play()
}

let tom1 = document.getElementById("tom1")
tom1.addEventListener('click', playTom1)

function playTom1() {
    let tom1sound = new Audio("tom-1.mp3");
    tom1sound.play()
}

let tom2 = document.getElementById("tom2")
tom2.addEventListener('click', playTom2)

function playTom2() {
    let tom2sound = new Audio("tom-2.mp3");
    tom2sound.play()
}

let tom3 = document.getElementById("tom3")
tom3.addEventListener('click', playTom3)

function playTom3() {
    let tom3sound = new Audio("tom-3.mp3");
    tom3sound.play()
}

let tom4 = document.getElementById("tom4")
tom4.addEventListener('click', playTom4)

function playTom4() {
    let tom4sound = new Audio("tom-4.mp3");
    tom4sound.play()
}