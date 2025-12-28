        // const music = document.getElementById('birthdayMusic');
        // const musicToggle = document.getElementById('musicToggle');
        // let isPlaying = false;

        // musicToggle.addEventListener('click', () => {
        //     if (!isPlaying) {
        //         music.pause();
        //         musicToggle.textContent = '🔇';
        //     } else {
        //         music.play();
        //         musicToggle.textContent = '🔊';
        //     }
        //     isPlaying = !isPlaying;
        // });

        const music = document.getElementById('birthdayMusic');
const toggle = document.getElementById('musicToggle');

// restore state
let isPlaying = localStorage.getItem('musicPlaying') === 'true';
let savedTime = localStorage.getItem('musicTime');

if (savedTime) {
  music.currentTime = savedTime;
}

if (isPlaying) {
  music.play().catch(() => {});
  toggle.textContent = '🔊';
}

toggle.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    toggle.textContent = '🔊';
    localStorage.setItem('musicPlaying', 'true');
  } else {
    music.pause();
    toggle.textContent = '🔇';
    localStorage.setItem('musicPlaying', 'false');
  }
});

// save time continuously
setInterval(() => {
  localStorage.setItem('musicTime', music.currentTime);
}, 500);