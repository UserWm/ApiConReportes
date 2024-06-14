const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Productoschema = new mongoose.Schema({
    producto: {
        type: String, 
        required: true
    },
    categoria: {
        type: String, 
        required: true
    },
    existencia: {
        type: Number, 
        required: true
    },
    precio: {
        type: Number, 
        required: true
    },
    imagen: {
        type: String, 
        required: false
    }

});

module.exports = mongoose.model('Producto', Productoschema);
