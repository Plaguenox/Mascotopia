import React from 'react';
import Header from '../components/header';
import Carousel from '../components/carousel';
import Footer from '../components/footer';

const Home = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Itim, cursive', color: '#4A4A4A' }}>
        <h1 style={{ fontSize: '40px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Bienvenidos a Mascotopia</h1>
        <p style={{ fontSize: '20px', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>En Mascotopia, creemos que cada mascota merece lo mejor. Somos una tienda en línea dedicada a ofrecer una amplia gama de productos de alta calidad para tus amigos peludos. Desde alimentos nutritivos y saludables hasta juguetes divertidos y accesorios modernos, tenemos todo lo que necesitas para mantener a tu mascota feliz y saludable.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
