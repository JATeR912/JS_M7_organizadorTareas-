require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const loggerMiddleware = require('./middleware/logger');
const mainRouter = require('./routes/router');

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

// Registrar el logger middleware
app.use(loggerMiddleware);

// Rutas
app.use('/', mainRouter);

app.listen(PORT, () => {
  console.log(`Servidor iniciado en puerto ${PORT}`);
});