// Music tracks
const musicTracks = [
  "track1.mp3",
  "track2.mp3",
  "track3.mp3",
  "track4.mp3",
  "track5.mp3"
];
let currentTrackIndex = 0;

const bgMusic = document.getElementById('bg-music');
const clickSound = document.getElementById('click-sound');

// Function to change and play next music track
function toggleMusicTrack() {
  currentTrackIndex = (currentTrackIndex + 1) % musicTracks.length;
  bgMusic.src = musicTracks[currentTrackIndex];
  bgMusic.play();
}

// Handle music button
musicToggle.addEventListener('click', () => {
  toggleMusicTrack();
});

// Click sound on button presses
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
});
