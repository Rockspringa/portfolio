---
title: Global Disaster Alerts Platform
description: A microservice for monitoring and early response to disasters (natural and human), integrating AI for data processing and cloud-native deployment.
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

## Real-Time Global Monitoring

This project is a core microservice within a larger humanitarian architecture, focusing on the **ingestion, validation, and visualization** of global crisis alerts. It implements a robust infrastructure capable of handling sensitive data with precision and scalability.

### Backend & Cloud-Native Architecture

- **High-Performance API:** Backend developed with **Hono** and `TypeScript`, focused on speed and strict data typing.
- **Flexible Persistence:** **`MongoDB` Atlas** database for a flexible data schema, ideal for the varied nature of different disaster types (earthquakes, famine, etc.).
- **Intelligent Processing:** AI integration for **image recognition** (filtering inappropriate content) and **Natural Language Processing (NLP)** to classify the sentiment of anonymous citizen reports.

### Frontend & UX Focused on Critical Data

- **Modern Angular:** SPA built with the latest `Angular 20` features (Standalone APIs and Signals), ensuring a fluid and reactive user experience.
- **Geospatial Visualization:** Implementation of an **interactive map** that uses **GeoJSON** data to display the exact location of events, allowing advanced filtering by type, date, and geographic location.
- **Adaptive Design:** Interface styled with Tailwind CSS and DaisyUI, featuring dynamic components that change the alert detail display based on the catastrophe type (e.g., earthquake magnitude vs. famine victims).

### DevOps & Automated Deployment

- **Orchestration with Kubernetes:** Deployment of the entire solution on **Google Cloud Platform (GCP)** using **Kubernetes** to manage the high availability of deployments and services.
- **Configuration Management:** Use of Kubernetes **Secrets and ConfigMaps** to handle sensitive credentials and environment variables securely and decoupled from the source code.
- **Serverless Integration:** Automated notifications implemented using serverless functions (Lambda/Azure Functions) triggered by alert update events.

### Demo Screenshots

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">

![Main screen showing several active alerts in card format.](/src/assets/images/disaster-cards.png)
*Dashboard view with a list of active alerts, prioritized by impact.*

![Earthquake details showing graphs and images.](/src/assets/images/earthquake-details.png)
*Details screen for a natural disaster (earthquake), displaying specific metrics like magnitude and depth.*

![Same screen but with the location section and technical details.](/src/assets/images/earthquake-map-details.png)
*Interactive map and technical details of the epicenter location and impact on nearby towns.*

![Details of a missing person alert, showing data variation.](/src/assets/images/missing-person-details.png)
*Example of a dynamic interface: details of a humanitarian alert (missing person) which vary significantly from a natural disaster.*

![Event timeline showing the evolution of the disaster.](/src/assets/images/event-timeline.png)
*Detailed timeline showing the tracking and evolution of the disaster with timestamps and key locations.*

</div>
