const express = require('express');
const router = express.Router();
const { validarId } = require('../middleware/validarId');
const {validarCrearUsuario, validarActualizarUsuario} = require('../middleware/validarUsuario');
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
} = require('../controllers/indexController');


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

// Ruta no encontrada
router.use(getNotFound);

module.exports = router;
