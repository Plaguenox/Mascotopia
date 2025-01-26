import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from './assets/contenido/splash/Animation - 1736455585853.json';
import Home from './pages/home';
import Products from './pages/products';
import Register from './pages/register';
import Profile from './pages/profile';
import Login from './components/login';
import Ubication from './pages/ubication';
import Fact from './pages/fact';
import Visits from './pages/visits';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    nombre: '',
    correo_electronico: '',
    direccion: '',
    telefono: '',
  });
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData({
      nombre: '',
      correo_electronico: '',
      direccion: '',
      telefono: '',
    });
  };

  return (
    <Router>
      <div>
        {isLoading ? (
          <div style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
          }}>
            <Lottie options={defaultOptions} height={300} width={300} />
          </div>
        ) : (
          <>
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/products" element={<Products setCart={setCart} />} />
              <Route path="/register" element={<Register setUserData={setUserData} />} />
              <Route path="/profile" element={<Profile userData={userData} handleLogout={handleLogout} />} />
              <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} />} />
              <Route path="/ubication" element={<Ubication />} />
              <Route path="/fact" element={<Fact cart={cart} />} />
              <Route path="/visits" element={<Visits />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
