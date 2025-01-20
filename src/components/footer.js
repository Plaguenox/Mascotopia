import React, { useState } from 'react';

const Footer = () => {
  const [modalContent, setModalContent] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleLinkClick = (content) => {
    setModalContent(content);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const linkStyle = {
    cursor: 'pointer',
    padding: '10px 20px',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'text-shadow 0.3s ease-in-out',
    fontFamily: 'Itim, cursive',
    margin: '0 10px',
  };

  const linkHoverStyle = {
    textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
  };

  return (
    <footer style={{ backgroundColor: '#abd937', padding: '20px', textAlign: 'center', position: 'relative', width: '100%', marginTop: '20px', fontFamily: 'Itim, cursive' }}>
      <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a 
          onClick={() => handleLinkClick('¡Bienvenidos a Mascotopia! En Mascotopia, creemos que cada mascota merece lo mejor. Somos una tienda en línea dedicada a ofrecer una amplia gama de productos de alta calidad para tus amigos peludos. Desde alimentos nutritivos y saludables hasta juguetes divertidos y accesorios modernos, tenemos todo lo que necesitas para mantener a tu mascota feliz y saludable.')} 
          style={linkStyle} 
          onMouseEnter={e => e.currentTarget.style.textShadow = linkHoverStyle.textShadow} 
          onMouseLeave={e => e.currentTarget.style.textShadow = ''}>
          Acerca de Mascotopia
        </a>
        <a 
          onClick={() => handleLinkClick('Quieres ver tus productos en nuestra pagina? Contactanos! Whatsapp: 1234567890 , Email: falso@falso.falso ')} 
          style={linkStyle} 
          onMouseEnter={e => e.currentTarget.style.textShadow = linkHoverStyle.textShadow} 
          onMouseLeave={e => e.currentTarget.style.textShadow = ''}>
          Contacto para Empresas
        </a>
        <a 
          onClick={() => handleLinkClick('Bienvenido a Mascotopia. Al utilizar nuestro sitio web y servicios, aceptas cumplir con estos términos y condiciones. Si no estás de acuerdo con alguna parte de estos términos, te pedimos que no utilices nuestro sitio web.')}   
          style={linkStyle} 
          onMouseEnter={e => e.currentTarget.style.textShadow = linkHoverStyle.textShadow} 
          onMouseLeave={e => e.currentTarget.style.textShadow = ''}>
          Términos y Condiciones
        </a>
      </div>
      <div>
        &copy; {new Date().getFullYear()} Mascotopia. Todos los derechos reservados.
      </div>
      {isModalVisible && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000
        }}>
          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px', width: '80%', maxWidth: '500px', textAlign: 'center', fontFamily: 'Itim, cursive' }}>
            <h2>{modalContent}</h2>
            <button onClick={closeModal} style={{ padding: '10px 20px', backgroundColor: '#ff7d96', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '20px', fontFamily: 'Itim, cursive', fontSize: '14px', fontWeight: 'bold' }}>Cerrar</button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
