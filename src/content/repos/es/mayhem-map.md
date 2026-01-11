---
title: Plataforma de Alertas de Catástrofes Globales
description: Microservicio de monitoreo y respuesta temprana a desastres (naturales y humanos), integrando IA para el procesamiento de datos y despliegue nativo en la nube.
image: global-map.png
order: 1
techs:
  - name: TypeScript
    icon: typescript
  - name: Hono
    icon: hono
  - name: Angular
    icon: angular
  - name: Kubernetes
    icon: k8s
  - name: Docker
    icon: docker
  - name: GCP
    icon: gcp
  - name: MongoDB
    icon: mongo
repoUrls:
  - url: https://github.com/AvaibleUser/mayhem-map
---

## Monitoreo Global en Tiempo Real

Este proyecto es un microservicio fundamental dentro de una arquitectura humanitaria más amplia, centrado en la **ingesta, validación y visualización** de alertas de crisis globales. Implementa una infraestructura robusta capaz de manejar datos sensibles con precisión y escalabilidad.

### Backend & Arquitectura Cloud-Native

- **API de Alto Rendimiento:** Backend desarrollado con **Hono** y `TypeScript`, enfocado en la velocidad y la tipificación estricta de datos.
- **Persistencia Flexible:** Base de datos **`MongoDB` Atlas** para un esquema flexible de datos, ideal para la naturaleza variada de los diferentes tipos de desastres (terremotos, hambruna, etc.).
- **Procesamiento Inteligente:** Integración de IA para el **reconocimiento de imágenes** (filtrado de contenido inapropiado) y **procesamiento de lenguaje natural (NLP)** para clasificar el sentimiento de reportes ciudadanos anónimos.

### Frontend & UX Enfocada en Datos Críticos

- **Angular Moderno:** SPA construida con las últimas características de `Angular 20` (Standalone APIs y Signals), asegurando una experiencia de usuario fluida y reactiva.
- **Visualización Geoespacial:** Implementación de un **mapa interactivo** que utiliza datos **GeoJSON** para mostrar la ubicación exacta de los eventos, permitiendo filtros avanzados por tipo, fecha y ubicación geográfica.
- **Diseño Adaptativo:** Interfaz estilizada con Tailwind CSS y DaisyUI, con componentes dinámicos que cambian la visualización de los detalles de la alerta según el tipo de catástrofe (e.g., magnitud de terremoto vs. víctimas de hambruna).

### DevOps & Despliegue Automatizado

- **Orquestación con Kubernetes:** Despliegue de la solución completa en **Google Cloud Platform (GCP)** utilizando **Kubernetes** para gestionar la alta disponibilidad de los *deployments* y *services*.
- **Gestión de Configuración:** Uso de **Secrets y ConfigMaps** de Kubernetes para manejar credenciales sensibles y variables de entorno de manera segura y desacoplada del código fuente.
- **Integración Serverless:** Notificaciones automáticas implementadas mediante funciones *serverless* (Lambda/Azure Functions) activadas por eventos de actualización de alertas.

### Capturas de la Demostración

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">

![Pantalla principal con varias alertas activas en formato de tarjetas.](/src/assets/images/disaster-cards.png)
*Vista de dashboard con listado de alertas activas, priorizadas por impacto.*

![Detalles de un terremoto mostrando gráficos e imágenes.](/src/assets/images/earthquake-details.png)
*Pantalla de detalles para un desastre natural (terremoto), mostrando métricas específicas como magnitud y profundidad.*

![Misma pantalla pero con la sección de ubicación y detalles técnicos.](/src/assets/images/earthquake-map-details.png)
*Mapa interactivo y detalles técnicos de la ubicación del epicentro y afectaciones en poblados cercanos.*

![Detalles de una alerta de desaparición, mostrando la variación de datos.](/src/assets/images/missing-person-details.png)
*Ejemplo de interfaz dinámica: detalles de una alerta humanitaria (desaparición) que varían significativamente de un desastre natural.*

![Cronología de eventos mostrando la evolución del desastre.](/src/assets/images/event-timeline.png)
*Cronología detallada que muestra el seguimiento y evolución del desastre con marcas de tiempo y ubicaciones clave.*

</div>
