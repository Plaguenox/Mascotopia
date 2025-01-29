import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Perfil = ({ userData, setUserData, setIsLoggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUserData = localStorage.getItem('userData');
    
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    } else if (token) {
      axios.get('/user', { headers: { Authorization: `Bearer ${token}` } })
        .then(response => {
          setUserData(response.data);
          localStorage.setItem('userData', JSON.stringify(response.data));
        })
        .catch(error => {
          console.error('Error al obtener los datos del usuario:', error);
        });
    }
  }, [setUserData]);

  const handleLogoutClick = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    if (typeof setIsLoggedIn === 'function') {
      setIsLoggedIn(false);
    }
    navigate('/home');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Mi Perfil</h2>
      <p><strong>Nombre:</strong> {userData.nombre}</p>
      <p><strong>Correo Electrónico:</strong> {userData.correo_electronico}</p>
      <p><strong>Dirección:</strong> {userData.direccion}</p>
      <p><strong>Teléfono:</strong> {userData.telefono}</p>
      <button onClick={handleLogoutClick} style={styles.button}>Cerrar Sesión</button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#4A4A4A',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#1E90FF',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default Perfil;
