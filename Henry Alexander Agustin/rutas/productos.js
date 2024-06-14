const express = require('express')
const rutas = express.Router()
const Producto = require('../modelos/productos')
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const puppeteer = require('puppeteer');

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb){
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const carga = multer({storage: storage})

rutas.get('/', async (req, res) => {
    try {
        const productos = await Producto.find()
        res.status(200).json(productos)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

rutas.get('/reporte', async (req, res) => {
    const { categoria, minExistencia } = req.query;
    
    try {
        let filtro = {}
        if (categoria) {
            filtro.categoria = categoria
        }
        if (minExistencia) {
            filtro.existencia = { $gte: Number(minExistencia)}
        }
        const productos = await Producto.find(filtro)
        const htmlContent = `
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Reportes</title>
                <style>
                    body { font-family: Arial, sans-serif; }
                    h1 { text-align: center; }
                    table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                    th, td { border: 1px solid #ddd; padding: 8px; }
                    th { background-color: #f2f2f2; }
                </style>
            </head>
            <body>
                <main>
                    <h1>Reporte de Productos</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Categoria</th>
                                <th>Existencia</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${productos.map(producto => `
                                <tr>
                                    <th>${producto.producto}</th>
                                    <th>${producto.categoria}</th>
                                    <th>${producto.existencia}</th>
                                    <th>${producto.precio.toFixed(2)}</th>
                                </tr>
                                `).join('')}
                        </tbody>
                    </table>
                </main>
            </body>
        </html>
        `
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.setContent(htmlContent, {waitUntil: 'networkidle0'})
        const pdfBuffer = await page.pdf({format: 'A4'})
        await browser.close()
        console.log('PDF creado');

        const timespan = new Date().toISOString().replace(/:/g, '-')
        const pdfFilename = `reporte-#${timespan}.pdf`

        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': `attachment; filename=${pdfFilename}`,
            'Content-Lenght': pdfBuffer.length,
        })
        res.send(pdfBuffer)
    } catch (error) {
        console.log('Error al generar reporte', error);
        res.status(500).json({ error: error.message })
    }
})

rutas.post('/', carga.single('imagen') , async (req, res) => {
    const { producto, categoria, existencia, precio } = req.body
    const imagen = req.file ? req.file.filename : null
    try {
        const nuevoProducto = new Producto({producto, categoria, existencia, precio, imagen})
        await nuevoProducto.save()
        res.status(201).json(nuevoProducto)
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
  })

rutas.put('/:id', carga.single('imagen') , async (req, res)=> {
    const { producto, categoria, existencia, precio } = req.body
    const imagen = req.file ? req.file.filename : null

    try {
        const productos = await Producto.findById(req.params.id)
        if (!productos) {
            return res.status(404).json({error: 'Producto no encontrado'})
        }
        
        productos.producto = producto || productos.producto
        productos.categoria = categoria || productos.categoria
        productos.existencia = existencia || productos.existencia
        productos.precio = precio || productos.precio
        if (imagen) {
            productos.imagen = imagen
        }

        await productos.save()
        return res.status(200).json(productos)
        } catch (err) {
        return res.status(500).json({error: err.message})
    }
})

rutas.delete('/:id', async (req, res)=> {
    try {
        const productos = await Producto.findByIdAndDelete(req.params.id)
        if (!productos) {
            return res.status(404).json({error: 'Producto no encontrado'})
        }
        if (productos.imagen) {
            const imagenPath = path.join(__dirname, '..', 'uploads', productos.imagen)
            fs.unlink(imagenPath, (err)=> {
                if (err) {
                    console.log('Error al eliminar la imagen');
                    } else {
                    console.log('Imagen eliminada', productos.imagen);
                }
            })
        }
        return res.status(200).json({message: 'Producto eliminado'})
        } catch (err) {
        return res.status(500).json({error: err.message})
    }
})

rutas.get('/:id', async (req, res) => {
    try {
        const productos = await Producto.findById(req.params.id)
        if (!productos) {
            return res.status(404).json({error: 'Producto no encontrado'})
        }
        res.status(200).json(productos)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

module.exports = rutas