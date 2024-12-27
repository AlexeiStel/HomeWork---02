function createVolume(): void {
  const volume = document.createElement("input");
  volume.type = "range";
  volume.min = "0";
  volume.max = "1";
  volume.step = "0.01";
  volume.value = "0.5";
  volume.classList.add("volume");
  document.querySelector(".content").appendChild(volume);    
}

export default createVolume;