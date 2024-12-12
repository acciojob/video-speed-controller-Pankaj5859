// Get elements
const video = document.querySelector('.viewer');
const toggleButton = document.querySelector('.toggle');
const volumeSlider = document.querySelector('.volume');
const speedSlider = document.querySelector('.playbackSpeed');
const skipBackButton = document.querySelector('.backward');
const skipForwardButton = document.querySelector('.forward');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');

// Play/pause toggle
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateToggleButton() {
  toggleButton.textContent = video.paused ? '►' : '❚ ❚';
}

// Update volume
function updateVolume() {
  video.volume = volumeSlider.value;
}

// Update playback speed
function updatePlaybackSpeed() {
  video.playbackRate = speedSlider.value;
}

// Skip video
function skip(time) {
  video.currentTime += time;
}

// Update progress bar
function updateProgressBar() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.width = `${percent}%`;
}

// Seek video
function seek(event) {
  const seekTime = (event.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = seekTime;
}

// Event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateToggleButton);
video.addEventListener('pause', updateToggleButton);
video.addEventListener('timeupdate', updateProgressBar);

toggleButton.addEventListener('click', togglePlay);
volumeSlider.addEventListener('input', updateVolume);
speedSlider.addEventListener('input', updatePlaybackSpeed);
skipBackButton.addEventListener('click', () => skip(-10));
skipForwardButton.addEventListener('click', () => skip(25));
progress.addEventListener('click', seek);
