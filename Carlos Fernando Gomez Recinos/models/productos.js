const mongoose = require('mongoose');

const ProductosSchema = new mongoose.Schema
({
    producto:{
       
    },
    categoria:{
        type: String,
        required: true
    },
    existencia:{
        type: Number,
        required: true
    },
    precio:{
        type: Number,
        required: true
    },
    imagen:{
        type: String
    },    
});

module.exports = mongoose.model('Producto', ProductosSchema);