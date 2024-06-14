import axios from 'axios';

const baseURL = 'http://localhost:3000/api';

export const obtenerProductos = async () => {
  try {
    const res = await axios.get(`${baseURL}/productos`);
    return res.data;
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    throw error;
  }
};

export const agregarProducto = async (producto, productoEnEdicion) => {
  const formData = new FormData();
  formData.append('nombre', producto.nombre);
  formData.append('descripcion', producto.descripcion);
  formData.append('categoria', producto.categoria);
  formData.append('precio', producto.precio);
  formData.append('stock', producto.stock);
  if (producto.imagen) {
    formData.append('imagen', producto.imagen);
  }

  try {
    if (productoEnEdicion) {
      await axios.put(`${baseURL}/productos/${productoEnEdicion._id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    } else {
      await axios.post(`${baseURL}/productos`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    }
  } catch (error) {
    console.error('Error al agregar/actualizar el producto:', error);
    throw error;
  }
};

export const eliminarProducto = async (id) => {
  try {
    await axios.delete(`${baseURL}/productos/${id}`);
  } catch (error) {
    console.error('Error al eliminar el producto:', error);
    throw error;
  }
};

export const generarReporte = async ({ categoria, stock }) => {
  const query = new URLSearchParams();
  if (categoria) query.append('categoria', categoria);
  if (stock) query.append('stock', stock);

  try {
    const response = await axios.get(`${baseURL}/reporte?${query.toString()}`, { responseType: 'blob' });
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'reporte.pdf');
    document.body.appendChild(link);
    link.click();
  } catch (error) {
    console.error('Error al generar el reporte:', error);
    throw error;
  }
};