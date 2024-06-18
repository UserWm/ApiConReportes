import { Router } from 'express'
import puppeteer from "puppeteer"

import { productModel } from '../models/product.js'

export const reportRoutes = Router()

reportRoutes.get('/', async (req, res) => {
  const { categoria, minExistencia } = req.query;
  try {
    let filtro = {}
    if (categoria) {
      filtro.categoria = categoria;
    }
    if (minExistencia) {
      filtro.existencia = { $gte: Number(minExistencia) };
    }

    const producto = await productModel.find(filtro);
    console.log(producto);

    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Reporte de Productos</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 20px;
                    background-color: #f8f9fa;
                }
                h1 {
                    text-align: center;
                    color: #333;
                    margin-bottom: 20px;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 20px;
                }
                th, td {
                    border: 1px solid #ddd;
                    padding: 8px;
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
                .total {
                    font-weight: bold;
                }
            </style>
        </head>
        <body>
            <h1>Reporte de Productos</h1>
            <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Categoría</th>
                        <th>Existencia</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    ${producto.map(producto => `
                        <tr>
                            <td>${producto.product}</td>
                            <td>${producto.category}</td>
                            <td>${producto.stock}</td>
                            <td>${producto.price.toFixed(2)}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </body>
        </html>`;

    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
    const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true });
    await browser.close();

    const timespan = new Date().toISOString().replace(/:/g, '-');
    const pdfFilename = `reporte-${timespan}.pdf`;

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment;filename=${pdfFilename}`,
      'Content-Length': pdfBuffer.length
    });
    res.send(pdfBuffer);
  } catch (error) {
    console.log(`Error al generar el reporte: ${error}`);
    res.status(500).json({ error: error.message });
  }

})