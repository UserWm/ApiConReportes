import request from 'supertest';
import express from "express"
import mongoose from 'mongoose';


import { productRoutes } from './routes/products.js';
import { productModel } from './models/product.js';


const app = express()
app.use(express.json())
app.use('/products', productRoutes);

describe('API Productos', () => {
    beforeEach(async () => {
        await productModel.deleteMany();
    });
    afterAll(async () => {
        await mongoose.connection.close();
    });

    it('Agregar producto', async () => {
        const nuevoProducto = {
            product: 'Producto de prueba',
            category: 'Categoría de prueba',
            stock: 10,
            price: 99.99
        };
        const response = await request(app)
            .post('/products')
            .send(nuevoProducto);
        expect(response.status).toBe(201);
        expect(response.body.product).toBe(nuevoProducto.product);
    });

    it('Obtener productos', async () => {
        const producto1 = new productModel({
            product: 'Producto 1', 
            category: 'Categoría 1', 
            stock: 10, 
            price: 50
        });
        const producto2 = new productModel({
            product: 'Producto 2', 
            category: 'Categoría 2', 
            stock: 5, 
            price: 25
        });
        await producto1.save();
        await producto2.save();
        const response = await request(app).get('/products');
        expect(response.status).toBe(200);
        expect(response.body.length).toBe(2);
    });

    it('Obtener productos por id', async () => {
        const producto = new productModel({
            product: 'Producto 1', 
            category: 'Categoría 1', 
            stock: 10, 
            price: 50
        });
        await producto.save();
        const response = await request(app).get(`/products/${producto._id}`);
        expect(response.status).toBe(200);
        expect(response.body.product).toBe(producto.product);
    });
    
    it('Actualizar productos', async () => {
        const producto = new productModel({
            product: 'Producto 1', 
            category: 'Categoría 1', 
            stock: 10, 
            price: 50
        });
        await producto.save();
        const updates = { price: 75 };
        const response = await request(app)
            .put(`/products/${producto._id}`)
            .send(updates);
        expect(response.status).toBe(200);
        expect(response.body.price).toBe(75);
    });

    it('Eliminar productos', async () => {
        const producto = new productModel({
            product: 'Producto 1', 
            category: 'Categoría 1', 
            stock: 10, 
            price: 50
        });
        await producto.save();
        const response = await
            request(app).delete(`/products/${producto._id}`);
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Producto eliminado');
    });
})
