const fs = require("fs");
const path = require('path');
const multer = require('multer');
const express = require('express');
const rutas = express.Router();
const puppeteer = require('puppeteer');
const Producto = require('../models/productos.js');

const storage = multer.diskStorage(
{
    destination: function (req, file, cb)
    {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb)
    {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const carga = multer({storage: storage});

// Metodo get para el reporte
rutas.get('/reporte', async (req, res) => 
{
    const { categoria, minExistencia } = req.query;
    try {
        // const productos = await Producto.find();
        
        let filtro = {};
        if(categoria)
        {
            filtro.categoria = categoria;
        }

        if(minExistencia)
        {
            filtro.existencia = { $gte: Number(minExistencia)};
        }
        const productos = await Producto.find(filtro);

        const htmlContent = 
        `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <style>
                body { font-family: Arial, sans-serif; }
                h1 { text-align: center; }
                table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                th, td { border: 1px solid #ddd; padding: 8px; }
                th { background-color: #f2f2f2; }
            </style>
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
                                <td>${producto.precio}</td>
                            </tr>
                        `)}
                    </tbody>
                </table>
            </body>
            </html>
        `;

        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setContent(htmlContent, {waitUntil: 'networkidle0'});
        const pdfBuffer = await page.pdf({format: 'A4'});
        await browser.close();

        const timeSpan = new Date().toISOString().replace(/:/g, '-');
        const pdfFilename = `reporte-${timeSpan}.pdf`;

        res.set
        ({
            'Content-Type': 'application/pdf',
            'Content-Disposition': `attachment; filename=${pdfFilename}`,
            'Content-Length': pdfBuffer.length
        });

        res.send(pdfBuffer);

    } catch (error) {
        
    }
});

rutas.get('/', async (req, res) => 
{
    try
    {
        const productos = await Producto.find();
        res.status(200).json(productos);
    }catch(error){
        console.error(error);
        res.status(500).json({error: error});
    }
});

rutas.post('/', carga.single('imagen'), async (req, res) => 
{
    const { producto, categoria, existencia, precio } = req.body;
    const imagen = req.file ? req.file.filename: null;
    try
    {
        const nuevoProducto = new Producto({producto, categoria, existencia, precio, imagen});
        await nuevoProducto.save();
        res.status(201).json(nuevoProducto);
    }catch(error){
        console.error(error);
        res.status(500).json({error: error});    
    }
});

rutas.put('/:id', carga.single('imagen'), async (req, res) => 
{
    const { producto, categoria, existencia, precio } = req.body;
    const imagen = req.file ? req.file.filename: null;
    try 
    {
        const productoDB = await Producto.findById(req.params.id);
        if(!producto)
        {
            return res.status(404).json({error: "Producto no encontrado"});
        }
        
        productoDB.producto = producto || productoDB.producto
        productoDB.categoria = categoria || productoDB.categoria
        productoDB.existencia = existencia || productoDB.existencia
        productoDB.precio = precio || productoDB.precio

        if(imagen)
        {
            productoDB.imagen = imagen;
        }

        await productoDB.save();
        res.status(200).json(productoDB);

    } catch (error) {
        console.error(error);
        res.status(500).json({erro: error});
    }
});

rutas.delete('/:id', async (req, res) => 
{
    try 
    {
        const producto = await Producto.findByIdAndDelete(req.params.id);
        if(!producto)
        {
         return res.status(404).json({erro: "Producto No Encontrado"});
        }

        res.status(200).json({message: "Producto Eliminado"});    
    } catch (error) {
        res.status(500).json({error: error});   
    }
});

rutas.get('/:id', async (req, res) => 
{
    try 
    {
        const producto = await Producto.findById(req.params.id);
        if(!producto)
        {
            return res.status(404).json({message: "Producto No Encontrado"});
        }    

        res.status(200).json(producto);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error});
    }
});

module.exports = rutas;