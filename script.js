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
    return true;
}

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