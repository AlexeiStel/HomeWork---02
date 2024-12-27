export default function volume(id: string): void {
  const audioPlayer = document.getElementById(id.substring(1)) as HTMLAudioElement;
  const volumeControl = document.querySelector(".volume") as HTMLInputElement;
    
  volumeControl.addEventListener("input", function(): void {
    audioPlayer.volume = Number(volumeControl.value);
  });
}