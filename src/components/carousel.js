import React, { useState, useEffect } from 'react';
import ofe1 from '../assets/contenido/carrusel/ofe1.webp';
import ofe2 from '../assets/contenido/carrusel/ofe2.webp';
import ofe3 from '../assets/contenido/carrusel/ofe3.webp';

const images = [
  { src: ofe1, info: 'Información de la Imagen 1' },
  { src: ofe2, info: 'Información de la Imagen 2' },
  { src: ofe3, info: 'Información de la Imagen 3' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div style={{ width: '100%', textAlign: 'center', marginBottom: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '0', marginBottom: '0' }}>
        <div
          style={{
            width: '100%',
            height: '500px',
            overflow: 'hidden',
            position: 'relative',
            cursor: 'pointer',
            borderRadius: '0',
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
                objectFit: 'fill',
              }}
            />
          ))}
          <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '5px' }}>
            {images.map((_, index) => (
              <span
                key={index}
                onClick={() => handleIndicatorClick(index)}
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: currentIndex === index ? '#1E90FF' : '#FFFFFF',
                  cursor: 'pointer',
                }}
              ></span>
            ))}
          </div>
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