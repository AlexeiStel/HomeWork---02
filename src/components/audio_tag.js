function createAudio(className, sound) {
  const audio = document.createElement("audio");
  audio.id = className.substr(1);
  audio.src = sound;
  document.querySelector(className).appendChild(audio);    
}

export default createAudio;