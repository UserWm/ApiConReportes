import express from 'express';
import cors from 'cors';
import connectDB from './database/database.js';
import productosRoutes from './routes/productosRoutes.js';

const server = express();

connectDB();

server.use(cors());
server.use(express.json());


server.use('/api', productosRoutes);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
