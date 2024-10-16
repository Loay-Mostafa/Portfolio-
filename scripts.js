document.addEventListener("DOMContentLoaded", function () {
  const skillBars = document.querySelectorAll(".skill-progress div");
  skillBars.forEach((bar) => {
    bar.style.setProperty("--skill-width", bar.dataset.width);
  });

  const smoothScroll = (target) => {
    document.querySelector(target).scrollIntoView({
      behavior: "smooth",
    });
  };

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      smoothScroll(this.getAttribute("href"));
    });
  });

  const exploreButton = document.querySelector(".button");
  exploreButton.addEventListener("click", function () {
    smoothScroll("#experience");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.createElement("div");
  cursor.classList.add("cursor");
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });

  document.addEventListener("click", () => {
    cursor.style.transform = "scale(1.2)";
    setTimeout(() => {
      cursor.style.transform = "translate(-50%, -50%)";
    }, 100);
  });
});

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const posVideo = document.querySelector(".pos-video");

posVideo.addEventListener("mouseenter", () => {
  posVideo.play();
});

posVideo.addEventListener("mouseleave", () => {
  posVideo.pause();
});
