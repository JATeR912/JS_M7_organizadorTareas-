const { Usuario, Perfil } = require('../models/modelsIndex');
const { registrarErrorLog } = require('../middleware/logger');

async function getPerfilUsuarioById(req, res) {
    const { id } = req.params;

    try {
        // Obtener el usuario por su ID y su perfil asociado pidiendo atributos específicos de cada modelo (para evitar enviar contraseñas)
        const usuario = await Usuario.findByPk(id, {attributes: ['id', 'nombre', 'email', 'fecha_registro'], include: {model: Perfil, as: 'perfil', attributes: ['id', 'avatar_url','telefono', 'sobre_mi']}});

    if (!usuario) {
        return res.status(404).json({
            ok: false,
            mensaje: 'No se encontró el usuario'
        });
    }
    res.status(200).json({
        ok: true,
        data: usuario
    });
    } catch (error) {
        registrarErrorLog('getUsuarioById', error.message);
        res.status(500).json({
            ok: false,
            mensaje: 'Error al obtener usuario de la base de datos'
        });
    }
};

module.exports = { getPerfilUsuarioById };