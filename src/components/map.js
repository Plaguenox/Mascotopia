import React from "react";

const MapComponent = () => {
  return (
    <div className="map-container" style={styles.mapContainer}>
      <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=1cuWzCiI1YlNAdYnZW6MQjn-8swQQNJY&ehbc=2E312F"
        title="Mapa personalizado"
        className="map-iframe"
        style={styles.mapIframe}
      ></iframe>
    </div>
  );
};

const styles = {
  mapContainer: {
    width: '80%',
    maxWidth: '1280px',
    height: '400px',
    margin: '3rem auto',
    overflow: 'hidden',
    borderRadius: '1rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapIframe: {
    width: '100%',
    height: '100%',
    border: 'none',
  },
};

export default MapComponent;