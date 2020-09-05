import React, { createContext, useCallback, useState } from 'react';

const LOCAL_STORAGE_USER_KEY = '@router-sample/user';
const LOCAL_STORAGE_USER_TOKEN = '@router-sample/token';

const AuthContext = createContext({
  user: { login: '', token: '' },
  login: () => { },
  logout: () => { }
})

const AuthProvider = props => {
  const { children } = props;

  const [user, setUser] = useState(() => {
    return {
      login: localStorage.getItem(LOCAL_STORAGE_USER_KEY),
      token: localStorage.getItem(LOCAL_STORAGE_USER_TOKEN),
    }
  });

  const login = useCallback(({ login, password }) => {
    const token = 'abc123';
    setUser({ login, token });
    localStorage.setItem(LOCAL_STORAGE_USER_KEY, login);
    localStorage.setItem(LOCAL_STORAGE_USER_TOKEN, token);
  }, []);

  const logout = useCallback(() => {
    setUser({ login: '', token: '' });
    localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
    localStorage.removeItem(LOCAL_STORAGE_USER_TOKEN);
  }, [])

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider };
