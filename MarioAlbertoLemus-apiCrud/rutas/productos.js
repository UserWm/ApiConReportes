const express = require('express')
const rutas = express.Router()
const Producto  = require('../modelos/productos.js')
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const puppeteer = require('puppeteer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const carga = multer({storage:storage})

// get reporte
rutas.get('/reporte', async(req, res) => {
    const {categoria, minExistencia} = req.query
    try {
        let filtro = {}
        if(categoria) {
            filtro.categoria = categoria
        }
        if (minExistencia) {
            filtro.existencia = {$gte:Number(minExistencia)}
        }

        const productos = await Producto.find(filtro)
        const htmlContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <style>
                        body { font-family: Arial, sans-serif; }
                        h1 { text-align: center; }
                        table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                        th, td { border: 1px solid #ddd; padding: 8px; }
                        th { background-color: #f2f2f2; }
                    </style>
                <body>
            </head>
                <h1>Reporte de productos<h1>
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
                            <td><p>${producto.producto}</p></td>
                            <td><p>${producto.categoria}</p></td>
                            <td><p>${producto.existencia}</p></td>
                            <td><p>${producto.precio.toFixed(2)}</p></td>
                        </tr>
                        `
                    ).join('')}

                    </tbody>
                </table>
            </body>
            </html>`;
            const browser = await puppeteer.launch({
                headless: true,
                args: ['--no-sandbox', '--disable-setuid-sandbox']
            })
            const page = await browser.newPage()
            await page.setContent(htmlContent, {waitUntil: 'networkidle0'})
            const pdfBuffer = await page.pdf({format: 'A4'})
            await browser.close()

            const timespan = new Date().toISOString().replace(/:/g, '-')
            const pdfFilename = `reporte-${timespan}.pdf`
            res.set({
                'Content-Type': 'application/pdf',
                'Content-Disposition': `attachment; filename=${pdfFilename}`,
                'Content-Length': pdfBuffer.length 
            })
            res.send(pdfBuffer)
    } catch (error) {
        console.log('Error al generar reporte: ', error)
        res.status(500).json({error:error.message})
    }
})


rutas.get('/', async(req, res) => {
    try {
        const productos = await Producto.find()
        res.status(200).json(productos)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

rutas.get('/:id', async(req, res) => {
    const { id } = req.params
    try {
        const productos = await Producto.findById(id)
        if (!productos) {
            res.status(404).json({error: 'Producto no enontrado'})
        } else {
            res.status(200).json(productos)
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})


rutas.post('/', carga.single('imagen'), async function (req, res) {
    const  {producto, categoria, existencia, precio} = req.body
    const imagen = req.file ? req.file.filename : null
    try {
        const nuevoProducto = Producto({producto, categoria, existencia, precio, imagen})
        await nuevoProducto.save()
        res.status(201).json(nuevoProducto)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

rutas.put('/:id', carga.single('imagen'), async function(req, res) {
    const { id } = req.params;
    const { producto, categoria, existencia, precio } = req.body;
    const imagen = req.file ? req.file.filename : null
    try {
        const productos = await Producto.findById(id)
        if (!productos) {
            return res.status(404).json({error:'Producto no encontrado'})
        } else {
            productos.producto = producto || productos.producto
            productos.categoria = categoria || productos.categoria
            productos.existencia = existencia || productos.existencia
            productos.precio = precio || productos.precio
            if (imagen) productos.imagen = imagen
            await productos.save()
            res.status(200).json(productos)
        }    
    } catch (error) {
        res.status(500).json({error: error.message})
    }
});

rutas.delete('/:id', async function(req, res) {
    const { id } = req.params;

    try {
        const productos = await Producto.findByIdAndDelete(id)
        if (!productos) {
            return res.status(404).json({error: 'Producto no encontrado'})
        }
        else if(productos.imagen) {
            const imagenPath = path.join(__dirname, '..', 'uploads', productos.imagen)
            fs.unlink(imagenPath, (err) => {
                if (err) {
                    console.log('Error al eliminar la imagen')
                    res.status(500).json({error: err.message})        
                } else {
                    console.log('imagen eliminada', productos.imagen)
                    res.status(200).json({message: 'Producto eliminado'})
                }
            })
        } else {
            res.status(200).json({message: 'Producto eliminado'})
        }
    } catch (error) {
        res.status(500).json({error: error.message})        
    }
});

module.exports = rutas