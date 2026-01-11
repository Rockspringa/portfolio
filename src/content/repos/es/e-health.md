---
title: Sistema de Gestión Hospitalaria
description: Ecosistema escalable de microservicios diseñado para transformar la gestión hospitalaria mediante arquitectura cloud-native y despliegue automatizado.
image: e-health-ward.png
order: 2
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

## Un Sistema de Salud Inteligente

Este proyecto no es solo una base de datos de pacientes; es una solución de infraestructura completa diseñada para entornos de alta disponibilidad, donde la integridad de los datos y la escalabilidad son críticas.

### Backend & Arquitectura de Microservicios

- **Arquitectura Distribuida:** Implementé un ecosistema de microservicios con `Spring Boot` donde cada módulo (pacientes, consultas, inventario) opera de forma autónoma con su propia base de datos, garantizando aislamiento y tolerancia a fallos.
- **Comunicación Eficiente:** Orquestación de servicios mediante un **API Gateway** centralizado y comunicación inter-service optimizada con **OpenFeign**.
- **Seguridad de Grado Bancario:** Sistema de autenticación robusto basado en **JWT** y encriptación SHA256, gestionado por un servicio de seguridad dedicado con `Spring Security`.

### Frontend & UX de Alto Rendimiento

- **Control de Acceso (RBAC):** Interfaz desarrollada en `Angular` con carga optimizada (lazy loading) y módulos aislados según roles y permisos del personal médico.
- **Diseño Moderno:** Interfaz responsiva y minimalista construida con **Tailwind CSS** y **DaisyUI**, priorizando la velocidad de uso en situaciones críticas.

### Infraestructura de Datos

- **Persistencia en la Nube:** Bases de datos relacionales gestionadas en **Neon (PostgreSQL)**, optimizadas mediante scripts DDL/DML personalizados.
- **Seguridad a nivel de DB:** Implementación de políticas de privilegios mínimos donde cada microservicio solo accede a sus tablas correspondientes.

### DevOps: CI/CD y Cloud-Native

- **Contenedores Optimizados:** Uso de `Docker` con imágenes multi-stage para minimizar la superficie de ataque y el tamaño de los artefactos.
- **Flujo CI/CD Moderno:** Pipeline automatizado en **GitHub Actions** que gestiona desde los unit tests hasta el despliegue automático en **Google Cloud Run**.
- **Entorno de Desarrollo:** Configuración avanzada con `Docker Compose` y **watch mode** para una experiencia de desarrollo ágil y eficiente.
