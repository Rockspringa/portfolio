---
title: Journal Management Application
description: Project centralized on third party integration services for managing journals, users and publications.
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

## Detailed description

### Backend

- Design of layers architecture (controllers, services, repositories, etc.)
- Separated usage of DTOs and entities for better separation of concerns
- Third party integration services for storing files, databases and email services, using `Cloudinary`, `Neon` and `Google`
- Security of the data through `Spring Security`, through the use of `JWT` and encryption with `sha256`
- Usage of `Spring Boot` for building RESTful services

### Frontend

- Based on `Angular` modules isolated by roles and permissions
- Stylized with `Tailwind CSS` and `DaisyUI`
- Design of the user experience to be responsive and simple for users
- Dashboard with `ApexCharts` for the visualization of the data

### Database

- Database `PostgreSQL` used for storing the data of users, journals and publications
- The database is located in `Neon`

### Deployment

- `Docker` for building container images
- `Artifact Registry` for storing the Docker images
- `Google Cloud Run` for the deployment of the Docker images in the cloud in the production environment and development environment
- Continuous integration with `GitHub Actions` for running unit tests and coverage reports
- Continuous delivery/deployment with `GitHub Actions` for building Docker images and deploying Docker images in the cloud
