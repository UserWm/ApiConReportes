import { useState, useEffect } from 'react';

const ProductoForm = ({ agregarProducto, productoEnEdicion, setProductoEnEdicion }) => {
  const [nuevoProducto, setNuevoProducto] = useState({ nombre: '', descripcion: '', categoria: '', precio: 0, stock: 0, imagen: null });

  useEffect(() => {
    if (productoEnEdicion) {
      setNuevoProducto({ ...productoEnEdicion, imagen: null });
    }
  }, [productoEnEdicion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarProducto(nuevoProducto);
    setNuevoProducto({ nombre: '', descripcion: '', categoria: '', precio: 0, stock: 0, imagen: null });
    setProductoEnEdicion(null);
  };

  return (
    <form className="p-4 bg-white shadow-md rounded-lg" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={nuevoProducto.nombre}
        onChange={(e) => setNuevoProducto({ ...nuevoProducto, nombre: e.target.value })}
        className="block w-full p-2 mb-4 border border-gray-300 rounded"
        required
      />
      <input
        type="text"
        placeholder="Descripción"
        value={nuevoProducto.descripcion}
        onChange={(e) => setNuevoProducto({ ...nuevoProducto, descripcion: e.target.value })}
        className="block w-full p-2 mb-4 border border-gray-300 rounded"
        required
      />
      <input
        type="text"
        placeholder="Categoria"
        value={nuevoProducto.categoria}
        onChange={(e) => setNuevoProducto({ ...nuevoProducto, categoria: e.target.value })}
        className="block w-full p-2 mb-4 border border-gray-300 rounded"
        required
      />
      <input
        type="number"
        placeholder="Precio"
        value={nuevoProducto.precio}
        onChange={(e) => setNuevoProducto({ ...nuevoProducto, precio: e.target.valueAsNumber })}
        className="block w-full p-2 mb-4 border border-gray-300 rounded"
        required
      />
      <input
        type="number"
        placeholder="Stock"
        value={nuevoProducto.stock}
        onChange={(e) => setNuevoProducto({ ...nuevoProducto, stock: e.target.valueAsNumber })}
        className="block w-full p-2 mb-4 border border-gray-300 rounded"
        required
      />
      <input
        type="file"
        onChange={(e) => setNuevoProducto({ ...nuevoProducto, imagen: e.target.files[0] })}
        className="block w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
        {productoEnEdicion ? 'Actualizar Producto' : 'Agregar Producto'}
      </button>
    </form>
  );
};

export default ProductoForm;
