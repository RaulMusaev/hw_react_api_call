import React, { useState } from 'react';
import { authenticate } from './authServise'; 
function App() {
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const result = await authenticate('admin2', 'password123');
      setToken(result.token);
      setError(null);
    } catch (err) {
      setError('Failed to authenticate');
      setToken(null);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Вход в систему</h1>
      <button className="login-button" onClick={handleLogin}>Войти</button>
      {token && <p className="token">Токен: {token}</p>}
      {error && <p className="error">Ошибка: {error}</p>}
    </div>
  );
}

export default App;