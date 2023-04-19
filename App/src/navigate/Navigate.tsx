import {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LoggedOutNavigate} from './LoggedOutNavigate';
import {AdminNavigate} from './AdminNavigate';
import {UserNavigate} from './UserNavigate';

import {AuthContext} from '../context/AuthContext';

const Navigate = () => {
  const {isAuthenticated, user} = useContext(AuthContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        user.isAdmin ? (
          <AdminNavigate />
        ) : (
          <UserNavigate />
        )
      ) : (
        <LoggedOutNavigate />
      )}
    </NavigationContainer>
  );
};

export default Navigate;
