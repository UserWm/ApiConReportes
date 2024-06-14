const mongoose = require("mongoose");

beforeAll(async () => {
  const URL = process.env.DATABASE_CONNECTION_TEST;
  mongoose
    .connect(URL)
    .then(() => console.log("MongoDB pruebas conectado"))
    .catch((err) => console.log(err));
});

afterAll(async () => {
  if (mongoose.connection.readyState === 1) {
    await mongoose.connection.close();
    console.log("Conexión a MongoDB cerrada");
    await mongoose.connection.dropDatabase();
  }
});
