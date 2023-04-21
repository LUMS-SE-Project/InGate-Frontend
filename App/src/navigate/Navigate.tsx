import {useContext} from 'react';
import {LoggedOutNavigate} from './LoggedOutNavigate';
import {AdminNavigate} from './AdminNavigate';
import {UserNavigate} from './UserNavigate';
import React from 'react';
import {AuthContext} from '../context/AuthContext';
import LandingPage from '../screens/LandingPage';

const Navigate = () => {
  const {
    isAuthenticated,
    user: {isAdmin},
    loading,
  } = useContext(AuthContext);

  return <UserNavigate />;
  // <AdminNavigate />;
  // loading ? (
  //   <LandingPage />
  // ) : isAuthenticated ? (
  //   isAdmin ? (
  //     <AdminNavigate />
  //   ) : (
  //     <UserNavigate />
  //   )
  // ) : (
  //   <LoggedOutNavigate />
  // );
  // <UserNavigate />;
  
};

export default Navigate;
