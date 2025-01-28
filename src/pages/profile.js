import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import Perfil from '../components/perfil';

const ProfilePage = ({ userData, setIsLoggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <Header isLoggedIn={true} setIsLoggedIn={setIsLoggedIn} />
      <div className="profile-container" style={styles.profileContainer}>
        {userData ? (
          <Perfil userData={userData} setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <p>Cargando datos del perfil...</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  profileContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '80vh',
    padding: '16px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#ff4d4d',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '20px',
  },
};

export default ProfilePage;
