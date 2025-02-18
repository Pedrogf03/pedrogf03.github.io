document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const scrollArrow = document.getElementById("scrollArrow");

  scrollArrow.addEventListener("click", function (event) {
    event.preventDefault();

    let currentSectionIndex = -1;
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight) {
        currentSectionIndex = index;
      }
    });

    let nextSectionIndex = currentSectionIndex + 1;
    if (nextSectionIndex >= sections.length) {
      nextSectionIndex = 0; // Si es la última sección, vuelve arriba
    }

    sections[nextSectionIndex].scrollIntoView({ behavior: "smooth" });
  });
});
