const nav = document.querySelector(".nav-shell");
const navToggle = document.querySelector(".nav-toggle");
const navToggleLabel = navToggle?.querySelector(".sr-only");
const navLinks = document.querySelectorAll(".nav-links a, .nav-cta");
const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector(".form-status");

if (nav && navToggle) {
  const setMenuState = (isOpen) => {
    nav.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));

    if (navToggleLabel) {
      navToggleLabel.textContent = isOpen ? "Fermer le menu" : "Ouvrir le menu";
    }
  };

  navToggle.addEventListener("click", () => {
    setMenuState(!nav.classList.contains("is-open"));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setMenuState(false);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuState(false);
    }
  });
}

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.hidden = false;
    contactForm.reset();
    formStatus.focus?.();
  });
}
