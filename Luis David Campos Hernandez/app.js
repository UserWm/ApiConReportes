const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const puppeteer = require('puppeteer')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


const mongoURI = 'mongodb://localhost:27017/inventario';
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


const productRoutes = require('./rutas/productos');
app.use('/api/productos', productRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto : ${PORT}`);
});
