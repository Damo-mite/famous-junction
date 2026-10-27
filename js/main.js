const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");
const header = document.querySelector(".site-header");
const toggleLabel = toggle.querySelector(".visually-hidden");

function setNav(open) {
  nav.classList.toggle("is-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggleLabel.textContent = open ? "Close navigation" : "Open navigation";
}

toggle.addEventListener("click", () => {
  setNav(!nav.classList.contains("is-open"));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setNav(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setNav(false);
  }
});

document.addEventListener("click", (event) => {
  if (!header.contains(event.target)) {
    setNav(false);
  }
});
