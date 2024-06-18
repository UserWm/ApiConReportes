import { Router } from 'express'
import fs from "node:fs"

import { productModel } from '../models/product.js'
import { uploadMiddleware } from '../middlewares/upload.js'

export const productRoutes = Router()

productRoutes.get('/', async (req, res) => {
    try {
        const productos = await productModel.find()
        res.status(200).json(productos)
    } catch (err) {
        res.status(500).json({ error: err.message })

    }
})

productRoutes.post('/', uploadMiddleware.single('img'), async function (req, res) {
    const { product, category, stock, price } = req.body
    const img = req.file ? req.file.filename : null
    try {
        const nuevoProducto = new productModel({ product, category, stock, price, img })
        await nuevoProducto.save()
        res.status(201).json(nuevoProducto)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }


})


productRoutes.put('/:id', uploadMiddleware.single('imagen'), async function (req, res) {
    const { producto, categoria, existencia, precio } = req.body
    const imagen = req.file ? req.file.filename : null
    try {
        const productos = await productModel.findById(req.params.id)
        if (!productos) {

            return res.status(404).json({ error: "Producto no encontrado" })
        }
        productos.producto = producto || productos.producto
        productos.categoria = categoria || productos.categoria
        productos.existencia = existencia || productos.existencia
        productos.precio = precio || productos.precio
        if (imagen)
            producto.imagen = imagen

        await productos.save()
        res.status(200).json(productos)


    } catch (err) {
        res.status(500).json({ error: err.message })
    }


})

productRoutes.delete('/:id', async function (req, res) {

    try {
        const productos = await productModel.findByIdAndDelete(req.params.id)
        if (!productos) {

            return res.status(404).json({ error: "Producto no encontrado" })
        }
        if (productos.imagen) {
            const imagenPath = path.join(__dirname, '..', 'uploads', productos.imagen)

            fs.unlink(imagenPath, (err) => {
                if (err) {
                    console.log('error al eliminar')
                } else {
                    console.log('imagen eliminada: ', productos.imagen)
                }
            })

        }
        res.status(200).json({ message: 'Producto eliminado' })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }


})

productRoutes.get('/:id', async function (req, res) {

    try {
        const productos = await productModel.findById(req.params.id)
        if (!productos) {

            return res.status(404).json({ error: "Producto no encontrado" })
        }
        res.status(200).json(productos)

    } catch (err) {
        res.status(500).json({ error: err.message })
    }


})


