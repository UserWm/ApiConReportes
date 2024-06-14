const mongoose = require('mongoose');

beforeAll(async () => 
{
    const url = 'mongodb://localhost:27017/testUnit';
    mongoose.connect(url)
        .then(() => console.log("Base de pruebas conectada"))
        .catch(error => console.error(error)); 
})

afterAll(async () => 
{
    if(mongoose.connection.readyState === 1)
    {
        await mongoose.connection.close();
        console.log('Conexion a mongo cerrada');
        await mongoose.connection.db.dropDatabase();
    }
})