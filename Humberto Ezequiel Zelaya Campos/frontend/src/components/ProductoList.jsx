import ProductoItem from './ProductoItem';

const ProductoList = ({ productos, editarProducto, eliminarProducto, mostrarImagen }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="w-full bg-gray-100 text-left text-gray-600">
            <th className="p-4">Nombre</th>
            <th className="p-4">Descripción</th>
            <th className="p-4">Categoria</th>
            <th className="p-4">Precio</th>
            <th className="p-4">Stock</th>
            <th className="p-4">Imagen</th>
            <th className="p-4">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <ProductoItem
              key={producto._id}
              producto={producto}
              editarProducto={editarProducto}
              eliminarProducto={eliminarProducto}
              mostrarImagen={mostrarImagen}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductoList;
