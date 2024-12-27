import createAudio from "./audio_tag";
import createSvg from "./svg_tag";
import playAudio from "../handlers/playAudio";
function renderDivItem(className, image, svgIcon, sound, pointClass, pauseIcon) {
    var div = document.createElement("div");
    div.classList.add(className);
    div.classList.add("main");
    div.style.backgroundImage = "url(".concat(image, ")");
    document.querySelector(".content-image").appendChild(div);
    createSvg(className, "svg", svgIcon, div);
    createSvg(className, "pause", pauseIcon, div);
    createAudio(pointClass, sound);
    playAudio(pointClass, image, pauseIcon);
}
export default renderDivItem;
