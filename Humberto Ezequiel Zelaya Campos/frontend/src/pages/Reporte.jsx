import { useEffect } from 'react';
import axios from 'axios';

const Reporte = () => {
  useEffect(() => {
    const generarReporte = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/reporte', { responseType: 'blob' });
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'reporte.pdf');
        document.body.appendChild(link);
        link.click();
      } catch (error) {
        console.error('Error al generar el reporte:', error);
      }
    };

    generarReporte();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Generando Reporte...</h1>
    </div>
  );
};

export default Reporte;
