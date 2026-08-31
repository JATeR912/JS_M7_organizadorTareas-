function getHome(req, res) {
    const datos = {
        tituloPrincipal: 'Tu espacio de tareas',
        descripcion: 'Bienvenida a Disper, Organiza tus futuros o proyectos o tus tareas del dia a dia',
        nombreProyecto: 'disper',
        autor: 'JATeR',
        lista:['leer', 'escribir', 'programar', 'dormir', 'comer']
        };
    res.render('home', datos);
};

function getTareas(req, res) {
    const datos = {
        tituloPrincipal: 'Tu espacio de tareas',
        descripcion: 'Bienvenida a Disper, Organiza tus futuros o proyectos o tus tareas del dia a dia',
        nombreProyecto: 'disper',
        autor: 'JATeR',
        lista:['leer', 'escribir', 'programar', 'dormir', 'comer']
        };
  res.render('tareas', datos);
};

function getStatus(req, res) {
  res.json({
    status: 'ok',
    app: 'disper',
    autor: 'JATeR',
    timestamp: new Date().toISOString()
  });
};

const { ejecutarConsulta } = require('../config/db');

const getUsuarios = async (req, res) => {
    try {
        const usuarios = await ejecutarConsulta('SELECT id, nombre, email, fecha_registro, activo FROM usuarios');

        res.status(200).json({
            ok: true,
            total: usuarios.length,
            data: usuarios
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            mensaje: 'Error al obtener usuarios de la base de datos'
        });
    }
};

const getUsuarioById = async (req, res) => {
    const { id } = req.params;
	if (!id || isNaN(id) || parseInt(id) <= 0) {
        return res.status(400).json({
            ok: false,
            mensaje: 'Id de usuario inválido'
        });
    }
    try {
        const usuario = await ejecutarConsulta('SELECT id, nombre, email, fecha_registro, activo FROM usuarios WHERE id = $1', [id]);
        if (usuario.length === 0) {
            return res.status(404).json({
                ok: false,
                mensaje: 'No se encontró el usuario'
            });
        }
        res.status(200).json({
            ok: true,
            data: usuario[0]
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            mensaje: 'Error al obtener usuario de la base de datos'
        });
    }
};

function getNotFound(req, res) {
  res.status(404).render('404', { nombreProyecto: 'disper', autor: 'JATeR' });
}

module.exports = {
    getHome, 
    getTareas, 
    getStatus,    
    getUsuarios,
    getUsuarioById,
    getNotFound
};

