import React from 'react';
import Header from '../components/header';
import Carousel from '../components/carousel';
import Welcome, { welcomeText } from '../components/welcome';
import Footer from '../components/footer';
import TextToSpeech from '../components/TextToSpeech';

const Home = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <Welcome />
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
        <TextToSpeech text={welcomeText} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
