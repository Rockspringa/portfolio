---
title: Hospital Management System
description: A scalable microservices ecosystem designed to transform hospital management through cloud-native architecture and automated deployment.
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

## A Smart Health System

This project is more than just a patient database; it is a full-stack infrastructure solution designed for high-availability environments where data integrity and scalability are critical.

### Backend & Microservices Architecture

- **Distributed Architecture:** I implemented a microservices ecosystem with `Spring Boot` where each module (patients, consultations, inventory) operates autonomously with its own database, ensuring isolation and fault tolerance.
- **Efficient Communication:** Service orchestration through a centralized **API Gateway** and optimized inter-service communication using **OpenFeign**.
- **Bank-Grade Security:** Robust authentication system based on **JWT** and SHA256 encryption, managed by a dedicated security service with `Spring Security`.

### Frontend & High-Performance UX

- **Access Control (RBAC):** Interface developed in `Angular` featuring lazy loading and isolated modules based on medical staff roles and permissions.
- **Modern Design:** Responsive and minimalist UI built with **Tailwind CSS** and **DaisyUI**, prioritizing speed of use in critical healthcare scenarios.

### Data Infrastructure

- **Cloud Persistence:** Relational databases managed in **Neon (PostgreSQL)**, optimized through custom DDL/DML scripts.
- **DB-Level Security:** Implementation of least-privilege policies where each microservice can only access its specific tables.

### DevOps: CI/CD & Cloud-Native

- **Optimized Containers:** `Docker` implementation using multi-stage builds to minimize the attack surface and artifact size.
- **Modern CI/CD Flow:** Automated pipeline in **GitHub Actions** managing everything from unit testing to automatic deployment on **Google Cloud Run**.
- **Development Environment:** Advanced setup with `Docker Compose` and **watch mode** for a seamless and agile developer experience.
