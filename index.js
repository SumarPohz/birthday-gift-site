function toggleAudio() {
  var audio = document.getElementById("birthdayAudio");
  var playButton = document.getElementById("playButton");

  if (audio.paused) {
    audio.play();
    playButton.textContent = "Stop Birthday Music";
  } else {
    audio.pause();
    audio.currentTime = 0; // Rewind the audio to the beginning
    playButton.textContent = "Play Birthday Music";
  }
}
