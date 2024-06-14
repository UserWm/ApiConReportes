import { useState, useEffect } from 'react';
import ProductoForm from '../components/ProductoForm';
import ProductoList from '../components/ProductoList';
import { obtenerProductos, agregarProducto, eliminarProducto, generarReporte } from '../api/api';

const Home = () => {
  const [productos, setProductos] = useState([]);
  const [productoEnEdicion, setProductoEnEdicion] = useState(null);
  const [filtroCategoria, setFiltroCategoria] = useState('');
  const [filtroStock, setFiltroStock] = useState('');

  useEffect(() => {
    const fetchProductos = async () => {
      const data = await obtenerProductos();
      setProductos(data);
    };
    fetchProductos();
  }, []);

  const handleAgregarProducto = async (producto) => {
    try {
      await agregarProducto(producto, productoEnEdicion);
      const data = await obtenerProductos();
      setProductos(data);
      setProductoEnEdicion(null);
    } catch (error) {
      console.error('Error al agregar/actualizar el producto:', error);
    }
  };

  const editarProducto = (producto) => {
    setProductoEnEdicion(producto);
  };

  const handleEliminarProducto = async (id) => {
    try {
      await eliminarProducto(id);
      const data = await obtenerProductos();
      setProductos(data);
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };

  const mostrarImagen = (imagen) => {
    if (imagen && imagen.data) {
      const base64String = btoa(
        new Uint8Array(imagen.data.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
      );
      return `data:${imagen.contentType};base64,${base64String}`;
    }
    return '';
  };

  const handleGenerarReporte = async () => {
    try {
      await generarReporte({ categoria: filtroCategoria, stock: filtroStock });
    } catch (error) {
      console.error('Error al generar el reporte:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">CRUD de Productos</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Categoría"
          value={filtroCategoria}
          onChange={(e) => setFiltroCategoria(e.target.value)}
          className="mr-2 p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          placeholder="Nivel de stock"
          value={filtroStock}
          onChange={(e) => setFiltroStock(e.target.value)}
          className="mr-2 p-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleGenerarReporte}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Generar Reporte
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProductoForm
          agregarProducto={handleAgregarProducto}
          productoEnEdicion={productoEnEdicion}
          setProductoEnEdicion={setProductoEnEdicion}
        />
        <ProductoList
          productos={productos}
          editarProducto={editarProducto}
          eliminarProducto={handleEliminarProducto}
          mostrarImagen={mostrarImagen}
        />
      </div>
    </div>
  );
};

export default Home;