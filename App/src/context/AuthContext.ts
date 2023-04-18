import { createContext } from 'react';

export interface AuthContextInterface {
    checkingSession: boolean;
    token: string | null;
    idToken: string | null;
    expiresAt: number | null;
    isAuthenticated: boolean;
    handleAuthentication: () => void;
    login: () => void;
    logout: () => void;
}

// export the default context
export const AuthContext = createContext<AuthContextInterface>({
    checkingSession: false,
    token: null,
    idToken: null,
    expiresAt: null,
    isAuthenticated: false,
    handleAuthentication: () => {},
    login: () => {},
    logout: () => {}
});