const express = require('express');
const router = express.Router();
const { getHome, getTareas, getStatus, getNotFound } = require('../controllers/indexController');

router.get('/', getHome);
router.get('/Tareas', getTareas); 
router.get('/status', getStatus);

router.use(getNotFound);

module.exports = router;
