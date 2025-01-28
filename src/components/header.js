import React, { useState, useEffect } from 'react';
import { FaHome, FaPaw, FaUser, FaSearch } from 'react-icons/fa';
import logo from '../assets/contenido/logos/logopagina.png';
import { useNavigate } from 'react-router-dom';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(isLoggedIn);

  useEffect(() => {
    setLoggedIn(isLoggedIn);
  }, [isLoggedIn]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLoggedIn(true);
      if (typeof setIsLoggedIn === 'function') {
        setIsLoggedIn(true);
      }
    }
  }, [setIsLoggedIn]);

  const handleHomeClick = () => {
    navigate('/home');
  };

  const handleProductsClick = () => {
    navigate('/products');
  };

  const handleProfileClick = () => {
    if (loggedIn) {
      navigate('/profile');
    } else {
      navigate('/register');
    }
  };

  return (
    <div className="flex justify-between items-center p-4 bg-yellow-300 font-itim">
      <div className="flex items-center">
        <img src={logo} alt="Mascotopia Logo" className="w-28 h-28 mr-6" />
        <div className="font-bold text-4xl text-gray-800 font-itim animate-pulse">Mascotopia</div> {/* Añadir animación */}
      </div>
      <div className="flex items-center">
        <button onClick={handleHomeClick} className="flex items-center px-6 py-3 bg-blue-500 text-white rounded-full mr-6 transition-transform duration-300 hover:scale-105 hover:neon-border font-itim">
          <FaHome className="mr-2" /> Inicio
        </button>
        <button onClick={handleProductsClick} className="flex items-center px-6 py-3 bg-blue-500 text-white rounded-full mr-6 transition-transform duration-300 hover:scale-105 hover:neon-border font-itim">
          <FaPaw className="mr-2" /> Productos
        </button>
        {loggedIn ? (
          <>
            <button onClick={handleProfileClick} className="flex items-center px-6 py-3 bg-blue-500 text-white rounded-full mr-6 transition-transform duration-300 hover:scale-105 hover:neon-border font-itim">
              <FaUser className="mr-2" /> Mi Cuenta
            </button>
          </>
        ) : (
          <>
            <button onClick={handleProfileClick} className="flex items-center px-6 py-3 bg-blue-500 text-white rounded-full mr-6 transition-transform duration-300 hover:scale-105 hover:neon-border font-itim">
              <FaUser className="mr-2" /> Registro
            </button>
            <button className="flex items-center px-6 py-3 bg-blue-500 text-white rounded-full mr-6 transition-transform duration-300 hover:scale-105 hover:neon-border font-itim">
              <FaSearch className="mr-2" /> Búsqueda
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;

// Tipografía usada:
// - Itim: 'https://fonts.googleapis.com/css2?family=Itim&display=swap'

// Códigos de colores:
// - Fondo amarillo: #FFEB3B (bg-yellow-300)
// - Texto gris: #4A4A4A (text-gray-800)
// - Botones azules: #1E90FF (bg-blue-500)
// - Botones verdes: #32CD32 (bg-green-500)
// - Botones rojos: #FF4500 (bg-red-500)
// - Efecto neón: #FFFFFF (blanco)

