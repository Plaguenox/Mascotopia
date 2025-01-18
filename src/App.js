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
  const [selectedOption, setSelectedOption] = useState('Alimentos'); 
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

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f0f8ff' }}>
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
          <Dropdown onOptionSelect={handleOptionSelect} />
          <Carousel />
          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', flex: '1 0 auto' }}>
            <div style={{ width: '100%', textAlign: 'left', padding: '10px' }}>
              <h2 style={{fontSize: '20px'}}>{selectedOption}</h2>
            </div>
            <Card image="https://via.placeholder.com/150" brand="Marca 1" productName="Producto 1" price="$10" />
            <Card image="https://via.placeholder.com/150" brand="Marca 2" productName="Producto 2" price="$20" />
            <Card image="https://via.placeholder.com/150" brand="Marca 3" productName="Producto 3" price="$30" />
          </div>
          <Footer style={{ flexShrink: 0 }} />
        </>
      )}
    </div>
  );
}

export default App;