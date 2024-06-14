const { Router } = require("express");
const multer = require("multer");
const Product = require("../models/product");
const path = require("path");
const fs = require("fs/promises");
const puppeteer = require("puppeteer");

const router = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/products/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/reporte", async (req, res) => {
  const { categoria, minExistencia } = req.query;

  try {
    //const products = await Product.find();

    let filtro = {};

    if (categoria) {
      filtro.categoria = categoria;
    }

    if (minExistencia) {
      filtro.existencia = { $gte: Number(minExistencia) };
    }

    const products = await Product.find(filtro);

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
      </head>
      <body>
        <h1> Reporte de productos </h1>
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
            ${products
              .map(
                (product) => `
              <tr>
                <td>${product.producto}</td>
                <td>${product.categoria}</td>
                <td>${product.existencia}</td>
                <td>$${product.precio.toFixed(2)}</td>
              </tr>
            `
              )
              .join("")}
          </tbody>
        </table>
      </body>
      </html>
    `;

    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: "networkidle0" });
    const pdfBuffer = await page.pdf({ format: "A4" });
    await browser.close();

    const timespan = new Date().toISOString().replace(/:/g, "-");
    const pdfFileName = `reporte-${timespan}.pdf`;

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename=${pdfFileName}`,
      "Content-Length": pdfBuffer.length,
    });

    res.send(pdfBuffer);
  } catch (error) {
    console.log("Error al generar el pdf", error.message);
    res.status(500).json({ message: error.message });
  }
});

router.post("/products", upload.single("image"), async (req, res) => {
  const { producto, categoria, existencia, precio } = req.body;
  const imagen = req.file ? req.file.filename : null;
  try {
    const newProduct = new Product({
      producto,
      categoria,
      existencia,
      precio,
      imagen,
    });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/products/:id", upload.single("image"), async (req, res) => {
  const { id } = req.params;
  const { producto, categoria, existencia, precio } = req.body;
  const imagen = req.file ? req.file.filename : null;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    product.producto = producto || product.producto;
    product.categoria = categoria || product.categoria;
    product.existencia = existencia || product.existencia;
    product.precio = precio || product.precio;

    if (imagen) {
      product.imagen = imagen;
    }

    await product.save();

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/products/:id", async (req, res) => {
  const uploadPath = path.join(__dirname, "../uploads");
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    await product.deleteOne();
    if (product.imagen) {
      await fs.unlink(path.join(uploadPath, product.imagen));
    }
    res.status(200).json({ message: "Producto eliminado" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
