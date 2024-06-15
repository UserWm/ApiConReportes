const mongoose = require('mongoose');

beforeAll(async () => {
    const url = `mongodb://localhost:27017/testUnit`;
    mongoose.connect(url).
    then(() => console.log('MongoDB para pruebas conectado')).
    catch((err) => console.log(err));
});

afterAll(async () => {
    if (mongoose.connection.readyState === 1) {
        await mongoose.connection.db.dropDatabase();
        await mongoose.connection.close();
        console.log('MongoDB para pruebas desconectado');
    }
});