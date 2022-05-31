export function loudBar() {
  const progressBar = document.querySelector('.progress-bar');
  setTimeout(() => {
    progressBar.style.opacity = 1;
    progressBar.style.width = (music.currentTime / music.duration) * 100 + '%';
  }, 2000);

  let currentMusicTime = document.querySelector('.start-music');
  setTimeout(() => {
    currentMusicTime.innerHTML = secondsToMinutes(Math.floor(music.currentTime));
  }, 1000);
}

