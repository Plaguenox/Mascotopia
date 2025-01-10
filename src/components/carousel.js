import React, { useState, useEffect } from 'react';

const images = [
  'https://via.placeholder.com/800x300?text=Imagen+1',
  'https://via.placeholder.com/800x300?text=Imagen+1',
  'https://via.placeholder.com/800x300?text=Imagen+1'
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: '800px', height: '300px', overflow: 'hidden', position: 'relative' }}>
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
    </div>
  );
};

export default Carousel;