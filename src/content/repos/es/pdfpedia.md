---
title: Gestor y publicador de revistas
description: Aplicación centrada en la integración de servicios de terceros para administrar revistas, usuarios y publicaciones.
image: pdfpedia-editor.png
techs:
  - name: Java
    icon: java
  - name: Spring Boot
    icon: spring
  - name: Docker
    icon: docker
  - name: PostgreSQL
    icon: postgres
  - name: TypeScript
    icon: typescript
  - name: Angular
    icon: angular
repoUrls:
  - url: https://github.com/AvaibleUser/pdfpedia
    label: Backend
  - url: https://github.com/AvaibleUser/REVISTLAND
    label: Frontend
---

## Descripción detallada

### Backend

- Diseño de capas de arquitectura (controladores, servicios, repositorios, etc.)
- Uso separado de DTOs y entidades para una mejor separación de responsabilidades
- Servicios de integración de terceros para almacenar archivos, bases de datos y servicios de correo electrónico, utilizando `Cloudinary`, `Neon` y `Google`
- Seguridad de los datos mediante `Spring Security`, mediante el uso de `JWT` y encriptación con `sha256`
- Uso de `Spring Boot` para construir servicios RESTful

### Frontend

- Basado en módulos de `Angular` aislados por roles y permisos
- Estilizado con `Tailwind CSS` y `DaisyUI`
- Diseño de la experiencia de usuario para ser responsivo y simple para los usuarios
- Panel con `ApexCharts` para la visualización de los datos

### Base de datos

- Base de datos `PostgreSQL` utilizada para almacenar los datos de los usuarios, las revistas y las publicaciones
- La base de datos se encuentra en `Neon`

### Despliegue

- `Docker` para la construcción de imágenes de contenedores
- `Artifact Registry` para almacenar las imágenes de Docker
- `Google Cloud Run` para el despliegue de las imágenes de Docker en la nube en el entorno de producción y de desarrollo
- Integración continua con `GitHub Actions` para correr tests unitarios y reportes de cobertura
- Entrega/despliegue continuo con `GitHub Actions` para la construcción de imágenes de Docker y despliegue de las imágenes de Docker en la nube
