const express = require('express');
const rutas = express.Router();
const Producto = require('../modelos/productos');
const fs = require('fs');
const path = require('path');
const pdf = require('html-pdf');
const multer = require('multer');

// Configuración de multer para la carga de imágenes
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const carga = multer({ storage: storage });

rutas.get('/', async (req, res) => {
    try {
        const productos = await Producto.find();
        res.status(200).json(productos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

rutas.get('/reporte', async (req, res) => {
    const { categoria, minExistencia } = req.query;

    try {
        let filtro = {};
        if (categoria) {
            filtro.categoria = categoria;
        }
        if (minExistencia) {
            filtro.existencia = { $gte: Number(minExistencia) };
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
                    table {
                        width: 100%;
                        border-collapse: collapse;
                    }
                    th, td {
                        border: 1px solid #ddd;
                        padding: 8px;
                    }
                    th {
                        background-color: #f2f2f2;
                    }
                </style>
            </head>
            <body>
                <h1>Reporte de productos</h1>
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
                                <td>${producto.precio.toFixed(2)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </body>
            </html>
        `;

        const options = {
            format: 'Letter',
            border: {
                top: '0.5in',
                right: '0.5in',
                bottom: '0.5in',
                left: '0.5in'
            }
        };

        pdf.create(htmlContent, options).toFile('./uploads/reporte-productos.pdf', (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'Error al generar el PDF' });
            }

            const filePath = path.join(__dirname, '..', 'uploads', 'reporte-productos.pdf');
            res.download(filePath, (err) => {
                if (err) {
                    return res.status(500).json({ error: 'Error al descargar el PDF' });
                }
                fs.unlinkSync(filePath);
            });
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

rutas.post('/', carga.single('imagen'), async (req, res) => {
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

rutas.put('/:id', carga.single('imagen'), async (req, res) => {
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
        res.status(500).json({ error: err.message });
    }
});

rutas.delete('/:id', async (req, res) => {
    try {
        const productos = await Producto.findByIdAndDelete(req.params.id);
        if (!productos) return res.status(404).json({ error: 'Producto no encontrado' });

        if (productos.imagen) {
            const imagenPath = path.join(__dirname, '..', 'uploads', productos.imagen);
            fs.unlink(imagenPath, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(`Imagen eliminada ${productos.imagen}`);
                }
            });
        }
        res.status(200).json({ message: 'Producto eliminado' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = rutas;
