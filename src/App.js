import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import animationData from './resources/Animation - 1736455585853.json';
import Header from './components/header';
import Dropdown from './components/dropdown';
import Carousel from './components/carousel';
import Card from './components/card';
import Footer from './components/footer';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="App">
      {isLoading && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
        }}>
          <Lottie options={defaultOptions} height={300} width={300} />
        </div>
      )}
      {!isLoading && (
        <>
          <Header setIsModalOpen={setIsModalOpen} />
          <Dropdown />
          <Carousel isModalOpen={isModalOpen} />
          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
            <Card image="https://via.placeholder.com/150" brand="Marca 1" productName="Producto 1" price="$10" />
            <Card image="https://via.placeholder.com/150" brand="Marca 2" productName="Producto 2" price="$20" />
            <Card image="https://via.placeholder.com/150" brand="Marca 3" productName="Producto 3" price="$30" />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;