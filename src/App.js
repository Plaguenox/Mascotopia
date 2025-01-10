import React from 'react';
import Header from './components/header';
import Dropdown from './components/dropdown';
import Carousel from './components/carousel';
import Card from './components/card';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Dropdown />
      <Carousel />
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <Card image="https://via.placeholder.com/150" brand="Marca 1" productName="Producto 1" price="$10" />
        <Card image="https://via.placeholder.com/150" brand="Marca 2" productName="Producto 2" price="$20" />
        <Card image="https://via.placeholder.com/150" brand="Marca 3" productName="Producto 3" price="$30" />
        <Card image="https://via.placeholder.com/150" brand="Marca 4" productName="Producto 4" price="$40" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
