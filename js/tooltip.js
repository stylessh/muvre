const icon = document.querySelector(".icon");
const tooltip = document.querySelector("#tooltipOne");
const calcPosTooltip = (icon, tooltip) => {
  // icon coords
  const x = icon.offsetLeft;
  const y = icon.offsetTop;

  // tooltip width
  const tooltipHeight = tooltip.clientHeight;

  // calculating where we'll positionating the tooltip
  const leftPos = x + 50;
  const topPos = y / tooltipHeight - 20;

  tooltip.style.top = `${topPos}px`;
  tooltip.style.left = `${leftPos}px`;
};

calcPosTooltip(icon, tooltip);

icon.addEventListener("mouseenter", () => {
  if (!tooltip.classList.contains("fadeIn")) {
    tooltip.classList.remove("fadeOut");
    tooltip.classList.add("fadeIn");

    tooltip.style.display = "grid";
  }

  calcPosTooltip();
});

let timer;

icon.addEventListener("mouseleave", () => {
  if (tooltip.classList.contains("fadeIn")) {
    tooltip.classList.remove("fadeIn");
    tooltip.classList.add("fadeOut");
  }

  timer = setTimeout(() => {
    tooltip.style.display = "none";
  }, 700);
});

tooltip.addEventListener("mouseenter", () => {
  clearTimeout(timer);

  tooltip.classList.remove('fadeOut');

});

tooltip.addEventListener("mouseleave", () => {
  tooltip.classList.remove("fadeIn");
  tooltip.classList.add("fadeOut");

  setTimeout(() => {
    tooltip.style.display = "none";
  }, 600);
});

window.addEventListener("load", () => calcPosTooltip());

window.addEventListener("resize", () => calcPosTooltip());
