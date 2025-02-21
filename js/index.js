document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const scrollArrow = document.getElementById("scrollArrow");

  scrollArrow.addEventListener("click", function (event) {
    event.preventDefault();

    let currentSectionIndex = -1;
    let minDistance = Infinity;

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const distance = Math.abs(rect.top);

      if (distance < minDistance) {
        minDistance = distance;
        currentSectionIndex = index;
      }
    });

    const currentSection = sections[currentSectionIndex];
    const rect = currentSection.getBoundingClientRect();

    if (rect.bottom > window.innerHeight) {
      currentSection.scrollIntoView({ behavior: "smooth", block: "end" });
    } else {
      let nextSectionIndex = currentSectionIndex + 1;
      if (nextSectionIndex >= sections.length) {
        nextSectionIndex = 0;
      }
      sections[nextSectionIndex].scrollIntoView({ behavior: "smooth" });
    }
  });
});
