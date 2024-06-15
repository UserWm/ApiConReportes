const request = require('supertest');
const express = require('express');
const rutas = require('../routes/products.js');
const Producto = require('../models/Product.js');

const app = express();

app.use(express.json());
app.use('/productos', rutas);

describe('API Productos', () => {
    beforeEach(async () => {
        await Producto.deleteMany();
    });

    it('Agregar producto', async () => {
        const nuevoProducto = {
            name: 'Producto de prueba',
            category: 'Categoria de prueba',
            stock: 10,
            price: 99.99
        };

        const response = await request(app)
            .post('/productos')
            .send(nuevoProducto);

        expect(response.status).toBe(201);
        expect(response.body.name).toBe(nuevoProducto.name);
        expect(response.body.category).toBe(nuevoProducto.category);
        expect(response.body.stock).toBe(nuevoProducto.stock);
        expect(response.body.price).toBe(nuevoProducto.price);
    });

    it('Obtener productos', async () => {
        const producto1 = new Producto({name: 'Producto 1', category: 'Categoria 1', stock: 10, price: 50});
        const producto2 = new Producto({name: 'Producto 2', category: 'Categoria 2', stock: 5, price: 25});
        
        await producto1.save();
        await producto2.save();

        const response = await request(app).get('/productos');

        expect(response.status).toBe(200);
        expect(response.body.length).toBe(2);
        expect(response.body[0].name).toBe(producto1.name);
        expect(response.body[1].name).toBe(producto2.name);
    });

    it('Obtener producto por id', async () => {
        const producto = new Producto({name: 'Producto 1', category: 'Categoria 1', stock: 10, price: 50});
        await producto.save();

        const response = await request(app).get(`/productos/${producto._id}`);

        expect(response.status).toBe(200);
        expect(response.body.name).toBe(producto.name);
        expect(response.body.category).toBe(producto.category);
        expect(response.body.stock).toBe(producto.stock);
        expect(response.body.price).toBe(producto.price);
    });

    it('Actualizar productos', async () => {
        const producto = new Producto({name: 'Producto 1', category: 'Categoria 1', stock: 10, price: 50});
        await producto.save();

        const updates = {
            name: 'Producto actualizado',
            category: 'Categoria 1',
            stock: 10,
            price: 75
        };

        const response = await request(app)
                                .put(`/productos/${producto._id}`)
                                .send(updates);

        expect(response.status).toBe(200);
        expect(response.body.name).toBe(updates.name);
        expect(response.body.price).toBe(updates.price);
    });

    it('Eliminar productos', async () => {
        const producto = new Producto({name: 'Producto 1', category: 'Categoria 1', stock: 10, price: 50});
        await producto.save();

        const response = await request(app).delete(`/productos/${producto._id}`);

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Product deleted');
    });
});
