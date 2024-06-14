const express = require("express");
const rutas = express.Router();
const Producto = require("../modelos/productos");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const puppeteer = require("puppeteer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const carga = multer({ storage: storage });

rutas.get("/reporte", async (req, res) => {
  const { categoria, minExistencia } = req.query;
  try {
    //const productos = await Producto.find();
    let filtro = {};
    if (categoria) {
      filtro.categoria = categoria;
    }
    if (minExistencia) {
      filtro.existencia = { $gte: Number(minExistencia) };
    }
    const productos = await Producto.find(filtro);
    console.log(productos);
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Reporte de produccion</h1>
<table>
<thead>
<tr>
<th>Productos</th>
<th>Categoria</th>
<th>Existencia</th>
<th>Precio</th>
</tr>
</thead>
<tbody>
${productos
  .map(
    (productos) => `<tr>
  <td>${productos.producto}</td>
  <td>${productos.categoria}</td>
  <td>${productos.existencia}</td>
  <td>${productos.precio.toFixed(2)}</td>
  `
  )
  .join("")}



</tbody>
</table>


</body>
</html>`;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: "networkidle0" });
    const pdfBuffer = await page.pdf({ format: "A4" });
    await browser.close();

    const timespan = new Date().toISOString().replace(/:/g, "-");
    const pdfFilename = `reporte-${timespan}.pdf`;

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename=${pdfFilename}`,
      "Content-Length": pdfBuffer.length,
    });
    res.send(pdfBuffer);
    console.log("Llega hasta el ppdf");
  } catch (error) {
    console.log("error al generar el reporte ", error);
    res.status(500).json({ error: error.message });
  }
});

rutas.get("/", async (req, res) => {
  try {
    const productos = await Producto.find();
    res.status(200).json(productos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

rutas.post("/", carga.single("imagen"), async (req, res) => {
  const { producto, categoria, existencia, precio } = req.body;
  const imagen = req.file ? req.file.filename : null;
  try {
    const nuevoProducto = new Producto({
      producto,
      categoria,
      existencia,
      precio,
      imagen,
    });
    await nuevoProducto.save();
    res.status(201).json(nuevoProducto);
  } catch (err) {
    res.status(500).json("pedillos");
  }
});

rutas.put("/:id", carga.single("imagen"), async (req, res) => {
  const { producto, categoria, existencia, precio } = req.body;
  const imagen = req.file ? req.file.filename : null;
  try {
    const productos = await Producto.findById(req.params.id);
    if (!productos) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    productos.producto = producto || productos.producto;
    productos.categoria = categoria || productos.categoria;
    productos.existencia = existencia || productos.existencia;
    productos.precio = precio || productos.precio;
    if (imagen) {
      productos.imagen = imagen;
    }
    await productos.save();
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

rutas.delete("/:id", async (req, res) => {
  try {
    const productos = await Producto.findByIdAndDelete(req.params.id);
    if (!productos) {
      return res.status(404).json({ error: "Producto no encontrao" });
    }
    if (productos.imagen) {
      const imagenPath = path.join(
        __dirname,
        "..",
        "uploads",
        productos.imagen
      );
      fs.unlink(imagenPath, (err) => {
        if (err) {
          console.log("error al eliminar");
        } else {
          console.log("Archivo eliminado", productos.imagen);
        }
      });
    }
    res.status(200).json({ message: "producto eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

rutas.get("/:id", async (req, res) => {
  try {
    const productos = await Producto.findById(req.params.id);
    if (!productos)
      return res.status(404).json({ error: "Producto no encontrao" });
    res.status(200).json(productos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

///////// PDF things

module.exports = rutas;
