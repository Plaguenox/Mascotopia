import React, { useState } from 'react';
import axios from 'axios';
import { FaUser, FaEnvelope, FaLock, FaHome, FaPhone } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Register = ({ setUserData, setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    contraseña: '',
    correo_electronico: '',
    direccion: '',
    telefono: '',
    rol: 'cliente',
    puede_editar_diseno: false,
    puede_editar_textos: false,
    puede_editar_productos: false,
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

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('/register', formData);
      localStorage.setItem('token', response.data.token);
      setUserData(response.data.user);
      setIsLoggedIn(true);
      navigate('/profile');
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message || 'Error durante el registro');
      } else {
        setError('Error durante el registro');
      }
      console.error('Error durante el registro:', error);
    }
  };

  return (
    <form onSubmit={handleRegister} style={styles.container}>
      <h2 style={styles.title}>Registro</h2>
      {error && <p style={styles.error}>{error}</p>}
      <div style={styles.inputGroup}>
        <FaUser style={styles.icon} />
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          style={styles.input}
        />
      </div>
      <div style={styles.inputGroup}>
        <FaEnvelope style={styles.icon} />
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
        <FaLock style={styles.icon} />
        <input
          type="password"
          name="contraseña"
          placeholder="Contraseña"
          value={formData.contraseña}
          onChange={handleChange}
          style={styles.input}
        />
      </div>
      <div style={styles.inputGroup}>
        <FaHome style={styles.icon} />
        <input
          type="text"
          name="direccion"
          placeholder="Dirección"
          value={formData.direccion}
          onChange={handleChange}
          style={styles.input}
        />
      </div>
      <div style={styles.inputGroup}>
        <FaPhone style={styles.icon} />
        <input
          type="text"
          name="telefono"
          placeholder="Teléfono"
          value={formData.telefono}
          onChange={handleChange}
          style={styles.input}
        />
      </div>
      <button type="submit" style={styles.button}>Registrarse</button>
      <p style={styles.linkText}>
        ¿Ya tienes una cuenta? <Link to="/login" style={styles.link}>Inicia sesión aquí</Link>
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
  icon: {
    marginRight: '10px',
    color: '#888',
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
  linkText: {
    marginTop: '10px',
    fontSize: '14px',
    color: '#333',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
};

export default Register;
