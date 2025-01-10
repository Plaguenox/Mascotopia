import React, { useState, useEffect } from 'react';

const images = [
  'https://via.placeholder.com/800x300?text=Imagen+1',
  'https://via.placeholder.com/800x300?text=Imagen+2',
  'https://via.placeholder.com/800x300?text=Imagen+3'
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px' }}>
      <div style={{ width: '800px', height: '300px', overflow: 'hidden', position: 'relative', border: '2px solid #ccc' }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
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
        <button onClick={handlePrevClick} style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', padding: '10px', cursor: 'pointer' }}>Anterior</button>
        <button onClick={handleNextClick} style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', padding: '10px', cursor: 'pointer' }}>Siguiente</button>
      </div>
    </div>
  );
};

export default Carousel;