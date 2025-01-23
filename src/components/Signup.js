import React, { useState } from "react";
import './Signup.css';

function Signup({ setIsAuthenticated, setIsLoginPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    if (email && password) {
      alert("Account created successfully!");
      setIsAuthenticated(true);
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-header">Signup</h2>
      <form onSubmit={handleSignup} className="signup-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="signup-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signup-input"
        />
        <button
          type="submit"
          className="signup-button"
        >
          Signup
        </button>
      </form>
      <p className="switch-page" onClick={() => setIsLoginPage(true)}>
        Already have an account? Login here.
      </p>
    </div>
  );
}

export default Signup;
