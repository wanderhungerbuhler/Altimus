import React, { createContext, useCallback, useState, useContext } from 'react';
// import api from '../services/api';

interface AuthState {
  email: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  email: string;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const email = localStorage.getItem('@Altimus:email');

    if (email) {
      return { email };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    // CRIAR CONEXÃO COM BANCO (EU NÃO FIZ, MAS DEIXEI O CAMINHO PRONTO)
    // const response = await api.post('sessions', {
    //   email,
    //   password,
    // });

    if (email === 'wander@whfdev.com.br' && password === '1234567') {
      console.log({ email, password }, 'Usuário logado');
      localStorage.setItem('@Altimus:email', email);
      setData({ email });
    } else {
      console.log('Usuário não está cadastrado em nosso sistema!');
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Altimus:email');
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ email: data.email, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
