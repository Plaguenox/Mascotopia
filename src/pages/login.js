import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Login from '../components/login';

const LoginPage = ({ setUserData, setIsLoggedIn }) => {
  const [isLoggedIn, setIsLoggedInState] = useState(false);

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
