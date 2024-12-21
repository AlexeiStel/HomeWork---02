import changeVolume from "./changeVolume";

export default function playAudio(className, bgimage, pauseIcon) {
  document.querySelector(className).addEventListener("click", function(e) {
    e.stopPropagation();
    stopAudio();   
    document.body.addEventListener("click", (e) => {
      if (!e.target.classList.contains("main")) {
        stopAudio();
      }
    });

    document.body.style.backgroundImage = `url(${bgimage})`;
    if (e.target.tagName === "IMG") {
      e.target.src = pauseIcon;
    } else {
      e.target.querySelector(".svg").src = pauseIcon;
    } 
    const audio = document.getElementById(e.target.classList[0]);
    audio.play();  
    changeVolume(className);        
  });      
}

function stopAudio() {
  const audios = document.querySelectorAll("audio");        
  audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0; 
  });

  document.querySelectorAll(".svg").forEach(svg => {
    svg.src = svg.id;
  });
}