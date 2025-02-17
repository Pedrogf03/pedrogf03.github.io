// Obtiene todas las secciones
const sections = document.querySelectorAll(".section");

// Detecta la sección visible
let currentSectionIndex = 0;

window.addEventListener("scroll", () => {
  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 0 && rect.bottom >= 0) {
      currentSectionIndex = index;
    }
  });
});

// Agregar evento al botón de flecha
document.getElementById("scrollArrow").addEventListener("click", () => {
  if (currentSectionIndex + 1 < sections.length) {
    // Mueve hacia la siguiente sección
    currentSectionIndex++;
    sections[currentSectionIndex].scrollIntoView({
      behavior: "smooth",
    });
  }
});
