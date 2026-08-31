require('dotenv').config()
const {Client} = require('pg')

async function probarConexionClient(){
    const client = new Client({
    connectionString: process.env.DATABASE_URL,
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