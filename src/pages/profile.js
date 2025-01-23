import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Perfil from '../components/perfil';

const ProfilePage = ({ userData, handleLogout }) => {
  return (
    <div>
      <Header isLoggedIn={true} />
      <div className="profile-container" style={styles.profileContainer}>
        {userData ? (
          <Perfil userData={userData} handleLogout={handleLogout} />
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
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh',
    padding: '16px',
  },
};

export default ProfilePage;
