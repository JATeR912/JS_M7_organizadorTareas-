# Disper - Organizador de Tareas

Proyecto desarrollado para los Módulos 6, 7 y 8 del programa Talento Digital 2026.

## Descripción del Proyecto

El presente proyecto corresponde al desarrollo progresivo de una aplicación web para la gestión y organización de tareas. Está proyectado para incluir operaciones CRUD, persistencia de datos con bases de datos, gestión de usuarios y autenticación en entregas posteriores.


## Arquitectura Utilizada

El sistema está construido bajo una arquitectura modular, separando responsabilidades mediante controladores, enrutadores y middlewares.

* Backend: Node.js, Express.
* Motor de Plantillas: Handlebars (hbs) con uso de layouts y partials dinámicos.
* Frontend: HTML5, CSS3, Bootstrap 5.3.
* Herramientas de desarrollo: Git, GitHub, Visual Studio Code.


## Estructura del Proyecto
```bash
/
├── controllers/
│   └── indexController.js   # Manejo de controladores de las rutas
├── logs/
│   └── log.txt              # Registro de logs del servidor
├── middleware/
│   └── logger.js            # Middleware para registrar logs
├── public/
│   └── css/
│       └── style.css        # Estilos CSS de la aplicación
├── routes/
│   └── router.js            # Definición de las rutas del sistema
├── views/
│   ├── partials/            # Componentes reutilizables de Handlebars
│   │   ├── footer.hbs
│   │   └── nav.hbs
│   ├── 404.hbs              # Vista para error de ruta no encontrada
│   ├── home.hbs             # Vista de la página de inicio
│   └── tareas.hbs           # Vista del listado de tareas
├── .env                     # Variables de entorno (puerto, configuraciones)
├── .env.example             # Plantilla de ejemplo para variables de entorno
├── .gitignore               # Archivos omitidos por Git (como node_modules)
├── index.js                 # Punto de entrada principal del servidor Express
├── package-lock.json        # Árbol de dependencias exactas
├── package.json             # Configuración del proyecto, dependencias y scripts
└── README.md                # Documentación principal del proyecto
```
## Requisitos e Instalación

### Requisitos previos
Asegúrate de tener instalados en tu sistema:
* Node.js (versión >= 18.0.0 LTS recomendada).
* npm (versión >= 9.0.0).
* Git (para clonar el repositorio).

### Pasos para la instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/JATeR912/JS_M6_M7_M8_organizadorTareas
cd JS_M6_M7_M8_organizadorTareas
```

2. Instalar dependencias del proyecto:
Ejecuta el siguiente comando para instalar las librerías necesarias definidas en el package.json:
```bash
npm install
```
3. Herramienta de desarrollo (Nodemon):
**(Opcional: nodemon está guardado en devDependencies, se instalará automáticamente con npm install).**

El script de desarrollo utiliza nodemon. Si no lo tienes instalado globalmente en tu equipo, puedes instalarlo ejecutando:
```bash
npm install -g nodemon
```

## Ejecución y Scripts

El archivo package.json incluye los siguientes scripts para levantar el servidor:

* Servidor en desarrollo (con recarga automática mediante nodemon):
```bash
npm run dev
```
* Servidor en producción:
```bash
npm start
```
* Ejecución directa sin scripts:
```bash
node index.js
```
### Configuración del Puerto (.env)

El servidor admite la configuración de variables de entorno mediante un archivo .env. Si no se define la variable PORT, el sistema tomará por defecto el puerto 3000.

Crea un archivo .env en la raíz del proyecto (puedes guiarte con .env.example):
```env
PORT=3000
```
Una vez ejecutado el comando de inicio, accede desde tu navegador a:
http://localhost:3000/ (o utilizando el puerto configurado en tu archivo .env).

## Endpoints y Rutas Disponibles

| Método | Ruta | Descripción |
| :--- | :--- | :--- |
| GET | / | Vista de inicio con mensaje de bienvenida renderizado dinámicamente con Handlebars. |
| GET | /tareas | Vista principal del listado de tareas procesadas dinámicamente. |
| GET | /status | Endpoint API que retorna el estado del servidor en formato JSON. |
| ALL | * | Captura de rutas no encontradas (Manejo de error HTTP 404). |

<img width="1918" height="966" alt="image" src="https://github.com/user-attachments/assets/3b848dc2-1587-425d-a8f7-b57a2b9ee931" />


### Respuesta del Endpoint /status
El endpoint /status retorna una respuesta en formato JSON con la siguiente estructura:

<img width="616" height="322" alt="image" src="https://github.com/user-attachments/assets/3fa586e5-e377-45a7-b109-17fa0168e8c1" />

**Para consultar la teoría detallada y justificaciones técnicas del módulo, revisa el archivo [doc/justificacionProyecto.md](./doc/justificacionProyecto.md).**

