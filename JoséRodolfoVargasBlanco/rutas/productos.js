const express = require('express');
const rutas = express.Router();
const Producto = require('../modelos/productos');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const puppeteer = require('puppeteer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const carga = multer({ storage: storage });

// Asegúrate de definir las rutas específicas primero
rutas.get('/reporte', async (req, res) => {

    const { categoria, minExistencia } = req.query;

    try {

        let filtro = {}
        if(categoria){
            filtro.categoria = categoria
        }
        if(minExistencia){
            filtro.existencia = { $gte:Number(minExistencia)};
        }
        const productos = await Producto.find(filtro);
        const htmlContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Reporte de productos</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 20px;
                        padding: 0;
                        background-color: #f8f9fa;
                        color: #333;
                    }
                    h1 {
                        text-align: center;
                        margin-bottom: 30px;
                        color: #007bff;
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-bottom: 20px;
                    }
                    th, td {
                        border: 1px solid #ddd;
                        padding: 12px;
                        text-align: left;
                    }
                    th {
                        background-color: #f2f2f2;
                        color: #333;
                    }
                    tr:nth-child(even) {
                        background-color: #f9f9f9;
                    }
                    tr:hover {
                        background-color: #f1f1f1;
                    }
                    .footer {
                        text-align: center;
                        margin-top: 20px;
                        font-size: 12px;
                        color: #888;
                    }
                </style>
            </head>
            <body>
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
                                <td>${producto.producto}</td>
                                <td>${producto.categoria}</td>
                                <td>${producto.existencia}</td>
                                <td>$${producto.precio.toFixed(2)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
                <div class="footer">
                    Reporte generado el ${new Date().toLocaleDateString()}
                </div>
            </body>
            </html>
        `;
        
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
        const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true });
        await browser.close();

        const timespan = new Date().toISOString().replace(/:/g, '-');
        const pdfFileName = `report-${timespan}.pdf`;

        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': `attachment; filename=${pdfFileName}`,
            'Content-Length': pdfBuffer.length
        });
        res.send(pdfBuffer);
    } catch (error) {
        console.log('Error al generar el reporte: ', error);
        res.status(500).json({ error: error.message });
    }
});

rutas.get('/', async (req, res) => {
    try {
        const productos = await Producto.find();
        res.status(200).json(productos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

rutas.post('/', carga.single('imagen'), async function (req, res) {
    const { producto, categoria, existencia, precio } = req.body;
    const imagen = req.file ? req.file.filename : null;
    try {
        const nuevoProducto = new Producto({ producto, categoria, existencia, precio, imagen });
        await nuevoProducto.save();
        res.status(201).json(nuevoProducto);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

rutas.put('/:id', carga.single('imagen'), async function (req, res) {
    const { producto, categoria, existencia, precio } = req.body;
    const imagen = req.file ? req.file.filename : null;
    try {
        const productos = await Producto.findById(req.params.id);
        if (!productos) return res.status(404).json({ error: 'Producto no encontrado' });

        if (imagen && productos.imagen) {
            fs.unlink(path.join(__dirname, '../uploads', productos.imagen), (err) => {
                if (err) console.log(err);
            });
        }

        productos.producto = producto || productos.producto;
        productos.categoria = categoria || productos.categoria;
        productos.existencia = existencia || productos.existencia;
        productos.precio = precio || productos.precio;
        if (imagen) productos.imagen = imagen;
        await productos.save();
        res.status(200).json(productos);
    } catch (err) {
        res.status500().json({ error: err.message });
    }
});

rutas.delete('/:id', async function (req, res) {
    try {
        const productos = await Producto.findByIdAndDelete(req.params.id);
        if (!productos) return res.status(404).json({ error: 'Producto no encontrado' });

        if (productos.imagen) {
            const imagenPath = path.join(__dirname, '../uploads', productos.imagen);
            fs.unlink(imagenPath, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(`Imagen eliminada ${productos}`);
                }
            });
        }
        res.status(200).json({ message: 'Producto eliminado' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

rutas.get('/:id', async (req, res) => {
    try {
        const productos = await Producto.findById(req.params.id);
        if (!productos) return res.status(404).json({ error: 'Producto no encontrado' });
        res.status(200).json(productos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = rutas;
