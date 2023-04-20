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
  setUser : (user : User) => void;
  setToken : (token : string | null) => void;
  setIsAuthenticated : (isAuthenticated : boolean) => void;
}

export const AuthContext = createContext<contextInterface>({
  isAuthenticated : false,
  token : null,
  user : {
    username: '',
    name: '',
    email: '',
    isAdmin : false,
  },
  loading : true,
  setLoading : (loading : boolean) => {},
  setUser : (user : User) => {},
  setToken : (token : string | null) => {},
  setIsAuthenticated : (isAuthenticated : boolean) => {},
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
      setLoading,
      setUser, 
      setToken,
      setIsAuthenticated,
    };
  }, [isAuthenticated, token, user, loading, setLoading, setUser, setToken, setIsAuthenticated]);

  const clearStorage = async () => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('username');
    await AsyncStorage.removeItem('name');
    await AsyncStorage.removeItem('email');
    await AsyncStorage.removeItem('isAdmin');
  }

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('token');
      const username = await AsyncStorage.getItem('username');
      const name = await AsyncStorage.getItem('name');
      const email = await AsyncStorage.getItem('email');
      const isAdmin = await AsyncStorage.getItem('isAdmin');
      if (token && username && name && email && isAdmin) {
        setToken(token);
        setUser({
          username,
          name,
          email,
          isAdmin : isAdmin === 'true' ? true : false,
          })
        setIsAuthenticated(true);
      }
      setLoading(false)
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
            clearStorage();
            setToken(null);
            setUser({
              username: '',
              name: '',
              email: '',
              isAdmin : false,
            });
            setIsAuthenticated(false);
          });
          setLoading(false);
        }
        getUser();
      }
  }, [])

  useEffect(()=>{
    console.log("In AuthContext: ", isAuthenticated, token, user, loading);
  }, [isAuthenticated, token, user, loading])

  return (
    <AuthContext.Provider value={ProviderValue}>
      {children}
    </AuthContext.Provider>);
};
