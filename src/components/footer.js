import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleUbicationClick = () => {
    navigate('/ubication');
  };

  const handleVisitsClick = () => {
    navigate('/visits');
  };

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    color: '#4A4A4A',
    textDecoration: 'none',
    borderBottom: '1px solid #4A4A4A',
    marginBottom: '10px',
    cursor: 'pointer',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Agregar sombra al texto
  };

  return (
    <footer style={{ backgroundColor: '#FFEB3B', padding: '20px', textAlign: 'center', position: 'relative', width: '100%', marginTop: '20px', fontFamily: 'Itim, cursive' }}>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '20px' }}>
        <div style={{ margin: '10px', textAlign: 'left' }}>
          <h3 style={{ fontSize: '20px', color: '#4A4A4A', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Contacto</h3>
          <a href="https://wa.me/59172973365" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <FaPhone style={{ marginRight: '10px' }} /> +591 72973365
          </a>
          <a href="mailto:alexisbmv99@gmail.com?subject=Asunto&body=Hola,%20quiero%20saber%20más%20sobre%20tus%20servicios." style={linkStyle}>
            <FaEnvelope style={{ marginRight: '10px' }} /> Enviar un correo
          </a>
        </div>
        <div style={{ margin: '10px', textAlign: 'left' }}>
          <h3 style={{ fontSize: '20px', color: '#4A4A4A', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Ubicación</h3>
          <span onClick={handleUbicationClick} style={linkStyle}>
            <FaMapMarkerAlt style={{ marginRight: '10px' }} /> Calle Falsa 123, Tarija, Bolivia
          </span>
        </div>
        <div style={{ margin: '10px', textAlign: 'left' }}>
          <h3 style={{ fontSize: '20px', color: '#4A4A4A', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Síguenos</h3>
          <div style={{ display: 'flex', gap: '20px' }}>
            <FaFacebook style={{ color: '#4A4A4A', cursor: 'pointer', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }} />
            <FaTwitter style={{ color: '#4A4A4A', cursor: 'pointer', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }} />
            <FaInstagram style={{ color: '#4A4A4A', cursor: 'pointer', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }} />
          </div>
        </div>
        <div style={{ margin: '10px', textAlign: 'left' }}>
          <h3 style={{ fontSize: '20px', color: '#4A4A4A', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Actividad</h3>
          <span onClick={handleVisitsClick} style={linkStyle}>
            Ver estadísticas de visitas
          </span>
        </div>
      </div>
      <div style={{ marginTop: '10px', color: '#4A4A4A', fontFamily: 'Itim, cursive', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
        Hecho con <span style={{ color: 'red' }}>❤️</span> para los amantes de las mascotas
      </div>
      <div style={{ color: '#4A4A4A', fontFamily: 'Itim, cursive', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
        &copy; {new Date().getFullYear()} Mascotopia. Todos los derechos reservados.
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
