---
title: Benign Tumors Classifier
description: A from-scratch implementation of a Deep Neural Network (MLP) for assisted tumor diagnosis, featuring real-time data visualization.
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

## AI Without "Black Boxes"

Unlike using high-level libraries, this project stands out by **manually implementing the learning algorithms**. I developed a fully functional neural network using only linear algebra and calculus, applied to the critical classification of medical tumors.

### Software Engineering & Machine Learning

- **Neural Network from Scratch:** Implementation of the *Backpropagation* algorithm and activation functions using purely **NumPy**, demonstrating a deep understanding of Deep Learning fundamentals.
- **Dynamic Training:** The model allows real-time adjustment of hyperparameters (learning rate, epochs, hidden neurons, and cost functions) directly from the UI to experiment with model convergence.
- **Pythonic Architecture:** Clean and robust code leveraging **Type Hinting** and the `attrs` module for professional-grade data management.
- **Multi-paradigm Design:** Structured approach combining Object-Oriented Programming (OOP) for the network architecture and Functional Programming for data processing.

### Scientific Analysis & Visualization

- **Control Dashboard:** A graphical interface built with **Tkinter** that enables Exploratory Data Analysis (EDA) by selecting variables to identify key correlations.
- **Real-time Monitoring:** Interactive visualization of the **decision boundary** and the error curve during training via **Matplotlib** integration, showcasing how the AI "learns" to separate data points.
- **Industry Dataset:** Leveraged the *Scikit-learn* breast cancer dataset to validate model accuracy against industry-standard benchmarks.
