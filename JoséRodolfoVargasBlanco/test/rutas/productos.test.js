const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const Producto = require('../../modelos/productos.js');
const rutas = require('../../rutas/productos.js');

const app = express();
app.use(express.json());
app.use('/productos', rutas);

describe('API Productos', () => {

    beforeEach(async () => {
        await Producto.deleteMany();
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    it('Agregar producto', async () => {
        const nuevoProducto = {
            producto: 'Producto de prueba',
            categoria: 'Categoría de prueba',
            existencia: 10,
            precio: 99.99
        };

        const response = await request(app)
            .post('/productos')
            .send(nuevoProducto);

        expect(response.status).toBe(201);
        expect(response.body.producto).toBe(nuevoProducto.producto);
    });

    it('Obtener productos', async () => {
        const producto1 = new Producto({ producto: 'Producto 1', categoria: 'Categoría 1', existencia: 10, precio: 50 });
        const producto2 = new Producto({ producto: 'Producto 2', categoria: 'Categoría 2', existencia: 5, precio: 25 });
        await producto1.save();
        await producto2.save();

        const response = await request(app).get('/productos');

        expect(response.status).toBe(200);
        expect(response.body.length).toBe(2);
    });

    it('Obtener productos por id', async () => {
        const producto = new Producto({ producto: 'Producto 1', categoria: 'Categoría 1', existencia: 10, precio: 50 });
        await producto.save();

        const response = await request(app).get(`/productos/${producto._id}`);

        expect(response.status).toBe(200);
        expect(response.body.producto).toBe(producto.producto);
    });

    it('Actualizar productos', async () => {
        const producto = new Producto({ producto: 'Producto 1', categoria: 'Categoría 1', existencia: 10, precio: 50 });
        await producto.save();

        const updates = { precio: 75 };
        const response = await request(app)
            .put(`/productos/${producto._id}`)
            .send(updates);

        expect(response.status).toBe(200);
        expect(response.body.precio).toBe(75);
    });

    it('Elimnar productos', async () => {
        const producto = new Producto({ producto: 'Producto 1', categoria: 
            'Categoria 1', existencia: 10, precio: 50
        });
        await producto.save();

        const response = await
        request(app).delete(`/productos/${producto._id}`);

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Producto eliminado');
    });

});