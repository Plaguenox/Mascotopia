import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = ({ setUserData, setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    correo_electronico: '',
    contraseña: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('/login', formData);
      console.log('Datos del usuario:', response.data);
      localStorage.setItem('token', response.data.token);
      setUserData(response.data.user);
      setIsLoggedIn(true);
      navigate('/profile');
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message || 'Error durante el inicio de sesión');
      } else {
        setError('Error durante el inicio de sesión');
      }
      console.error('Error durante el inicio de sesión:', error);
    }
  };

  return (
    <form onSubmit={handleLogin} style={styles.container}>
      <h2 style={styles.title}>Iniciar Sesión</h2>
      {error && <p style={styles.error}>{error}</p>}
      <div style={styles.inputGroup}>
        <input
          type="email"
          name="correo_electronico"
          placeholder="Correo electrónico"
          value={formData.correo_electronico}
          onChange={handleChange}
          style={styles.input}
        />
      </div>
      <div style={styles.inputGroup}>
        <input
          type="password"
          name="contraseña"
          placeholder="Contraseña"
          value={formData.contraseña}
          onChange={handleChange}
          style={styles.input}
        />
      </div>
      <button type="submit" style={styles.button}>Iniciar Sesión</button>
      <p style={styles.linkText}>
        ¿Aun no tienes cuenta? <Link to="/register" style={styles.link}>Registrate aquí</Link>
      </p>
    </form>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333',
  },
  inputGroup: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
    width: '100%',
  },
  input: {
    flex: 1,
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
  linkText: {
    marginTop: '15px',
    fontSize: '14px',
    color: '#333',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
};

export default Login;
