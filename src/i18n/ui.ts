export const languages = {
  es: "Español",
  en: "English",
};

export const defaultLang = "es" as keyof typeof languages;

export const ui = {
  es: {
    "base.title": "Portfolio",
    "header.title": "Portfolio",
    "header.hero": "Inicio",
    "header.about": "Sobre mí",
    "header.projects": "Proyectos",
    "projects.title": "Proyectos Destacados",
    "hero.title.first": "Hola,",
    "hero.title.last": "soy Dylan",
    "hero.description":
      "Desarrollador Backend con experiencia en Java, Python y Spring Boot. Creo soluciones robustas y escalables para la web.",
    "hero.button.projects": "Ver proyectos",
    "hero.button.contact": "Contacto",
    "hero.console.specialization": "Desarrollo Backend",
    "about.title": "Sobre mí",
    "about.description.1":
      "Soy estudiante de último año de Ingeniería en Ciencias y Sistemas, enfocado en el desarrollo backend con Java. Tengo experiencia en la construcción de APIs con Spring Boot y Postgres, pero también he trabajado con tecnologías como Python y Express.js.",
    "about.description.2":
      "Además de mi experiencia en el desarrollo de backend, también he trabajado con TypeScript con Tailwind CSS y en la integración continua con Docker y GitHub Actions para proyectos académicos.",
    "about.description.3":
      "Mi objetivo es seguir creciendo como desarrollador, aprendiendo nuevas tecnologías y enfrentando desafíos en el mundo del desarrollo de software.",
    "repoCard.view": "Ver detalles",
    "repoCard.source": (...args: unknown[]) =>
      args[0] ? `Ver código ${args[0]}` : `Ver código`,
    "project.back": "Volver a proyectos",
    "project.details": "Detalles del proyecto",
    "project.details.technologies": "Tecnologías",
    "project.details.repositories": (...args: unknown[]) =>
      (args[0] as [])?.length > 1 ? "Repositorios" : "Repositorio",
    "project.details.repositories.source": (...args: unknown[]) =>
      args[0] ? `Código ${args[0]}` : `Ver código`,
  },
  en: {
    "base.title": "Portfolio",
    "header.title": "Portfolio",
    "header.hero": "Home",
    "header.about": "About Me",
    "header.projects": "Projects",
    "projects.title": "Highlighted Projects",
    "hero.title.first": "Hi,",
    "hero.title.last": "I'm Dylan",
    "hero.description":
      "Backend Developer with experience in Java, Python and Spring Boot. I create robust and scalable solutions for the web.",
    "hero.button.projects": "View Projects",
    "hero.button.contact": "Contact",
    "hero.console.specialization": "Backend Development",
    "about.title": "About Me",
    "about.description.1":
      "I'm a student of the last year of Engineering in Sciences and Systems, focused on backend development with Java. I have experience in building APIs with Spring Boot and Postgres, but I also worked with technologies like Python and Express.js.",
    "about.description.2":
      "In addition to my experience in backend development, I have also worked with TypeScript with Tailwind CSS and in continuous integration with Docker and GitHub Actions for academic projects.",
    "about.description.3":
      "My goal is to continue growing as a developer, learning new technologies, and facing challenges in the world of software development.",
    "repoCard.view": "View Details",
    "repoCard.source": (...args: unknown[]) =>
      args[0] ? `View ${args[0]} code` : `View code`,
    "project.back": "Back to Projects",
    "project.details": "Project Details",
    "project.details.technologies": "Technologies",
    "project.details.repositories": (...args: unknown[]) =>
      (args[0] as [])?.length > 1 ? "Repositories" : "Repository",
    "project.details.repositories.source": (...args: unknown[]) =>
      args[0] ? `View ${args[0]} code` : `View code`,
  },
} as const;
