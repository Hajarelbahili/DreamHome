const navToggle = document.querySelector(".nav-toggle");
const navOverlay = document.querySelector(".nav-overlay");
const navLinks = document.querySelectorAll(".nav-links a");

function closeNavigation() {
  document.body.classList.remove("nav-open");
  navToggle.setAttribute("aria-expanded", "false");
}

navToggle.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navOverlay.addEventListener("click", closeNavigation);
navLinks.forEach((link) => link.addEventListener("click", closeNavigation));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeNavigation();
});
/*slider animation
const track = document.querySelector(".team-track");

track.innerHTML += track.innerHTML;

let position = 0;
const speed = 1;

function slide() {
  position += speed;

  if (position >= track.scrollWidth / 2) {
    position = 0;
  }

  track.style.transform = `translateX(-${position}px)`;

  requestAnimationFrame(slide);
}

slide();
*/
