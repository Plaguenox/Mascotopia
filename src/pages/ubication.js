import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Header from '../components/header';
import Footer from '../components/footer';
import { useNavigate } from 'react-router-dom';

const UbicationPage = () => {
  const position = [-21.5355, -64.7296];
  const navigate = useNavigate();

  const handlePopupClick = () => {
    navigate('/ubication');
  };

  return (
    <div>
      <Header />
      <div className="map-container" style={styles.mapContainer}>
        <h2 style={styles.title}>¡Encuéntranos en Tarija, Bolivia!</h2>
        <p style={styles.description}>Estamos ubicados en Calle Falsa 123, Tarija, Bolivia. ¡Ven a visitarnos!</p>
        <MapContainer center={position} zoom={13} style={styles.map}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              <span onClick={handlePopupClick} style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>
                Dirección Falsa: Calle Falsa 123, Tarija, Bolivia
              </span>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  mapContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh',
    padding: '16px',
  },
  map: {
    width: '100%',
    height: '500px',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#1E90FF',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    marginBottom: '10px',
  },
  description: {
    fontSize: '20px',
    color: '#4A4A4A',
    textAlign: 'center',
    marginBottom: '20px',
  },
};

export default UbicationPage;
