import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaMapMarkerAlt, FaPhone, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn, setUserData }) => {
  const [isRegistering, setIsRegistering] = useState(true);
  const [formData, setFormData] = useState({
    nombre: '',
    correo_electronico: '',
    contraseña: '',
    direccion: '',
    telefono: '',
    rol: 'cliente',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = isRegistering ? 'http://127.0.0.1:8000/api/usuarios' : 'http://127.0.0.1:8000/api/login';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData.message;
        throw new Error(errorMessage);
      }

      const data = await response.json();
      setSuccess(true);
      setError(null); // Limpiar error si el registro es exitoso
      console.log(isRegistering ? 'Registro exitoso:' : 'Login exitoso:', data);
      setIsLoggedIn(true); // Actualizar el estado de inicio de sesión

      // Si es registro, usar los datos del formulario
      // Si es inicio de sesión, usar los datos recibidos de la respuesta
      setUserData({
        nombre: isRegistering ? formData.nombre : data.user.nombre,
        correo_electronico: isRegistering ? formData.correo_electronico : data.user.correo_electronico,
        direccion: isRegistering ? formData.direccion : data.user.direccion,
        telefono: isRegistering ? formData.telefono : data.user.telefono,
      });

      navigate('/profile'); // Redirigir a la página de perfil
    } catch (error) {
      setError(error.message);
      setSuccess(false); // Limpiar éxito si hay error
    }
  };

  const handleLogout = () => {
    setSuccess(false);
    setFormData({
      nombre: '',
      correo_electronico: '',
      contraseña: '',
      direccion: '',
      telefono: '',
      rol: 'cliente',
    });
    setIsLoggedIn(false); // Actualizar el estado de inicio de sesión
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={styles.container}>
      {success ? (
        <div style={styles.successContainer}>
          <h2 style={styles.successTitle}>{isRegistering ? '¡Registro exitoso!' : '¡Bienvenido de vuelta!'}</h2>
          <p><strong>Nombre:</strong> {formData.nombre}</p>
          <p><strong>Correo Electrónico:</strong> {formData.correo_electronico}</p>
          <p><strong>Dirección:</strong> {formData.direccion}</p>
          <p><strong>Teléfono:</strong> {formData.telefono}</p>
          <button onClick={handleLogout} style={styles.button}>Cerrar Sesión</button>
        </div>
      ) : (
        <>
          <h1 style={styles.title}>{isRegistering ? 'Registro' : 'Login'}</h1>
          <form onSubmit={handleSubmit} style={styles.form}>
            {isRegistering && (
              <>
                <div style={styles.inputGroup}>
                  <label style={styles.label}><FaUser /> Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    style={styles.input}
                  />
                </div>
                <div style={styles.inputGroup}>
                  <label style={styles.label}><FaMapMarkerAlt /> Dirección</label>
                  <input
                    type="text"
                    name="direccion"
                    value={formData.direccion}
                    onChange={handleChange}
                    required
                    style={styles.input}
                  />
                </div>
                <div style={styles.inputGroup}>
                  <label style={styles.label}><FaPhone /> Teléfono</label>
                  <input
                    type="text"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    maxLength="15"
                    style={styles.input}
                  />
                </div>
              </>
            )}
            <div style={styles.inputGroup}>
              <label style={styles.label}><FaEnvelope /> Correo Electrónico</label>
              <input
                type="email"
                name="correo_electronico"
                value={formData.correo_electronico}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}><FaLock /> Contraseña</label>
              <div style={styles.passwordContainer}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="contraseña"
                  value={formData.contraseña}
                  onChange={handleChange}
                  required
                  minLength="8"
                  style={styles.input}
                />
                <button type="button" onClick={toggleShowPassword} style={styles.eyeButton}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <button type="submit" style={styles.button}>{isRegistering ? 'Registrarse' : 'Iniciar Sesión'}</button>
          </form>
          <button onClick={() => setIsRegistering(!isRegistering)} style={styles.toggleButton}>
            {isRegistering ? '¿Ya tienes una cuenta? Inicia sesión' : '¿No tienes una cuenta? Regístrate'}
          </button>
          {error && <p style={styles.error}>{error}</p>}
        </>
      )}
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
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
    fontSize: '16px',
    color: '#4A4A4A',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '14px',
  },
  passwordContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  eyeButton: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    marginLeft: '-30px',
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
  toggleButton: {
    marginTop: '10px',
    backgroundColor: 'transparent',
    color: '#1E90FF',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: '10px',
  },
  success: {
    color: 'green',
    textAlign: 'center',
    marginTop: '10px',
  },
  successContainer: {
    textAlign: 'center',
  },
  successTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#4A4A4A',
  },
};

export default Login;
