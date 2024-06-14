const ProductoItem = ({ producto, editarProducto, eliminarProducto, mostrarImagen }) => {
  return (
    <tr className="border-b">
      <td className="p-4">{producto.nombre}</td>
      <td className="p-4">{producto.descripcion}</td>
      <td className="p-4">{producto.categoria}</td>
      <td className="p-4">${producto.precio.toFixed(2)}</td>
      <td className="p-4">{producto.stock}</td>
      <td className="p-4">
        {producto.imagen && <img src={mostrarImagen(producto.imagen)} width="50" height="50" alt={producto.nombre} />}
      </td>
      <td className="p-4">
        <button onClick={() => editarProducto(producto)} className="mr-2 text-blue-500">Editar</button>
        <button onClick={() => eliminarProducto(producto._id)} className="text-red-500">Eliminar</button>
      </td>
    </tr>
  );
};

export default ProductoItem;
