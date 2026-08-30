# Justificación Técnica del Proyecto

Este documento detalla las decisiones de arquitectura, fundamentos teóricos y decisiones de diseño implementadas en el desarrollo de la aplicación **Disper**.

---

## 1. Ecosistema Node.js y Entorno de Ejecución

La aplicación está construida sobre **Node.js**, aprovechando sus características principales para el desarrollo backend:

* **Entorno de ejecución asíncrono y no bloqueante:** Permite gestionar múltiples peticiones de manera eficiente en un solo hilo (single-thread) mediante el Event Loop.
* **Motor V8:** Compila y ejecuta JavaScript directamente a código máquina de alto rendimiento.
* **Arquitectura modular:** Facilita la separación de responsabilidades y la escalabilidad del código de cara a futuras entregas (integración de bases de datos, autenticación y operaciones CRUD).

---

## 2. Aporte de Express.js sobre Node.js Nativo

Aunque Node.js incluye el módulo nativo `http` para la creación de servidores, se incorporó **Express.js** como framework web por los siguientes motivos:

* **Enrutamiento simplificado:** Facilita la declaración y gestión clara de métodos HTTP (GET, POST, PUT, DELETE) y parámetros de URL.
* **Sistema de Middlewares:** Permite interceptar, procesar y auditar peticiones HTTP de forma modular (como el middleware de logger o el servicio de archivos estáticos).
* **Integración de Motores de Plantillas:** Proporciona una interfaz limpia para la renderización de vistas dinámicas utilizando Handlebars (`hbs`).
* **Manejo de respuestas HTTP:** Abstrae la configuración de cabeceras mediante métodos expresivos como `res.json()` y `res.status()`.

---

## 3. Esquema del Flujo Servidor – Cliente

El ciclo de vida de una petición HTTP en la aplicación sigue la siguiente secuencia:

<img width="995" height="283" alt="image" src="https://github.com/user-attachments/assets/c64d5577-2aba-4478-878e-b795f405b6a9" />

---

## 4. Estructura y Convenciones del Código

### Punto de Entrada (`index.js`)
Se utiliza `index.js` como punto de entrada principal por convención en el ecosistema de Node.js. Esto mantiene alineación directa con la propiedad `"main": "index.js"` definida en el archivo `package.json`, estableciendo un origen de ejecución claro y estandarizado.

### Integración de Controladores y Rutas
Se implementó el patrón de separación de rutas y controladores para desacoplar la definición de los endpoints de la lógica de negocio. Esta separación favorece la mantenibilidad, legibilidad y reutilización del código a medida que el proyecto incremente su complejidad en los siguientes módulos.

### Decisiones de Manejo de Datos (Alcance Entrega 1)
En esta primera etapa, la información se maneja mediante arreglos de datos en memoria (hardcoded) dentro de las funciones correspondientes. Aunque esto genera cierta repetición de constantes locales entre funciones, se optó por esta estrategia para garantizar el aislamiento de alcance (scope local), prevenir mutaciones no deseadas en el estado global y mantener la modularidad a la espera de la integración formal con bases de datos.
