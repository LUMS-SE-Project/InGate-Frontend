import {createContext, useState, useEffect, useMemo} from 'react';
import instance from '../api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface User {
  username: string;
  name: string;
  email: string;
  isAdmin : boolean;
}

export interface contextInterface {
  isAuthenticated : boolean;
  token : string | null;
  user : User,
  loading : boolean,
  setLoading : (loading : boolean) => void;
}

export const AuthContext = createContext<contextInterface>({
  isAuthenticated: false,
  token: null,
  user: {
    username: '',
    name: '',
    email: '',
    isAdmin : false,
  },
  loading: true,
  setLoading: (loading : boolean) => {}
});

export interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = (props : AuthProviderProps) => {

  const {children} = props;

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User>({
    username: '',
    name: '',
    email: '',
    isAdmin : false,
  });
  const [loading, setLoading] = useState<boolean>(true);

  const ProviderValue = useMemo<contextInterface>(() => {
    return {
      isAuthenticated,
      token,
      user,
      loading,
      setLoading
    };
  }, [isAuthenticated, token, user, loading]);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        setToken(token);
        setIsAuthenticated(true);
      }
    }
    checkAuth();
    if (token) {
      const getUser = async () => {
        instance.get('/current-user')
          .then((response)=>{
            console.log("In Then for AuthContext",response.data);
            setUser(response.data);
          })
          .catch((err)=>{
            console.log("Error: ", err.code, err.message)
          });
          setLoading(false);
        
      }
      getUser();
    }

  }, [])


  return (
    <AuthContext.Provider value={ProviderValue}>
      {children}
    </AuthContext.Provider>);
};
