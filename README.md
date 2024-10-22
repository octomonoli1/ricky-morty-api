# Sobre Ricky Morty API

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 18.2.9. En versión "No Standalone" y servirá como guía para practicar con Angular para los Alumnos de 2º DAW del IES Los Alcores en el Modulo Profesional de Desarrollo Web en Entorno Cliente (DWECL)

## Entorno de desarrollo (DEV)

Se trabajará exclusivamente, por ahora, en un entorno local. Para ello arrancaremos nuestra aplicación usando ng serve -o (Recordar que -o nos ahorra realizar el siguiente paso). 

Navegar usando nuestro navegador de preferencia, recomendado Chrome o Edge, a la URL `http://localhost:4200/`. Esta aplicación desplegada recogerá los cambios que hagamos en el proyecto de forma automatica. Si no es así, paramos y volvemos a arrancar.

El editor de texto de preferencia será Visual Studio Code con los siguientes plugins y herramientas:
- Control de versiones con GIT
- Extensión de Angular

## Generar nuevos elementos

- Componente: Gestiona la vista y la funcionalidad asociada a ella. Una aplicación Angular estará formada por su componente principal, normalemente app-root y todos aquellos nuevos componentes que deseemos crear hijos del mismo.

- Servicio: Guarda la lógica de negocio necesaria para mostrar información. Normalmente es la encargada de realizar las operaciones HTTP a la API. Es fundamental que exista un servicio por cada tipo de datos que extraiga la petición, para no acoplar demasiado la aplicación.

- Model: Representación 1 a 1 del modelo de datos con el que estemos trabajando. Para su confección nos basaremos en el diagrama de clases dado, o extraído a partir de ingeniería inversa de la API en cuestión.

## Documentación

Estamos recreando un ejemplo de consumo de la API de Ricky Morty publicada en su web oficial. Nuestra guía de referencia será el video tutorial asociado a ello y la propia documentación de la API que se encuentran en: 
- https://rickandmortyapi.com/documentation
- https://www.youtube.com/watch?v=hGU2ceM8aVY

