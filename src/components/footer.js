import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    color: '#4A4A4A',
    textDecoration: 'none',
    borderBottom: '1px solid #4A4A4A',
    marginBottom: '10px',
    cursor: 'pointer',
  };

  return (
    <footer style={{ backgroundColor: '#FFEB3B', padding: '20px', textAlign: 'center', position: 'relative', width: '100%', marginTop: '20px', fontFamily: 'Itim, cursive' }}>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '20px' }}>
        <div style={{ margin: '10px', textAlign: 'left' }}>
          <h3 style={{ fontSize: '20px', color: '#4A4A4A' }}>Contacto</h3>
          <a href="tel:123-456-7890" style={linkStyle}>
            <FaPhone style={{ marginRight: '10px' }} /> 123-456-7890
          </a>
          <a href="mailto:contacto@mascotopia.com" style={linkStyle}>
            <FaEnvelope style={{ marginRight: '10px' }} /> contacto@mascotopia.com
          </a>
        </div>
        <div style={{ margin: '10px', textAlign: 'left' }}>
          <h3 style={{ fontSize: '20px', color: '#4A4A4A' }}>Ubicación</h3>
          <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <FaMapMarkerAlt style={{ marginRight: '10px' }} /> Calle Falsa 123, Ciudad, País
          </a>
        </div>
        <div style={{ margin: '10px', textAlign: 'left' }}>
          <h3 style={{ fontSize: '20px', color: '#4A4A4A' }}>Síguenos</h3>
          <div style={{ display: 'flex', gap: '20px' }}>
            <FaFacebook style={{ color: '#4A4A4A', cursor: 'pointer' }} />
            <FaTwitter style={{ color: '#4A4A4A', cursor: 'pointer' }} />
            <FaInstagram style={{ color: '#4A4A4A', cursor: 'pointer' }} />
          </div>
        </div>
      </div>
      <div>
        &copy; {new Date().getFullYear()} Mascotopia. Todos los derechos reservados.
      </div>
      <div style={{ marginTop: '10px', color: '#4A4A4A', fontFamily: 'Itim, cursive' }}>
        Hecho con <span style={{ color: 'red' }}>❤️</span> para los amantes de las mascotas
      </div>
    </footer>
  );
};

export default Footer;

/* 
Tipografía usada:
- Itim: 'https://fonts.googleapis.com/css2?family=Itim&display=swap'

Códigos de colores:
- Fondo amarillo: #FFEB3B (bg-yellow-300)
- Texto gris: #4A4A4A (text-gray-800)
- Botones azules: #1E90FF (bg-blue-500)
- Botones verdes: #32CD32 (bg-green-500)
- Botones rojos: #FF4500 (bg-red-500)
- Efecto neón: #FFFFFF (blanco)
*/
