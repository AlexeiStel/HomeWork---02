export default function volume(id) {
  const audioPlayer = document.getElementById(id.substr(1));
  const volumeControl = document.querySelector(".volume");
    
  volumeControl.addEventListener("input", function() {
    audioPlayer.volume = volumeControl.value;
  });
}