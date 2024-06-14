const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const multer = require('multer');
const puppeteer = require('puppeteer');

// Configuración de multer para almacenar los archivos subidos
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/'); // Guardar imágenes en la carpeta public/uploads
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Método GET para reporte en PDF
router.get('/reporte', async (req, res) => {
    // Obtener los parámetros de consulta
    let { category, minStock } = req.query;

    // Filtrar los productos según los parámetros de consulta
    try {
        let filter = {};
        if (category) {
            filter.category = category;
        }
        if (minStock) {
            filter.stock = { $gte: minStock };
        }
        const products = await Product.find(filter);


        // Crear el contenido HTML para el reporte
        let htmlContent = `
            <html>
                <head>
                    <style>
                        table {
                            width: 100%;
                            border-collapse: collapse;
                        }
                        th, td {
                            border: 1px solid black;
                            padding: 8px;
                            text-align: left;
                        }
                        th {
                            background-color: #f2f2f2;
                        }
                        .product-image {
                            max-width: 100px;
                            max-height: 100px;
                        }
                    </style>
                </head>
                <body>
                    <h1>Reporte de productos</h1>
                    <table>
                        <tr>
                            <th>Nombre</th>
                            <th>Categoría</th>
                            <th>Stock</th>
                            <th>Precio</th>
                            <th>Imagen</th>
                        </tr>`;

        products.forEach(product => {
            htmlContent += `
                <tr>
                    <td>${product.name}</td>
                    <td>${product.category}</td>
                    <td>${product.stock}</td>
                    <td>${product.price}</td>
                    <td><img class="product-image" src="http://${req.headers.host}/${product.image}" alt="${product.name}"></td>
                </tr>`;
        });

        htmlContent += `
                    </table>
                </body>
            </html>`;

        // Generar el reporte PDF con Puppeteer
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        const page = await browser.newPage();
        await page.setContent(htmlContent);
        const pdfBuffer = await page.pdf({ format: 'A4' });
        await browser.close();

        // Enviar el PDF como respuesta al cliente
        res.contentType("application/pdf");
        res.send(pdfBuffer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Obtener todos los productos
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Obtener un producto por ID
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Crear un nuevo producto
router.post('/', upload.single('image'), async (req, res) => {
    const { name, category, stock, price } = req.body;
    const image = req.file ? 'uploads/' + req.file.filename : '';

    // Validación básica
    if (!name || !category || !stock || !price) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const product = new Product({
        name,
        category,
        stock,
        price,
        image // Aquí solo guardamos la ruta de la imagen
    });

    try {
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


// Actualizar un producto existente
router.put('/:id', upload.single('image'), async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const { name, category, stock, price } = req.body;

        // Actualizar los campos del producto
        product.name = name;
        product.category = category;
        product.stock = stock;
        product.price = price;

        // Actualizar la imagen solo si se proporciona una nueva imagen en la solicitud
        if (req.file) {
            product.image = 'uploads/' + req.file.filename;
        }

        const updatedProduct = await product.save();
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


// Eliminar un producto
router.delete('/:id', async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted', deletedProduct });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
