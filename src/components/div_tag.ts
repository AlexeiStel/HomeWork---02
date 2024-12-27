export default function createDiv(className: string, title: string, block: HTMLElement): void {
  const div = document.createElement("div");
  div.classList.add(className);
  div.textContent = title;
  block.appendChild(div);
}