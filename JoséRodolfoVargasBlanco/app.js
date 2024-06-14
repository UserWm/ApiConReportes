const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path'); // Cambiado a minúsculas para seguir el estándar

const app = express();
const port = 3000;

// Middlewares
app.use(bodyParser.json());

// Configuración de rutas estáticas
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(__dirname, 'public')));

// Conexión a MongoDB
const mongoURI = "mongodb://localhost:27017/dbProductos";
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }) // Añadido opciones para evitar advertencias
  .then(() => console.log("MongoDB Ready"))
  .catch((err) => console.log(err));

// Rutas
const rutaProductos = require("./rutas/productos");
app.use("/api/productos", rutaProductos); // Cambiado a plural para coincidir con el archivo HTML

// Iniciar el servidor
app.listen(port, () => console.log(`Server Ready in port: ${port}!`));
