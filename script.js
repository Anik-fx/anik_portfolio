const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}


// Reveal animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

document.querySelectorAll(".reveal").forEach((el) => {
  observer.observe(el);
});


// Cursor glow
const glow = document.querySelector(".cursor-glow");

if (glow) {
  window.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });
}


// Mobile menu
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("mobile-open");
  });
}