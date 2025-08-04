export const languages = {
  es: "Español",
  en: "English",
};

export const defaultLang = "es" as keyof typeof languages;

export const ui = {
  es: {
    "header.title": "Portafolio",
    "projects.title": "Proyectos Destacados",
    "hero.title.first": "Hola,",
    "hero.title.last": "soy Dylan",
    "hero.description":
      "Desarrollador Backend con experiencia en Java, Python y Spring Boot. Creo soluciones robustas y escalables para la web.",
    "hero.button.projects": "Ver proyectos",
    "hero.button.contact": "Contacto",
    "hero.console.specialization": "Desarrollo Backend",
  },
  en: {
    "header.title": "Portfolio",
    "projects.title": "Highlighted Projects",
    "hero.title.first": "Hi,",
    "hero.title.last": "I'm Dylan",
    "hero.description":
      "Backend Developer with experience in Java, Python and Spring Boot. I create robust and scalable solutions for the web.",
    "hero.button.projects": "View Projects",
    "hero.button.contact": "Contact",
    "hero.console.specialization": "Backend Development",
  },
} as const;
