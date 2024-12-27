function createAudio(className, sound) {
    var audio = document.createElement("audio");
    audio.id = className.substring(1);
    audio.src = sound;
    document.querySelector(className).appendChild(audio);
}
export default createAudio;
