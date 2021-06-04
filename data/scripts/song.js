var myAudio = document.getElementById("meditateAudio");
var isPlaying = false;

function togglePlay() {
  window.navigator.vibrate(100);
  if (isPlaying) {
    document.getElementById("meditate-btn").innerHTML = "Meditate";
    myAudio.pause();
  } else {
    document.getElementById("meditate-btn").innerHTML = "Pause";
    myAudio.play();
  }
}

myAudio.onplaying = function () {
  isPlaying = true;
};
myAudio.onpause = function () {
  isPlaying = false;
};