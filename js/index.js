// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  
  // --- LÓGICA DE IDIOMA (AÑADIDA) ---

  // 1. Detectar el idioma del navegador
  // navigator.language devuelve "es-ES", "en-US", etc.
  // con .startsWith('es') cubrimos "es", "es-ES", "es-MX", etc.
  const userLang = navigator.language.startsWith('es') ? 'es' : 'en';

  // 2. Función para cargar el contenido
  function loadLanguage(lang) {
    // Cargar el título del documento
    const titleElement = document.querySelector('title[data-key]');
    if (titleElement) {
        const titleKey = titleElement.getAttribute('data-key');
        if (translations[lang] && translations[lang][titleKey]) {
            document.title = translations[lang][titleKey];
        }
    }
    
    // Selecciona todos los elementos que tienen el atributo 'data-key'
    document.querySelectorAll('[data-key]').forEach(element => {
      const key = element.getAttribute('data-key');
      
      // Comprueba que el texto existe en el diccionario
      if (translations[lang] && translations[lang][key]) {
        // Usamos innerHTML para renderizar etiquetas <strong> si las hay
        element.innerHTML = translations[lang][key];
      }
    });
  }

  // 3. Cargar el idioma detectado al iniciar la página
  loadLanguage(userLang);

  // --- FIN DE LA LÓGICA DE IDIOMA ---


  // --- Lógica del Menú Hamburguesa (Tu código existente) ---
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links li a");

  // 1. Abrir/Cerrar menú al hacer clic en la hamburguesa
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  // 2. Cerrar menú al hacer clic en un enlace (para SPAs)
  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });

  
  // --- Lógica de la Flecha de Scroll (Tu código existente) ---
  const sections = document.querySelectorAll("section");
  const scrollArrow = document.getElementById("scrollArrow");
  let currentSectionIndex = 0;

  // Oculta la flecha si no hay scroll
  if (window.innerHeight >= document.body.scrollHeight) {
      scrollArrow.style.display = 'none';
  }

  // Función para actualizar la sección actual
  function updateCurrentSection() {
    let minDistance = Infinity;
    let closestIndex = 0;

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const distance = Math.abs(rect.top); // Distancia desde el top

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    currentSectionIndex = closestIndex;

    // Ocultar la flecha en la última sección (Contacto)
    if (currentSectionIndex === sections.length - 1) {
      scrollArrow.style.display = "none";
    } else {
      scrollArrow.style.display = "block";
    }
  }

  // 1. Actualiza la sección actual mientras el usuario hace scroll
  window.addEventListener("scroll", updateCurrentSection);

  // 2. Al hacer clic en la flecha, ir a la SIGUIENTE sección
  scrollArrow.addEventListener("click", function (event) {
    event.preventDefault();

    const nextSectionIndex = currentSectionIndex + 1;
    if (nextSectionIndex < sections.length) {
      sections[nextSectionIndex].scrollIntoView({ behavior: "smooth" });
    }
  });

  // 3. Llama a la función una vez al cargar la página
  updateCurrentSection();
});