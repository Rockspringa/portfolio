---
title: Clasificador de Tumores Benignos
description: Implementación desde cero de un perceptron de multiples capas (MLP) para el diagnóstico asistido de tumores, con visualización de datos en tiempo real.
image: benign-all.png
order: 3
techs:
  - name: Python
    icon: python
  - name: NumPy
    icon: numpy
  - name: Matplotlib
    icon: python
repoUrls:
  - url: https://github.com/AvaibleUser/if-benign-else-malignant
---

## Inteligencia Artificial sin "Cajas Negras"

A diferencia de usar librerías pre-construidas, este proyecto destaca por la **implementación manual de los algoritmos de aprendizaje**. Desarrollé una red neuronal funcional utilizando únicamente álgebra lineal y cálculo, aplicada a la clasificación crítica de tumores médicos.

### Ingeniería de Software y Machine Learning

- **Red Neuronal desde Cero:** Programación del algoritmo de *Backpropagation* y funciones de activación utilizando puramente **NumPy**, demostrando un dominio profundo de los fundamentos del Deep Learning.
- **Entrenamiento Dinámico:** El modelo permite ajustar hiperparámetros (learning rate, épocas, neuronas ocultas y funciones de coste) directamente desde la interfaz, permitiendo experimentar con la convergencia del modelo.
- **Arquitectura Pythonic:** Código limpio y robusto utilizando **Type Hinting** y el módulo `attrs` para una gestión de datos eficiente y profesional.
- **Multiparadigma:** Diseño estructurado combinando Programación Orientada a Objetos (POO) para la arquitectura de la red y Programación Funcional para el procesamiento de datos.

### Visualización y Análisis Científico

- **Dashboard de Control:** Interfaz gráfica desarrollada con **Tkinter** que permite realizar Análisis Exploratorio de Datos (EDA) seleccionando variables para identificar correlaciones.
- **Monitorización en Tiempo Real:** Visualización interactiva de la **frontera de decisión** y la curva de error durante el entrenamiento mediante la integración de **Matplotlib**, lo que permite ver cómo la IA "aprende" a separar los datos.
- **Dataset de Referencia:** Utilización del dataset científico de cáncer de mama de *Scikit-learn* para validar la precisión del modelo contra estándares de la industria.
