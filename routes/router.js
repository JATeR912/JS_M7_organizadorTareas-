const express = require('express');
const router = express.Router();
const { validarId } = require('../middleware/validarId');
const {validarCrearUsuario, validarActualizarUsuario} = require('../middleware/validarUsuario');
const { registroAvanceTransaccion } = require('../controllers/transaccionController');
const { 
    getHome, 
    getTareas, 
    getStatus,
    postUsuario, 
    getUsuarios, 
    getUsuarioById,
    updateUsuarioById, 
    deleteUsuarioById, 
    getNotFound 
//} = require('../controllers/indexController');  Quitar comentario para prubas con client y verificar rutas
} = require('../controllers/controllerUsuarioSequelize');  //Comentar para prubas con client y verificar rutas
const { getPerfilUsuarioById } = require('../controllers/controllerPerfilSequelize');  //No funcional para pruebas con client
const { getProyectosUsuarioById } = require('../controllers/controllerProyectoSequelize');  //No funcional para pruebas con client

// Rutas
router.get('/', getHome);
router.get('/Tareas', getTareas); 
router.get('/status', getStatus);

// Rutas para usuarios
router.post('/usuarios', validarCrearUsuario, postUsuario);
router.get('/usuarios', getUsuarios);
router.get('/usuarios/:id', validarId, getUsuarioById);
router.put('/usuarios/:id', validarId, validarActualizarUsuario, updateUsuarioById);
router.delete('/usuarios/:id', validarId, deleteUsuarioById);

//Rutas para perfiles
router.get('/usuarios/:id/perfil', validarId, getPerfilUsuarioById);  //No ejecutar para pruebas con client

// Rutas para proyectos
router.get('/usuarios/:id/proyectos', validarId, getProyectosUsuarioById); ///No ejecutar para pruebas con client

// Rutas para transacciones
router.post('/usuarios/:id/avance', validarId, registroAvanceTransaccion);

// Ruta no encontrada
router.use(getNotFound);

module.exports = router;
