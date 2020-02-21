const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');



// Play & Pause video

function toggleVideoStatus() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// update play/pause icon

function updatePlayIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
    }
}

// Another Approach
// function updatePlayIcon() {
//     const playIcon = play.querySelector('#play .fa')
//     if (playIcon.classList.contains('fa-play')) {
//         playIcon.classList.remove('fa-play')
//         playIcon.classList.add('fa-pause');
//     } else {
//         playIcon.classList.remove('fa-pause')
//         playIcon.classList.add('fa-play')
//     }
// }

// update progress & timestamp

function updateProgress() {
    return true;
}

// set video time to press 

function setVideoProgress() {
    return true;
}

// Stop video

function stopVideo() {
    return true;
}














// Event Listeners

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeUpdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo)

progress.addEventListener('change', setVideoProgress)