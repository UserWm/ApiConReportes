const mongoose = require('mongoose');

beforeAll(async () => {
    try {
        const url = 'mongodb://localhost:27017/testUnit';
        await mongoose.connect(url);
        console.log('MongoDB pruebas conectado');
    } catch (error) {
        console.error('Error al conectar con MongoDB:', error);
    }
});

afterAll(async () => {
    try {
        if (mongoose.connection.readyState === 1) {
            await mongoose.connection.db.dropDatabase();
            console.log('Base de datos de pruebas eliminada');
            await mongoose.connection.close();
            console.log('Conexión a MongoDB cerrada');
        }
    } catch (error) {
        console.error('Error al cerrar la conexión con MongoDB:', error);
    }
});
