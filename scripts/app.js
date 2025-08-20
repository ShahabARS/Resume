"use strict";

const skillsProgress = document.querySelectorAll(".skills-item__progress");
skillsProgress.forEach((item) => {
  let skillLevel = +item.getAttribute("skill-level");
  item.style.setProperty(
    "--skill-level",
    item.getAttribute("skill-level") + "%"
  );
  console.log(typeof skillLevel);
});
