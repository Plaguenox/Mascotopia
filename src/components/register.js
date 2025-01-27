import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaHome, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = ({ setUserData, setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleRegister = () => {
    // Lógica de registro de usuario
    setIsLoggedIn(true);
    setUserData({
      nombre: name,
      correo_electronico: email,
      direccion: address,
      telefono: phone,
    });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Registro</h2>
      <div style={styles.inputGroup}>
        <FaUser style={styles.icon} />
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
      </div>
      <div style={styles.inputGroup}>
        <FaEnvelope style={styles.icon} />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
      </div>
      <div style={styles.inputGroup}>
        <FaLock style={styles.icon} />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
      </div>
      <div style={styles.inputGroup}>
        <FaHome style={styles.icon} />
        <input
          type="text"
          placeholder="Dirección"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={styles.input}
        />
      </div>
      <div style={styles.inputGroup}>
        <FaPhone style={styles.icon} />
        <input
          type="text"
          placeholder="Teléfono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={styles.input}
        />
      </div>
      <button onClick={handleRegister} style={styles.button}>Registrarse</button>
      <p style={styles.linkText}>
        ¿Ya tienes una cuenta? <Link to="/login" style={styles.link}>Inicia sesión aquí</Link>
      </p>
    </div>
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
};

export default Register;
