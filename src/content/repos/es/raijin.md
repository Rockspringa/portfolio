---
title: Plataforma de Gestión de Proyectos Scrum
description: Sistema integral de gestión de proyectos Agile/Scrum con arquitectura de microservicios, Event-Driven Architecture (EDA) y despliegue nativo en la nube.
image: backlog.png
order: 0
techs:
  - name: Java
    icon: java
  - name: Spring Boot
    icon: spring
  - name: Angular
    icon: angular
  - name: PostgreSQL
    icon: postgres
  - name: Kafka
    icon: kafka
  - name: Docker
    icon: docker
  - name: GCP
    icon: gcp
repoUrls:
  - url: https://github.com/AvaibleUser/raijin
---

## Gestión Ágil de Alto Nivel

Este proyecto es un sistema integral de gestión de proyectos diseñado desde cero para emular y superar funcionalidades de herramientas como Jira, enfocándose en la robustez arquitectónica y la eficiencia operativa. La solución se basa en principios de **Domain-Driven Design (DDD)** y **arquitectura hexagonal**.

### Backend & Arquitectura Empresarial (DDD, Hexagonal, EDA)

- **Ecosistema de Microservicios:** Implementación de **6 microservicios** autónomos (Scrum Core, Autenticación, Finanzas, Notificaciones, Reportes, API Gateway), todos desarrollados con `Spring Boot`.
- **Comunicación 100% Asíncrona:** Toda la comunicación entre servicios se gestiona mediante **Event-Driven Architecture (EDA)** usando `Kafka`, garantizando desacoplamiento total y alta disponibilidad.
- **DDD y Replicación Mínima:** Aplicación de **Domain-Driven Design (DDD)** con arquitectura hexagonal. La información necesaria en otros dominios se replica de forma mínima y controlada, evitando dependencias monolíticas.
- **Almacén de Datos Analítico:** El servicio de reportes funciona como un proceso **ETL** que alimenta un **Data Warehouse** en esquema de estrella, optimizado para análisis de rendimiento y finanzas (Dimensions, Facts y una tabla de auditoría global).

### Frontend & UX de Productividad

- **Dashboard Kanban Interactivo:** Interfaz construida con `Angular` (Tailwind CSS, DaisyUI) que incluye un tablero Kanban con funcionalidad de *drag & drop* para gestionar el flujo de historias de usuario y sprints.
- **Experiencia Intuitiva:** Diseño de interfaz centrado en la usabilidad para facilitar la adopción por parte del personal técnico y administrativo.

### DevOps & Calidad del Software

- **Ecosistema Dockerizado:** Toda la aplicación está empaquetada en contenedores `Docker` y desplegada en **GCP**, garantizando un entorno 100% en producción.
- **Pruebas Rigurosas:** Implementación de pruebas unitarias y de integración para asegurar la calidad del código y la fiabilidad del sistema.

### Capturas de la Demostración

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">

![Vista del Backlog general del proyecto con tareas pendientes y prioridades.](/src/assets/images/backlog.png)
*Pantalla principal del backlog del producto, mostrando historias de usuario con ponderaciones (story points) y prioridades.*

![Tablero Kanban para un sprint activo.](/src/assets/images/stories.png)
*Tablero Kanban interactivo, gestionando el flujo de tareas desde "Pendientes" hasta "Finalizadas" con movimiento de arrastrar y soltar.*

![Registro de cambios y actividad en las historias de usuario.](/src/assets/images/stories-log.png)
*Vista detallada del registro de eventos y actividades de una historia de usuario, registrando cada cambio y participante.*

![Reporte financiero de ganancias y gastos.](/src/assets/images/report.png)
*Ejemplo de reporte financiero de ganancias, consolidando ingresos y gastos operativos del proyecto.*

</div>
