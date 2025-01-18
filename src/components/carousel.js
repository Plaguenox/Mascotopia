import React, { useState, useEffect } from 'react';

const images = [
  { src: '/resources/1.png', info: 'Información de la Imagen 1' },
  { src: '/resources/2.png', info: 'Información de la Imagen 2' },
  { src: '/resources/3.png', info: 'Información de la Imagen 3' }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevClick = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleImageClick = () => {
    setIsModalVisible(true);
  };

  const handleCloseClick = () => {
    setIsModalVisible(false);
  };

  return (
    <div style={{ width: '100%', textAlign: 'center', marginBottom: '20px' }}>
      <h2 style={{ fontSize: '30px'}}>Nuestros Productos</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '0px', marginBottom: '20px' }}>
        <div
          style={{
            width: '800px',
            height: '300px',
            overflow: 'hidden',
            position: 'relative',
            border: '2px solid #ccc',
            cursor: 'pointer'
          }}
          onClick={handleImageClick}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`Imagen ${index + 1}`}
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                opacity: currentIndex === index ? 1 : 0,
                transition: 'opacity 1s ease-in-out'
              }}
            />
          ))}
          <button onClick={handlePrevClick} style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', padding: '10px', cursor: 'pointer', zIndex: 1 }}>Anterior</button>
          <button onClick={handleNextClick} style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', padding: '10px', cursor: 'pointer', zIndex: 1 }}>Siguiente</button>
        </div>
        {isModalVisible && (
          <div style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
          }}>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px', width: '80%', maxWidth: '500px', textAlign: 'center' }}>
              <h2>Información de la Imagen</h2>
              <p>{images[currentIndex].info}</p>
              <button onClick={handleCloseClick} style={{ padding: '10px 20px', backgroundColor: '#dc3545', color: '#fff', border: 'none', cursor: 'pointer' }}>Cerrar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;