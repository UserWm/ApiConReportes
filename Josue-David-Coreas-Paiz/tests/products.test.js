const request = require("supertest");
const express = require("express");
const mongoose = require("mongoose");
const rutas = require("../src/routes/product");
const Producto = require("../src/models/product");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());
app.use("/api", rutas);

describe("API productos", () => {
  beforeEach(async () => {
    await Producto.deleteMany();
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("should add a new product", async () => {
    const newProduct = {
      producto: "Producto de prueba",
      categoria: "Categoria de prueba",
      existencia: 10,
      precio: 99.99,
    };

    const response = await request(app).post("/api/products").send(newProduct);

    expect(response.status).toBe(201);
    expect(response.body.producto).toBe(newProduct.producto);
  });

  it("should get all products", async () => {
    const product1 = new Producto({
      producto: "Producto 1",
      categoria: "Categoria 1",
      existencia: 10,
      precio: 50,
    });
    const producto2 = new Producto({
      producto: "Producto 2",
      categoria: "Categoría 2",
      existencia: 5,
      precio: 25,
    });

    await product1.save();
    await producto2.save();

    const response = await request(app).get("/api/products");
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(2);
  });

  it("should get a product by id", async () => {
    const product = new Producto({
      producto: "Producto 1",
      categoria: "Categoria 1",
      existencia: 10,
      precio: 50,
    });

    await product.save();

    const response = await request(app).get(`/api/products/${product._id}`);
    expect(response.status).toBe(200);
    expect(response.body.producto).toBe(product.producto);
  });

  it("should update a product", async () => {
    const product = new Producto({
      producto: "Producto 1",
      categoria: "Categoria 1",
      existencia: 10,
      precio: 50,
    });

    await product.save();

    const update = { precio: 75 };

    const response = await request(app)
      .put(`/api/products/${product._id}`)
      .send(update);

    expect(response.status).toBe(200);
    expect(response.body.precio).toBe(75);
  });

  it("should delete a product", async () => {
    const product = new Producto({
      producto: "Producto 1",
      categoria: "Categoria 1",
      existencia: 10,
      precio: 50,
    });

    await product.save();

    const response = await request(app).delete(`/api/products/${product._id}`);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Producto eliminado");
  });
});
