import Producto from '../models/Producto.js';
import puppeteer from 'puppeteer';

export const crearProducto = async (req, res) => {
  const { nombre, descripcion, categoria, precio, stock } = req.body;
  const imagen = req.file ? {
    data: req.file.buffer,
    contentType: req.file.mimetype
  } : null;

  try {
    if (!nombre || !descripcion || !categoria || !precio || !stock) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const producto = new Producto({ nombre, descripcion: descripcion.toString(), categoria, precio, stock, imagen });
    await producto.save();
    res.json(producto);
  } catch (error) {
    console.error('Error al crear el producto:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

// Resto de las funciones se mantienen igual...

export const obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

export const obtenerProductoPorId = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(producto);
  } catch (error) {
    console.error('Error al obtener el producto:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

export const actualizarProducto = async (req, res) => {
  const { nombre, descripcion, categoria, precio, stock } = req.body;
  const imagen = req.file ? {
    data: req.file.buffer,
    contentType: req.file.mimetype
  } : null;

  try {
    const producto = await Producto.findByIdAndUpdate(req.params.id, { nombre, descripcion: descripcion.toString(), categoria, precio, stock, imagen }, { new: true });
    res.json(producto);
  } catch (error) {
    console.error('Error al actualizar el producto:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

export const eliminarProducto = async (req, res) => {
  try {
    await Producto.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Producto eliminado' });
  } catch (error) {
    console.error('Error al eliminar el producto:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

export const generarReporte = async (req, res) => {
  const { categoria, stock } = req.query;
  try {
    const query = {};
    if (categoria) {
      query.categoria = categoria;
    }
    if (stock) {
      query.stock = { $gte: Number(stock) };
    }
    const productos = await Producto.find(query);
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Reporte de productos</title>
      </head>
      <body>
        <h1>Reporte de productos</h1>
        <p>Categoría: ${categoria || 'Todas'}</p>
        <p>Nivel mínimo de stock: ${stock || 'N/A'}</p>
        <table border="1" cellpadding="5" cellspacing="0">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Categoria</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Imagen</th>
            </tr>
          </thead>
          <tbody>
            ${productos.map(producto => `
              <tr>
                <td>${producto.nombre}</td>
                <td>${producto.descripcion}</td>
                <td>${producto.categoria}</td>
                <td>${producto.precio.toFixed(2)}</td>
                <td>${producto.stock}</td>
                <td>${producto.imagen && producto.imagen.data ? 
                  `<img src="data:${producto.imagen.contentType};base64,${producto.imagen.data.toString('base64')}" alt="${producto.nombre}" width="50" height="50"/>` 
                  : 'No image'}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </body>
      </html>
    `;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
    const pdfBuffer = await page.pdf({ format: 'A4' });
    await browser.close();

    const timestamp = new Date().toISOString().replace(/:/g, '-');
    const pdfFilename = `reporte-${timestamp}.pdf`;
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename=${pdfFilename}`,
      'Content-Length': pdfBuffer.length,
    });
    res.send(pdfBuffer);
  } catch (error) {
    console.error('Error al generar el reporte:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};