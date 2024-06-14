const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Path = require('path');

const rutaProductos = require("./routes/productos.js");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const mongoURI = "mongodb://localhost:27017/DBProductos";

app.use('/uploads', express.static(Path.join(__dirname, 'uploads')));
app.use(express.static(Path.join(__dirname, 'public')));

mongoose.connect(mongoURI)
    .then(() => console.log("MongoDB conectado"))
    .catch(error => console.error(error));

app.use('/api/producto', rutaProductos);

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));