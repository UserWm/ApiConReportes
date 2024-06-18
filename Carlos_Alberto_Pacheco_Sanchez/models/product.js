import mongoose from "mongoose"


export const productModel = mongoose.model("Product", new mongoose.Schema({
    product: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },

    stock: {
        type: Number,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    img: {
        type: String,
        require: true
    },
}))