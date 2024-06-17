const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Producto', ProductSchema);
