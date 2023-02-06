const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-list");
const openResume = document.querySelector(".open-resume-button");
const closeResume = document.querySelector(".close-resume-button");
const resumeContainer = document.querySelector(".resume-container");
const resume = document.querySelector(".resume");


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-item").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

openResume.addEventListener("click", () => {
  resumeContainer.classList.add("resume-visible");
  document.body.classList.add("overflow-hidden");
});

closeResume.addEventListener("click", () => {
  resumeContainer.classList.remove("resume-visible");
  document.body.classList.remove("overflow-hidden");
  openResume.blur();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeResume.click();
  }
});