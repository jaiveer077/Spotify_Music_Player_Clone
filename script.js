console.log("Welcome to Spotify");

// Intializing the variables 
let songIndex = 0;
let audioElement = new Audio();
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');

let songs = [
    { songName: "Too Many Nights", filePath: "songs/Too Many Nights.mp3", coverPath: "images/cover2.jpg" },
    { songName: "FE!N", filePath: "songs/FE!N.mp3", coverPath: "images/cover.jpeg" },
    { songName: "Highest In The Room", filePath: "songs/HIGHEST IN THE ROOM.mp3", coverPath: "images/cover3.jpg" },
    { songName: "Goosebumps", filePath: "songs/goosebumps.mp3", coverPath: "images/cover4.jpg" },
    { songName: "BUTTERFLY EFFECT", filePath: "songs/BUTTERFLY EFFECT.mp3", coverPath: "images/cover5.jpg" },
    { songName: "Type Shit", filePath: "songs/Type Shit.mp3", coverPath: "images/cover6.jpg" },
    { songName: "MY EYES", filePath: "songs/MY EYES.mp3", coverPath: "images/cover.jpeg" },
    { songName: "Overdue", filePath: "songs/Overdue.mp3", coverPath: "images/cover7.jpg" },
    { songName: "SKELETONS", filePath: "songs/SKELETONS.mp3", coverPath: "images/cover8.jpg" },
];

// Loading the first song
audioElement.src = songs[songIndex].filePath;
masterSongName.innerText = songs[songIndex].songName;

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

audioElement.addEventListener('timeupdate', () => {
    const progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    });
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, index) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = index;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });
});

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = songs.length - 1;
    } else {
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});
