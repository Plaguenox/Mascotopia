import React, { useState, useEffect } from 'react';

const images = [
  { src: '/resources/ofe1.webp', info: 'Información de la Imagen 1' },
  { src: '/resources/ofe2.webp', info: 'Información de la Imagen 2' },
  { src: '/resources/ofe3.webp', info: 'Información de la Imagen 3' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <div style={{ width: '100%', textAlign: 'center', marginBottom: '20px' }}>
      <h2 style={{ fontSize: '40px', fontFamily: 'Itim, cursive', color: '#4A4A4A', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Nuestros Productos</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', marginBottom: '20px' }}>
        <div
          style={{
            width: '80%',
            height: '500px',
            overflow: 'hidden',
            position: 'relative',
            cursor: 'pointer',
            borderRadius: '10px',
          }}
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
                transition: 'opacity 1s ease-in-out',
                objectFit: 'contain',
              }}
            />
          ))}
          <button onClick={handlePrevClick} style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', backgroundColor: '#1E90FF', color: 'white', border: 'none', padding: '10px', cursor: 'pointer', zIndex: 1, borderRadius: '50%' }}>Anterior</button>
          <button onClick={handleNextClick} style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', backgroundColor: '#1E90FF', color: 'white', border: 'none', padding: '10px', cursor: 'pointer', zIndex: 1, borderRadius: '50%' }}>Siguiente</button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

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