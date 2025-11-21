document.addEventListener("DOMContentLoaded", function () {
  // --- Lógica de Idioma ---

  const userLang = navigator.language.startsWith("es") ? "es" : "en";

  function loadLanguage(lang) {
    const titleElement = document.querySelector("title[data-key]");
    if (titleElement) {
      const titleKey = titleElement.getAttribute("data-key");
      if (translations[lang] && translations[lang][titleKey]) {
        document.title = translations[lang][titleKey];
      }
    }

    document.querySelectorAll("[data-key]").forEach((element) => {
      const key = element.getAttribute("data-key");

      if (translations[lang] && translations[lang][key]) {
        element.innerHTML = translations[lang][key];
      }
    });
  }

  loadLanguage(userLang);

  // --- Lógica del Menú Hamburguesa ---

  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links li a");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });

  // --- Lógica de la Flecha de Scroll

  const sections = document.querySelectorAll("section");
  const scrollArrow = document.getElementById("scrollArrow");
  let currentSectionIndex = 0;

  if (window.innerHeight >= document.body.scrollHeight) {
    scrollArrow.style.display = "none";
  }

  function updateCurrentSection() {
    let minDistance = Infinity;
    let closestIndex = 0;

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const distance = Math.abs(rect.top);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    currentSectionIndex = closestIndex;

    if (currentSectionIndex === sections.length - 1) {
      scrollArrow.style.display = "none";
    } else {
      scrollArrow.style.display = "block";
    }
  }

  window.addEventListener("scroll", updateCurrentSection);

  scrollArrow.addEventListener("click", function (event) {
    event.preventDefault();

    const nextSectionIndex = currentSectionIndex + 1;
    if (nextSectionIndex < sections.length) {
      sections[nextSectionIndex].scrollIntoView({ behavior: "smooth" });
    }
  });

  updateCurrentSection();
});
