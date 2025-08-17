---
title: Sistema de Gestión Hospitalaria
description: Proyecto de centrado en CI/CD y un backend de micro servicios para administrar pacientes, consultas, empleados y medicinas.
image: e-health-ward.png
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
  - url: https://github.com/AvaibleUser/e-health
    label: Backend
  - url: https://github.com/AvaibleUser/hospital
    label: Frontend
---

## Descripción detallada

### Backend

- Diseño de la arquitectura de micro servicios
- Cada servicio se encarga de manejar entidades específicas en su propia base de datos y la comunicación con otros servicios mediante REST APIs con `OpenFeign`
- Seguridad de los datos usando `Spring Security`, mediante el uso de `JWT` y encriptación con `sha256`, en su propio servicio
- El diseño incluye un API Gateway que se encarga de manejar las peticiones entrantes y redireccionarlas a los servicios correspondientes

### Frontend

- Basado en módulos de `Angular` aislados por roles y permisos
- Estilizado con `Tailwind CSS` y `DaisyUI`
- Diseño de la experiencia de usuario para ser responsivo y simple para los usuarios

### Base de datos

- Base de datos `PostgreSQL` utilizada para almacenar los datos de los usuarios, los pacientes, las consultas, los empleados y las medicinas
- Scripts DDL utilizando `SQL` para la creación de cada base de datos
- Scripts DML utilizando `SQL` para la inserción de datos base para configurar correctamente la base de datos
- La base de datos se encuentra en `Neon`
- Cada servicio tiene roles y permisos para acceder a sus respectivas tablas

### Despliegue

- `Docker` para la construcción de imágenes de contenedores
- `Docker Compose` para el despliegue de los servicios en local, con `develop.watch` para detectar cambios en el código y actualizar automáticamente los servicios
- Imágenes de Docker optimizadas para bajar el tamaño de los contenedores y evitar problemas de seguridad básicos
- `Docker Hub` para almacenar las imágenes de Docker
- `Google Cloud Run` para el despliegue de las imágenes de Docker en la nube en el entorno de producción y de desarrollo
- Integración continua con `GitHub Actions` para correr tests unitarios y reportes de cobertura
- Entrega/despliegue continuo con `GitHub Actions` para la construcción de imágenes de Docker y despliegue de las imágenes de Docker en la nube
