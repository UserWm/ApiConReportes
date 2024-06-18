document.addEventListener('DOMContentLoaded', function () {
  fetch('/api/products')
    .then(response => response.json())
    .then(productos => {
      const productosD = document.getElementById('productos');
      productos.forEach(producto => {
        const productoD = document.createElement('div');
        productoD.classList.add('producto');

        const productoImg = document.createElement('img');
        productoImg.src = `/uploads/${producto.img}`;
        productoImg.alt = producto.product;
        productoD.appendChild(productoImg);

        const productoInfo = document.createElement('div');
        productoInfo.classList.add('producto-info');
        productoInfo.innerHTML = `
                    <h2>${producto.product}</h2>
                    <p>Categoría: ${producto.category}</p>
                    <p>Existencia: ${producto.stock} unidades</p>
                    <p>Precio: $${producto.price.toFixed(2)}</p>
                `;
        productoD.appendChild(productoInfo);
        productosD.appendChild(productoD);
      });
    })
    .catch(error => console.error('Error:', error));

  document.getElementById('generarReporte').addEventListener('click', () => {
    const categoria = document.getElementById('categoria').value;
    const minExistencia = document.getElementById('minExistencia').value;

    const queryParams = new URLSearchParams();

    if (categoria) {
      queryParams.append('categoria', categoria);
    }
    if (minExistencia) {
      queryParams.append('minExistencia', minExistencia);
    }

    fetch(`/api/report?${queryParams.toString()}`)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Reporte_Productos_${new Date().toLocaleDateString()}.pdf`;
        document.body.appendChild(a);
        a.click();
        a.remove();
      })
      .catch(error => console.error('Error:', error));
  });
});
