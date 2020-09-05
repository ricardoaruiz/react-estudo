import React, { useState, useCallback } from 'react'
import { useAuth } from '../../contexts/AuthContext/useAuth'
import { useHistory } from 'react-router-dom';

const Login = () => {

  const { login } = useAuth();
  const history = useHistory();

  const [credentials, setCredentials] = useState({
    login: 'rruiz',
    password: '123456',
  })

  const handleInputChange = useCallback((event) => {
    const { name, value } = event.target;
    setCredentials(state => ({ ...state, [name]: value }));
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    login(credentials);
    history.push("/main");
  }, [credentials, history, login])

  return (
    <div>
      Login
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="login">User</label>
          <input
            type="text"
            id="login"
            name="login"
            value={credentials.login}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
