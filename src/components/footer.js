import React, { useState } from 'react';

const Footer = () => {
  const [modalContent, setModalContent] = useState(null);

  const handleLinkClick = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <footer style={{ backgroundColor: '#f8f8f8', padding: '20px', textAlign: 'center', position: 'relative', width: '100%', marginTop: '20px' }}>
      <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="#about" onClick={() => handleLinkClick('Acerca de Mascotopia')} style={linkStyle} onMouseEnter={e => e.currentTarget.style.textShadow = linkHoverStyle.textShadow} onMouseLeave={e => e.currentTarget.style.textShadow = ''}>Acerca de Mascotopia</a>
        <a href="#contact" onClick={() => handleLinkClick('Contacto para Empresas')} style={linkStyle} onMouseEnter={e => e.currentTarget.style.textShadow = linkHoverStyle.textShadow} onMouseLeave={e => e.currentTarget.style.textShadow = ''}>Contacto para Empresas</a>
        <a href="#terms" onClick={() => handleLinkClick('Términos y Condiciones')} style={linkStyle} onMouseEnter={e => e.currentTarget.style.textShadow = linkHoverStyle.textShadow} onMouseLeave={e => e.currentTarget.style.textShadow = ''}>Términos y Condiciones</a>
      </div>
      <div>
        &copy; {new Date().getFullYear()} Mascotopia. Todos los derechos reservados.
      </div>
      {modalContent && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px', width: '80%', maxWidth: '500px', textAlign: 'center' }}>
            <h2>{modalContent}</h2>
            <p>{`Información sobre ${modalContent}`}</p>
            <button onClick={closeModal} style={{ padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', cursor: 'pointer' }}>Cerrar</button>
          </div>
        </div>
      )}
    </footer>
  );
};

const linkStyle = {
  margin: '0 10px',
  cursor: 'pointer',
  textDecoration: 'none',
  color: 'inherit',
  transition: 'text-shadow 0.3s ease-in-out',
};

const linkHoverStyle = {
  textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
};

export default Footer;