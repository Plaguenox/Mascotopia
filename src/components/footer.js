import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f8f8f8', padding: '20px', textAlign: 'center', marginTop: '20px' }}>
      <div style={{ marginBottom: '10px' }}>
        <a href="/about" style={{ margin: '0 10px' }}>Sobre Nosotros</a>
        <a href="/contact" style={{ margin: '0 10px' }}>Contacto</a>
        <a href="/ubication" style={{ margin: '0 10px' }}>Ubicación</a>
        <a href="/terms" style={{ margin: '0 10px' }}>Términos y Condiciones</a>
      </div>
      <div>
        &copy; {new Date().getFullYear()} Mascotopia. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;