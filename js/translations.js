const translations = {
  // --- Versión en Español ---
  es: {
    doc_title: "Portfolio de Pedro González",
    nav_logo: "Pedro G.",
    nav_home: "Inicio",
    nav_about: "Sobre Mí",
    nav_skills: "Skills",
    nav_projects: "Proyectos",
    nav_experience: "Experiencia",
    nav_testimonials: "Testimonios",
    nav_contact: "Contacto",

    home_greeting: "Hola, soy Pedro",
    home_subtitle: "Desarrollador de Software enfocado en Backend y Big Data.",
    home_cta_button: "Ver mis proyectos",

    about_title: "Sobre Mí",
    about_p1:
      "Soy un desarrollador de software con una base sólida en Java, Spring Boot y bases de datos SQL, complementada con experiencia en Flutter y desarrollo multiplataforma. Me enfoco en construir aplicaciones escalables y mantenibles con arquitectura limpia y código de alta calidad.",
    about_p2:
      "He ganado experiencia práctica en Sipos, KnowmadMood y Trace, trabajando en proyectos reales que involucran mantenimiento y desarrollo backend, resolución de incidencias, pruebas automatizadas y optimización del rendimiento.",
    about_p3:
      "Actualmente, estoy cursando una especialización en <strong>Inteligencia Artificial y Big Data</strong>, después de completar una en Ciberseguridad, lo que mejora mi comprensión holística del desarrollo de software seguro y orientado a datos.",
    about_p4:
      "Estoy orientado a resultados, soy analítico y me apasiona la mejora continua. Busco una oportunidad para crecer como desarrollador backend o full-stack, aportando soluciones técnicas sólidas y una mentalidad proactiva.",
    about_p5:
      "🏆 Logros notables incluyen el 10º puesto nacional en ProgramaMe 2024 y el 2º puesto en la fase regional de SpainSkills 2023.",

    skills_title: "Skills",
    skills_subtitle: "Tengo experiencia en diversas tecnologías y herramientas:",
    skills_card1_title: "AI & Big Data",
    skills_card2_title: "Languages",
    skills_card3_title: "Frameworks",
    skills_card4_title: "Databases",
    skills_card5_title: "Other Tools",

    projects_title: "Proyectos",
    projects_subtitle: "Estos son algunos de mis trabajos más recientes.",
    project_button_text: "Ver en GitHub",
    project_gotravel_title: "GoTravel",
    project_gotravel_desc: "Aplicación de escritorio y móvil para reservar servicios ofrecidos por otros usuarios.",
    project_gotravel_stack: "<strong>Stack:</strong> Java, Spring, JavaFX, MySQL, PayPal API",
    project_pokesearch_title: "PokéSearch",
    project_pokesearch_desc: "App multiplataforma para buscar información sobre Pokémon usando la PokeApi.",
    project_pokesearch_stack: "<strong>Stack:</strong> Flutter, Dart, PokeApi (REST)",
    project_hangman_title: "Hangman (Juego del Ahorcado)",
    project_hangman_desc:
      "Versión multijugador del clásico juego del Ahorcado. Utiliza una arquitectura cliente-servidor con Sockets de Java para permitir jugar en red.",
    project_hangman_stack: "<strong>Stack:</strong> Java, Java Sockets, Multithreading",
    project_ordeplay_title: "OrdePlay",
    project_ordeplay_desc: "Aplicación web para comprar videojuegos online y crear listas personalizadas.",
    project_ordeplay_stack: "<strong>Stack:</strong> PHP, HTML, CSS, JavaScript, jQuery, Ajax, MySQL",
    project_aibuddy_title: "AI Buddy Bot para Discord",
    project_aibuddy_desc: "Bot para Discord que utiliza modelos de IA generativa para responder en el chat.",
    project_aibuddy_stack: "<strong>Stack:</strong> Python, Discord.py, LangChain Core, Groq API & Gemini API.",

    exp_title: "Experiencia",
    exp_subtitle: "He trabajado en varias empresas, destacando:",
    exp1_title: "Flutter Junior Developer",
    exp1_company: "Sipos (Híbrido)",
    exp1_date: "Sept. 2024 - Jun. 2025",
    exp1_d1: "Desarrollo de aplicaciones en Flutter.",
    exp1_d2: "Control de versiones con Bitbucket.",
    exp1_d3: "Trabajo con bases de datos y APIs.",
    exp1_d4: "Desarrollo de tests para la app.",
    exp2_title: "Java Junior Developer",
    exp2_company: "Knowmad Mood (Remoto)",
    exp2_date: "Mar. 2024 - Jun. 2024",
    exp2_d1: "Desarrollo de aplicaciones en Java & Spring Boot.",
    exp2_d2: "Desarrollo de scripts SQL.",
    exp2_d3: "Mantenimiento de bases de datos.",
    exp3_title: "VBA Access Junior Developer",
    exp3_company: "Trace (Presencial)",
    exp3_date: "Mar. 2023 - Jun. 2023",
    exp3_d1: "Desarrollo de aplicaciones usando VBA en Access.",
    exp3_d2: "Trabajo con bases de datos.",

    test_title: "Testimonios",
    test_subtitle: "Lo que clientes y compañeros dicen de mi trabajo:",
    test1_quote:
      '"Pedro ha demostrado una gran capacidad de adaptación y una sólida base técnica en Java y Spring, resolviendo incidencias de forma eficaz y proactiva."',
    test1_cite: "— Tutor de Prácticas, Knowmad Mood",
    test1_button: "Ver carta completa (PDF)",
    test2_quote:
      '"Sus conocimientos en aplicaciones web o multiplataforma han sido realmente útiles... Dispuesto siempre a ayudar, se le puede definir como una persona generosa y con un amplio conocimiento en el mundo de aplicaciones."',
    test2_cite: "— Pablo Sánchez Hidalgo, Técnico de Redes y Ciberseguridad (Compañero de estudios)",

    contact_title: "Contacto",
    contact_subtitle: "Puedes contactarme a través de email o redes sociales:",
    contact_linkedin: "LinkedIn",
    contact_github: "GitHub",
    contact_email: "Email",
  },

  // --- Versión en Inglés ---
  en: {
    doc_title: "Pedro González's Portfolio",
    nav_logo: "Pedro G.",
    nav_home: "Home",
    nav_about: "About Me",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_testimonials: "Testimonials",
    nav_contact: "Contact",

    home_greeting: "Hello, I'm Pedro",
    home_subtitle: "Software Developer focused on Backend and Big Data.",
    home_cta_button: "See my projects",

    about_title: "About Me",
    // He recuperado el texto en inglés de tu primer prompt
    about_p1:
      "I’m a software developer with a strong foundation in Java, Spring Boot, and SQL databases, complemented by experience in Flutter and cross-platform development. I focus on building scalable, maintainable applications with clean architecture and high-quality code.",
    about_p2:
      "I’ve gained hands-on experience at Sipos, KnowmadMood, and Trace, working on real-world projects involving backend maintenance and development, issue resolution, automated testing, and performance optimization.",
    about_p3:
      "Currently, I’m pursuing a specialization in <strong>Artificial Intelligence and Big Data</strong>, after completing one in Cybersecurity, which enhances my holistic understanding of secure and data-driven software development.",
    about_p4:
      "I’m results-oriented, analytical, and passionate about continuous improvement. I’m seeking an opportunity to grow as a backend or full-stack developer, contributing solid technical solutions and a proactive mindset.",
    about_p5:
      "🏆 Notable achievements include ranking 10th nationally at ProgramaMe 2024 and 2nd place at the SpainSkills 2023 regional stage.",

    skills_title: "Skills",
    skills_subtitle: "I have experience in various technologies and tools:",
    skills_card1_title: "AI & Big Data",
    skills_card2_title: "Languages",
    skills_card3_title: "Frameworks",
    skills_card4_title: "Databases",
    skills_card5_title: "Other Tools",

    projects_title: "Projects",
    projects_subtitle: "Here are some of my most recent works.",
    project_button_text: "View on GitHub",
    project_gotravel_title: "GoTravel",
    project_gotravel_desc: "Desktop & Mobile App for booking services offered by other users.",
    project_gotravel_stack: "<strong>Stack:</strong> Java, Spring, JavaFX, MySQL, PayPal API",
    project_pokesearch_title: "PokéSearch",
    project_pokesearch_desc: "Cross-platform App for searching info about Pokémon using the PokeApi.",
    project_pokesearch_stack: "<strong>Stack:</strong> Flutter, Dart, PokeApi (REST)",
    project_hangman_title: "Hangman (Multiplayer)",
    project_hangman_desc:
      "Multiplayer version of the classic Hangman game. It uses a client-server architecture with Java Sockets to allow network play.",
    project_hangman_stack: "<strong>Stack:</strong> Java, Java Sockets, Multithreading",
    project_ordeplay_title: "OrdePlay",
    project_ordeplay_desc:
      "Web Application for purchasing video games online. Also allows users to create personalized game lists.",
    project_ordeplay_stack: "<strong>Stack:</strong> PHP, HTML, CSS, JavaScript, jQuery, Ajax, MySQL",
    project_aibuddy_title: "AI Buddy Bot for Discord",
    project_aibuddy_desc: "Bot for Discord that uses generative AI models to respond in chat.",
    project_aibuddy_stack: "<strong>Stack:</strong> Python, Discord.py, LangChain Core, Groq API & Gemini API.",

    exp_title: "Experience",
    exp_subtitle: "I have worked in various companies, such as:",
    exp1_title: "Flutter Junior Developer",
    exp1_company: "Sipos (Hybrid)",
    exp1_date: "Sept. 2024 - Jun. 2025",
    exp1_d1: "App development in Flutter.",
    exp1_d2: "Version control with Bitbucket.",
    exp1_d3: "Worked with databases and APIs.",
    exp1_d4: "App test development.",
    exp2_title: "Java Junior Developer",
    exp2_company: "Knowmad Mood (Remote)",
    exp2_date: "Mar. 2024 - Jun. 2024",
    exp2_d1: "App development in Java & Spring Boot.",
    exp2_d2: "SQL Scripts development.",
    exp2_d3: "Database maintenance.",
    exp3_title: "VBA Access Junior Developer",
    exp3_company: "Trace (On-site)",
    exp3_date: "Mar. 2023 - Jun. 2023",
    exp3_d1: "App development using VBA in Access.",
    exp3_d2: "Worked with databases.",

    test_title: "Testimonials",
    test_subtitle: "What clients and colleagues say about my work:",
    test1_quote:
      '"Pedro has shown a great capacity for adaptation and a solid technical foundation in Java and Spring, resolving incidents effectively and proactively."',
    test1_cite: "— Internship Tutor, Knowmad Mood",
    test1_button: "View full letter (PDF)",
    test2_quote:
      '"His knowledge in web or multiplatform applications has been really useful... Always willing to help, he can be defined as a generous person with extensive knowledge in the world of applications."',
    test2_cite: "— Pablo Sánchez Hidalgo, Network and Cybersecurity Technician (Classmate)",

    contact_title: "Contact",
    contact_subtitle: "Feel free to reach out via email or social media:",
    contact_linkedin: "LinkedIn",
    contact_github: "GitHub",
    contact_email: "Email",
  },
};
