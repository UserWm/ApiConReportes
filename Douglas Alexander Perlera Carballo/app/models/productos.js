const mongoose = require('mongoose');

const ProductosSchema = new mongoose.Schema
({
    producto:{
       
    },
    categoria:{
        type: String,
        
    },
    existencia:{
        type: Number,
        
    },
    precio:{
        type: Number,
        
    },
    imagen:{
        type: String,
        
    },    
});

module.exports = mongoose.model('Producto', ProductosSchema);