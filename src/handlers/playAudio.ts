import changeVolume from "./changeVolume";

export default function playAudio(className: string, bgimage: string, pauseIcon: string): void  {
  document.querySelector(className).addEventListener("click", function(ev) {
    const target = ev.target as HTMLElement;
    ev.stopPropagation();
    stopAudio();   
    document.body.addEventListener("click", (e) => {
      const ev_target = e.target as HTMLElement;
      if (!ev_target.classList.contains("main") && !ev_target.classList.contains("volume")   ) {
        stopAudio();
      }
    });

    if (!target.classList.contains("sound") ) {
      const audio = document.getElementById(target.classList[0]) as HTMLAudioElement;
      audio.play();  
      changeVolume(className);         

      if (target.tagName === "IMG") {
        const img = target as HTMLImageElement
        img.src = pauseIcon;
        img.classList.add("sound");
        img.closest(".main").classList.add("sound");

      } else {
        const svg = target.querySelector(".svg") as HTMLImageElement
        svg.src = pauseIcon;
        svg.classList.add("sound");
        target.classList.add("sound");
      } 
    } else {
      stopAudio();
      if (target.tagName === "IMG" && target.classList.contains("sound") ) {
        const img = target as HTMLImageElement

        img.src = target.id;
        img.classList.remove("sound");        
        img.closest(".main").classList.remove("sound");

      } else {
        const svg = target.querySelector(".svg") as HTMLImageElement

        svg.src = svg.id;
        target.classList.remove("sound");
        svg.classList.remove("sound");
      } 
    }

    document.body.style.backgroundImage = `url(${bgimage})`;
    
  });      
}

function stopAudio() {
  const audios = document.querySelectorAll("audio");        
  audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0; 
  });

  document.querySelectorAll(".svg").forEach(svg => {
    const starget = svg as HTMLImageElement;
    starget.src = svg.id;
  });
}