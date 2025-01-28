import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import Login from '../components/login';

const LoginPage = ({ setUserData, setIsLoggedIn }) => {
  const [isLoggedIn, setIsLoggedInState] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedInState(true);
      navigate('/home');
    }
  }, [navigate]);

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedInState} />
      <div className="login-container" style={styles.loginContainer}>
        <Login setUserData={setUserData} setIsLoggedIn={setIsLoggedInState} />
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  loginContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh',
    padding: '16px',
  },
};

export default LoginPage;
