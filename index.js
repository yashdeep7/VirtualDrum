var n = document.querySelectorAll("button").length;

const sounds = {
    w: './sounds/tom-1.mp3',
    a: './sounds/tom-2.mp3',
    s: './sounds/tom-3.mp3',
    d: './sounds/tom-4.mp3',
    j: './sounds/crash.mp3',
    k: './sounds/kick-bass.mp3',
    l: './sounds/snare.mp3'
};

document.addEventListener("keydown", (event) => {
    const file = sounds[event.key]; 
    if (file) { 
        const audio = new Audio(file);
        audio.currentTime = 0;
        audio.play();
    }
});

