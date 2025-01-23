import React, { useState } from "react";
import './Login.css';

function Login({ setIsAuthenticated, setIsLoginPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      setIsAuthenticated(true);
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-header">Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button
          type="submit"
          className="login-button"
        >
          Login
        </button>
      </form>
      <p className="switch-page" onClick={() => setIsLoginPage(false)}>
        Don't have an account? Sign up here.
      </p>
    </div>
  );
}

export default Login;
