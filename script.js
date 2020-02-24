const video = document.getElementById("video");
const play = document.getElementById("play");
const timestamp = document.getElementById("timestamp");
const totalTimestamp = document.getElementById("total-timestamp");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const fullscreen = document.getElementById("fullscreen");

const speedLevels = document.querySelectorAll(".speed-level");

const volumeLevels = document.querySelectorAll(".volume-level");

const speedControls = document.querySelector(".speed-controls");

const volumeControls = document.querySelector(".volume-controls");

speedControls.addEventListener("click", function(e) {
  removeCurrentSpeed();
  e.target.classList.add("currentSpeed");
  const speedAttribute = event.target.getAttribute("dataSpeed");
  video.playbackRate = speedAttribute;
});

volumeControls.addEventListener("click", function(e) {
  removeCurrentVolume();
  e.target.classList.add("currentVolume");
  const volumeAttribute = event.target.getAttribute("volumeSpeed");
  console.log(volumeAttribute);
  video.volume = volumeAttribute;
});

function removeCurrentSpeed() {
  for (let i = 0; i < speedLevels.length; i++) {
    speedLevels[i].classList.remove("currentSpeed");
  }
}

function removeCurrentVolume() {
  for (let i = 0; i < volumeLevels.length; i++) {
    volumeLevels[i].classList.remove("currentVolume");
  }
}

// for (let i = 0; i < speedLevels.length; i++) {
//   speedLevels[i].addEventListener("click", function(e) {
//     const attribute = event.target.getAttribute("dataSpeed");
//     console.log(attribute);
//     video.playbackRate = attribute;
//   });
// }

// video.onloadedmetadata = function() {
//   console.log("metadata loaded!");
//   console.log(video.duration);
// };

// onloadedmetadata();
// Play & Pause video

function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function totalDuration() {
  let mins = Math.floor(video.duration / 60);
  if (mins < 10) {
    mins = "0" + String(mins);
  }

  // Get seconds

  let secs = Math.floor(video.duration % 60);
  if (secs < 10) {
    secs = "0" + String(secs);
  }

  totalTimestamp.innerText = `${mins}:${secs}`;
}

// update play/pause icon

function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

// Stop video

function stopVideo() {
  console.log("stopvideo");
  video.currentTime = 0;
  video.pause();
}

// update progress & timestamp
function updateProgress() {
  //   console.log("updateprogress");
  value = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${value}%`;

  // Get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = "0" + String(mins);
  }

  // Get seconds

  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = "0" + String(secs);
  }

  timestamp.innerText = `${mins}:${secs}`;
}

// set video time to progress

function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

// console.log(video.duration);

// Event Listeners

video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);
play.addEventListener("click", toggleVideoStatus);
// stop.addEventListener("click", stopVideo);
progress.addEventListener("change", setVideoProgress);

window.addEventListener("load", function() {
  totalDuration();
});

fullscreen.addEventListener("click", function() {
  fullscreen.webkitRequestFullscreen();
});
