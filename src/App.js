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
      <Card />
      <Footer />
    </div>
  );
}

export default App;
