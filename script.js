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
/*// Infinite Auto-Scrolling Carousel*/
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
/** Infinite Auto-Scrolling Carousel */
const cards = document.querySelectorAll(".galerie-card");

let current = 0;

function updateCarousel() {
  const total = cards.length;

  cards.forEach((card, index) => {
    let offset = index - current;

    if (offset < -total / 2) offset += total;
    if (offset > total / 2) offset -= total;

    card.style.zIndex = total - Math.abs(offset);

    if (offset === 0) {
      card.style.transform = "translate(-50%, -50%) scale(1.3)";
      card.style.opacity = "1";
    } else if (offset === -1) {
      card.style.transform = "translate(calc(-50% - 280px), -50%) scale(0.9)";
      card.style.opacity = "0.7";
    } else if (offset === 1) {
      card.style.transform = "translate(calc(-50% + 280px), -50%) scale(0.9)";
      card.style.opacity = "0.7";
    } else if (offset === -2) {
      card.style.transform = "translate(calc(-50% - 520px), -50%) scale(0.7)";
      card.style.opacity = "0.4";
    } else if (offset === 2) {
      card.style.transform = "translate(calc(-50% + 520px), -50%) scale(0.7)";
      card.style.opacity = "0.4";
    } else {
      card.style.transform = "translate(-50%, -50%) scale(0)";
      card.style.opacity = "0";
    }
  });
}

updateCarousel();

setInterval(() => {
  current = (current + 1) % cards.length;
  updateCarousel();
}, 3000);
