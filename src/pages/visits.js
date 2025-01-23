import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import html2canvas from 'html2canvas';

const VisitsPage = () => {
  const [visits, setVisits] = useState([]);

  useEffect(() => {
    const fakeVisits = [
      { country: 'Bolivia', visits: Math.floor(Math.random() * 1000) },
      { country: 'Argentina', visits: Math.floor(Math.random() * 1000) },
      { country: 'Chile', visits: Math.floor(Math.random() * 1000) },
      { country: 'Perú', visits: Math.floor(Math.random() * 1000) },
    ];
    setVisits(fakeVisits);
  }, []);

  const handleDownload = () => {
    html2canvas(document.querySelector("#visitsTable")).then(canvas => {
      const link = document.createElement('a');
      link.download = 'visitas.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div>
      <Header />
      <div className="visits-container" style={styles.visitsContainer}>
        <h2 style={styles.title}>Estadísticas de Visitas</h2>
        <table id="visitsTable" style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>País</th>
              <th style={styles.th}>Visitas</th>
            </tr>
          </thead>
          <tbody>
            {visits.map((visit, index) => (
              <tr key={index}>
                <td style={styles.td}>{visit.country}</td>
                <td style={styles.td}>{visit.visits}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleDownload} style={styles.button}>Descargar Estadísticas</button>
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  visitsContainer: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#4A4A4A',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
  },
  th: {
    border: '1px solid #ddd',
    padding: '8px',
    backgroundColor: '#f2f2f2',
    color: '#4A4A4A',
  },
  td: {
    border: '1px solid #ddd',
    padding: '8px',
    color: '#4A4A4A',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#1E90FF',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default VisitsPage;
