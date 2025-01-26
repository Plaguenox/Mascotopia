import React, { useEffect, useState, useRef } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, ArcElement);

const Graphics = () => {
  const [visits, setVisits] = useState([]);
  const [selectedChart, setSelectedChart] = useState('bar');
  const chartRef = useRef(null);

  useEffect(() => {
    const fakeVisits = [
      { country: 'Bolivia', visits: Math.floor(Math.random() * 1000) },
      { country: 'Argentina', visits: Math.floor(Math.random() * 1000) },
      { country: 'Chile', visits: Math.floor(Math.random() * 1000) },
      { country: 'Perú', visits: Math.floor(Math.random() * 1000) },
    ];
    setVisits(fakeVisits);
  }, []);

  const data = {
    labels: visits.map((v) => v.country),
    datasets: [
      {
        label: 'Visitas',
        data: visits.map((v) => v.visits),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
        borderColor: '#000',
        borderWidth: 1,
      },
    ],
  };

  const handleDownload = () => {
    const chartCanvas = chartRef.current.canvas;
    const link = document.createElement('a');
    const fileName = selectedChart === 'bar' ? 'grafico_barras' : 'grafico_pastel';
    link.download = `${fileName}.png`;
    link.href = chartCanvas.toDataURL();
    link.click();
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Estadísticas de Visitas</h2>

      {/* Menú Desplegable */}
      <select
        value={selectedChart}
        onChange={(e) => setSelectedChart(e.target.value)}
        style={dropdownStyle}
      >
        <option value="bar">Gráfico de Barras</option>
        <option value="pie">Gráfico de Pastel</option>
      </select>

      {/* Renderizado Condicional de Gráficos */}
      <div style={{ height: '400px', marginTop: '20px' }}>
        {selectedChart === 'bar' ? (
          <Bar data={data} ref={chartRef} options={{ responsive: true, maintainAspectRatio: false }} />
        ) : (
          <Pie data={data} ref={chartRef} options={{ responsive: true, maintainAspectRatio: false }} />
        )}
      </div>

      {/* Botón de Descargar */}
      <button onClick={handleDownload} style={buttonStyle}>
        Descargar Gráfico
      </button>
    </div>
  );
};

const dropdownStyle = {
  padding: '10px',
  fontSize: '16px',
  margin: '10px 0',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  marginTop: '20px',
  padding: '10px 20px',
  backgroundColor: '#1E90FF',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Graphics;