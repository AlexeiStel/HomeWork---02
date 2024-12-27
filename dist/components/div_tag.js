export default function createDiv(className, title, block) {
    var div = document.createElement("div");
    div.classList.add(className);
    div.textContent = title;
    block.appendChild(div);
}
