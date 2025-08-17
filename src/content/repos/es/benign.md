---
title: Clasificador de Tumores Benignos
description: Proyecto sobre entrenamiento de redes neuronales para clasificar tumores de mama entre benignos y malignos.
image: benign-all.png
techs:
  - name: Python
    icon: python
repoUrls:
  - url: https://github.com/AvaibleUser/if-benign-else-malignant
---

## Descripción detallada

- Aplicación de escritorio para clasificar pacientes de cáncer de mama
- La aplicación es capaz de clasificar el tipo de tumor de pacientes basándose en sus características
- Usando el conjunto de datos de la biblioteca scikit-learn, entrena una red neuronal para clasificar los tumores
- El modelo tiene parámetros configurables para ajustar el ritmo de aprendizaje y el número de épocas en la interfaz gráfica, y en el código deja la opción de cambiar el número de neuronas en la capa oculta, la función de activación y la función de costo
- Tiene una interfaz gráfica para graficar los datos, elegir las características a usar para ver la correlación entre ellas, y ajustar los parámetros del modelo
- Tiene una interfaz gráfica para entrenar el modelo, y ver los resultados de la entrenamiento, mostrando el error de clasificación y la frontera de decisión en un gráfico en tiempo real
- La interfaz gráfica se construye usando tkinter y matplotlib
- La red neuronal se implementa usando python puro con arrays numpy
- El código está escrito siguiendo el modo pythonico, con el uso de sugerencias de tipo y el uso del módulo attrs
- El diseño utiliza un enfoque multi-paradigma, usando tanto la programación orientada a objetos como la programación funcional
