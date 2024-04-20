var audio = document.getElementById("myAudio");
var currentTime;

audio.addEventListener('timeupdate', function() {
  currentTime = audio.currentTime;
  localStorage.setItem("currentTime", currentTime);
});

window.onload = function() {
  audio.currentTime = localStorage.getItem("currentTime") || 0;
  audio.play();
  audio.volume = 0.2; // Set volume to 20%
}