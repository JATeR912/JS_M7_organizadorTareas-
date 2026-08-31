require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const loggerMiddleware = require('./middleware/logger');
const mainRouter = require('./routes/router');
const db = require('./config/db');

const PORT = process.env.PORT || 3000;

// Configuración del motor de plantillas
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

// Helper para convertir la primera letra en mayúscula
hbs.registerHelper('capitalize', function(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
});

//para que capture error previo al arranque
process.on('uncaughtException', (err) => {
    console.error('Error NO manejado detectado:', err.message);
    process.exit(1);
});

// Registrar el logger middleware
app.use(loggerMiddleware);

// Rutas
app.use('/', mainRouter);

async function iniciarServidor() {
  try {
    await db.connect();
    app.listen(PORT, () => {
      console.log(`Servidor iniciado en puerto ${PORT}`);
    });
  } catch (error) {
    console.error('Error al iniciar el servidor:', error.message);
  }
};

iniciarServidor();