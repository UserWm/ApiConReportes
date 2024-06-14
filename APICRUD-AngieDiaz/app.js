const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path');
const app = express();
const port = 3000;

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuración de rutas estáticas
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(__dirname, 'public'))); // Servir archivos estáticos desde 'public'

// Conexión a MongoDB
const mongoURI = "mongodb://localhost:27017/dbProductos";
mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB Ready"))
  .catch((err) => console.log(err));

// Rutas
const rutaProductos = require("./rutas/productos");
app.use("/api/productos", rutaProductos);

// Ruta para la raíz del servidor
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar el servidor
app.listen(port, () => console.log(`Server Ready in port: ${port}!`));
