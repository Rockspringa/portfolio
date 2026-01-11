---
title: Scrum Project Management Platform
description: Comprehensive Agile/Scrum project management system featuring microservice architecture, Event-Driven Architecture (EDA), and cloud-native deployment.
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

## High-Level Agile Management

This project is an end-to-end project management system designed from scratch to emulate and surpass functionalities of tools like Jira, focusing on architectural robustness and operational efficiency. The solution is built upon **Domain-Driven Design (DDD)** principles and **hexagonal architecture**.

### Backend & Enterprise Architecture (DDD, Hexagonal, EDA)

- **Microservices Ecosystem:** Implemented **6 autonomous microservices** (Scrum Core, Auth, Finance, Notifications, Reports, API Gateway), all developed with `Spring Boot`.
- **100% Asynchronous Communication:** All inter-service communication is managed via **Event-Driven Architecture (EDA)** using `Kafka`, ensuring total decoupling and high availability.
- **DDD and Minimal Replication:** Application of **Domain-Driven Design (DDD)** with hexagonal architecture. Information needed in other domains is minimally and controlledly replicated, avoiding monolithic dependencies.
- **Analytical Data Store:** The reporting service functions as an **ETL** process that feeds a **Data Warehouse** in a star schema, optimized for performance and financial analysis (Dimensions, Facts, and a global audit table).

### Frontend & Productivity UX

- **Interactive Kanban Dashboard:** Interface built with `Angular` (Tailwind CSS, DaisyUI) that includes a Kanban board with drag-and-drop functionality to manage the flow of user stories and sprints.
- **Intuitive Experience:** Interface design focused on usability to facilitate adoption by technical and administrative staff.

### DevOps & Software Quality

- **Dockerized Ecosystem:** The entire application is packaged in `Docker` containers and deployed on **GCP**, ensuring a 100% production environment.
- **Rigorous Testing:** Implementation of unit and integration tests to ensure code quality and system reliability.

### Demo Screenshots

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">

![View of the general project backlog with pending tasks and priorities.](/src/assets/images/backlog.png)
*Main screen of the product backlog, showing user stories with weight (story points) and priorities.*

![Kanban board for an active sprint.](/src/assets/images/stories.png)
*Interactive Kanban board, managing the flow of tasks from "To Do" to "Done" with drag-and-drop functionality.*

![Log of changes and activity on user stories.](/src/assets/images/stories-log.png)
*Detailed view of the event log and activity for a user story, recording every change and participant.*

![Financial report of profits and expenses.](/src/assets/images/report.png)
*Example of a financial profit report, consolidating income and operating expenses for the project.*

</div>
