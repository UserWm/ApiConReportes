const mongoose = require('mongoose')
const ProductoSchema = new mongoose.Schema({
    producto: {
        type: String,
        require: true
    },
    categoria: {
        type: String,
        require: true
    },

    existencia: {
        type: Number,
        require: true
    },
    precio: {
        type: Number,
        require: true
    },
    imagen: {
        type: String,
        require: true
    },


})
module.exports = mongoose.model('Producto', ProductoSchema)