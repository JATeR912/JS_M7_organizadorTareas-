require('dotenv').config()
const {Client} = require('pg')

async function probarConexionClient(){
    const client = new Client({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
    });
    try{
        await client.connect();
        console.log('Conexion a postgreSQL con client correcta');
    }catch(err){
        console.error('Error al conectar con client:', err.message);
    }finally{
        await client.end();
        console.log('Conexion client cerrada');
    }
};

module.exports = {probarConexionClient};
probarConexionClient();