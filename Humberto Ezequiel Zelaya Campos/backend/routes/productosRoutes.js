import express from 'express';
import multer from 'multer';
import {
  crearProducto,
  obtenerProductos,
  obtenerProductoPorId,
  actualizarProducto,
  eliminarProducto,
  generarReporte
} from '../controllers/productosController.js';

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/productos', upload.single('imagen'), crearProducto);
router.get('/productos', obtenerProductos);
router.get('/productos/:id', obtenerProductoPorId);
router.put('/productos/:id', upload.single('imagen'), actualizarProducto);
router.delete('/productos/:id', eliminarProducto);
router.get('/reporte', generarReporte);

export default router;
