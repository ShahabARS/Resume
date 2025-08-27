"use strict";

const progressBars = document.querySelectorAll(".skills-item__progress");
const portfolioLinks = document.querySelectorAll(".portfolio-item__link")[3];

progressBars.forEach((item) => {
  const level = parseInt(item.getAttribute("skill-level"), 10);
  item.style.setProperty("--skill-level", level + "%");
  if (level < 30) {
    item.style.setProperty("--progress-color", "#be0000");
  } else {
    item.style.setProperty("--progress-color", "#cbe601");
  }
});

portfolioLinks.addEventListener("click", (e) => {
  e.preventDefault();
});
