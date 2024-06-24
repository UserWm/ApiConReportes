const mongoose = require('mongoose')

const ProductoShema = new mongoose.Schema({
    producto:{
        type: String,
        require:true
    },

    categoria:{
        type: String,
        require:true
    },

    existencia:{
        type: Number,
        require:true
    },

    precio:{
        type: Number,
        require:true
    },
    imagen:{
        type: String,
        require:true
    }
})
//Para la exportación           //nombre de la colección
module.exports = mongoose.model('Producto', ProductoShema)