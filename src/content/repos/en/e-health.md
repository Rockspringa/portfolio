---
title: Hospital Management System
description: Centralized project with CI/CD and micro services backend for managing patients, consultations, employees and medicines.
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

## Detailed description

### Backend

- Design of the micro services architecture
- Each service is responsible for handling specific entities in its own database and communication with other services through REST APIs with `OpenFeign`
- Security of the data using `Spring Security`, through the use of `JWT`, in its own service
- The design includes an API Gateway that is responsible for handling incoming requests and redirecting them to the corresponding services

### Frontend

- Based on `Angular` modules isolated by roles and permissions
- Stylized with `Tailwind CSS` and `DaisyUI`
- Design of the user experience to be responsive and simple for users

### Database

- Database `PostgreSQL` used for storing the data of users, patients, consultations, employees and medicines
- DDL scripts using `SQL` for the creation of each database
- DML scripts using `SQL` for the insertion of base data to correctly set up the database
- The database is located in `Neon`
- Each service has roles and permissions to access its respective tables

### Deployment

- `Docker` for building container images
- `Docker Compose` for the deployment of the services locally, with `develop.watch` to detect code changes and automatically update the services
- Optimized Docker images to reduce the size of containers and avoid basic security issues
- `Docker Hub` for storing the Docker images
- `Google Cloud Run` for the deployment of the Docker images in the cloud in the production environment and development environment
- Continuous integration with `GitHub Actions` for running unit tests and coverage reports
- Continuous delivery/deployment with `GitHub Actions` for building Docker images and deploying Docker images in the cloud
