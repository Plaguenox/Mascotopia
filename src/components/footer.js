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
    <footer style={{ backgroundColor: '#f8f8f8', padding: '20px', textAlign: 'center', position: 'fixed', bottom: 0, width: '100%' }}>
      <div style={{ marginBottom: '10px' }}>
        <a href="#about" onClick={() => handleLinkClick('Acerca de Mascotopia')} style={{ margin: '0 10px' }}>Acerca de Mascotopia</a>
        <a href="#contact" onClick={() => handleLinkClick('Contacto para Empresas')} style={{ margin: '0 10px' }}>Contacto para Empresas</a>
        <a href="#terms" onClick={() => handleLinkClick('Términos y Condiciones')} style={{ margin: '0 10px' }}>Términos y Condiciones</a>
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

export default Footer;