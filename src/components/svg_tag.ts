function createSvg(className: string, classSvg: string, svgIcon: string, div: HTMLElement) {
  const svgContainer = document.createElement("img");
  svgContainer.src = svgIcon;
  svgContainer.id = svgIcon;
  svgContainer.classList.add(className);
  svgContainer.classList.add(classSvg);
  div.appendChild(svgContainer);
}

export default createSvg;