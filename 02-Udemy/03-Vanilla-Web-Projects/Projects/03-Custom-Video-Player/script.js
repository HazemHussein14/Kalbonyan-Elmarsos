const vidoe = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// play & pause video
function toggleVideoStatus() {
  if (vidoe.paused) {
    vidoe.play();
  } else {
    vidoe.pause();
  }
}

// update play/pause Icon
function updatePlayIcon() {
  if (vidoe.paused) {
    play.innerHTML = `<i class ="fa fa-play fa-2x"></i>`;
  } else {
    play.innerHTML = `<i class ="fa fa-pause fa-2x"></i>`;
  }
}

// update progress & timestamp
function updateProgress() {
  progress.value = (vidoe.currentTime / vidoe.duration) * 100;

  // get the minutes
  let mins = Math.floor(vidoe.currentTime / 60)
  if(mins < 10 ) {
    mins = '0'+ String(mins)
  }
  // get the seconds
  let secs = Math.floor(vidoe.currentTime % 60)
  if(secs < 10 ) {
    secs = '0'+ String(secs)
  }

  timestamp.innerHTML = `${mins}:${secs}`
}

// set video time to progress
function setVideoProgress() {
  vidoe.currentTime = (+progress.value * vidoe.duration) / 100 
}

// stop video
function stopVideo() {
  vidoe.currentTime = 0;
  vidoe.pause();
}

// Event listeners
vidoe.addEventListener("click", toggleVideoStatus);
vidoe.addEventListener("pause", updatePlayIcon);
vidoe.addEventListener("play", updatePlayIcon);
vidoe.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);

stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);
