require('dotenv').config();
const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const Usuario = sequelize.define('Usuario', {
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            min: 3,
            msg: 'El nombre debe tener al menos 3 caracteres'
        }
    },
    email: { 
        type: DataTypes.STRING(150),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
            msg: 'El email debe tener un formato válido'
        }
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    fecha_registro: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    activo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    }
},
    {
        tableName: 'usuarios',
        timestamps: false
    }
);

module.exports = {Usuario};