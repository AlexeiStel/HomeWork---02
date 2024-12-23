import changeVolume from "./changeVolume";

export default function playAudio(className, bgimage, pauseIcon) {
  document.querySelector(className).addEventListener("click", function(e) {
    e.stopPropagation();
    stopAudio();   
    document.body.addEventListener("click", (e) => {
      if (!e.target.classList.contains("main") && !e.target.classList.contains("volume")   ) {
        stopAudio();
      }
    });

    if (!e.target.classList.contains("sound") ) {
      const audio = document.getElementById(e.target.classList[0]);
      audio.play();  
      changeVolume(className);         
      if (e.target.tagName === "IMG") {
        e.target.src = pauseIcon;
        e.target.classList.add("sound");
        e.target.closest(".main").classList.add("sound");

      } else {
        e.target.querySelector(".svg").src = pauseIcon;
        e.target.querySelector(".svg").classList.add("sound");
        e.target.classList.add("sound");
      } 
    } else {
      stopAudio();
      if (e.target.tagName === "IMG" && e.target.classList.contains("sound") ) {
        e.target.src = e.target.id;
        e.target.classList.remove("sound");        
        e.target.closest(".main").classList.remove("sound");

      } else {
        e.target.querySelector(".svg").src = e.target.querySelector(".svg").id;
        e.target.classList.remove("sound");
        e.target.querySelector(".svg").classList.remove("sound");
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
    svg.src = svg.id;
  });
}