export default function volume(id) {
    var audioPlayer = document.getElementById(id.substring(1));
    var volumeControl = document.querySelector(".volume");
    volumeControl.addEventListener("input", function () {
        audioPlayer.volume = Number(volumeControl.value);
    });
}
