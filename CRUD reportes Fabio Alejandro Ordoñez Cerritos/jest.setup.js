const mongoose = require('mongoose');

beforeAll(async () => {
    const url = 'mongodb://localhost:27017/testUnit';
    mongoose.connect(url)
        .then(() => console.log('MongoDB pruebas conectado'))
        .catch(err => console.log(err));
});

afterAll(async () => {
    if (mongoose.connect.readyState === 1) {
        await mongoose.connection.close();
        console.log('Conexión a MongoDB cerrada');
        await mongoose.connection.db.dropDatabase();
    }
});

