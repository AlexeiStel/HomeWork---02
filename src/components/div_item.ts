import createAudio from "./audio_tag";
import createSvg from "./svg_tag";
import playAudio from "../handlers/playAudio";


function renderDivItem(className: string, image: string, svgIcon: string, sound: string, pointClass: string, pauseIcon: string): void {
  const div = document.createElement("div");
  div.classList.add(className);
  div.classList.add("main");
  div.style.backgroundImage = `url(${image})`;
  document.querySelector(".content-image").appendChild(div);
  
  createSvg(className, "svg", svgIcon, div);  
  createSvg(className, "pause", pauseIcon, div);  
  createAudio(pointClass, sound);
  playAudio(pointClass, image, pauseIcon);
}
  
export default renderDivItem;