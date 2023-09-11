import React, { useContext } from 'react';
import { AuthContext } from '../Auth';
import { auth } from '../firebase';

const LogoutButton = () => {
  const { setCurrentUser } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setCurrentUser(null);
    } catch (error) {
      console.error('Hubo un problema al cerrar sesión:', error);
    }
  };

  return (
      <span className="btn btn-link nav-link" onClick={handleLogout}>Cerrar sesión</span>
  );
};

export default LogoutButton;
