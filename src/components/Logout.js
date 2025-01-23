import React from "react";
import './Logout.css';

function Logout({ setIsAuthenticated }) {
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="logout-container">
      <h2 className="logout-header">You are logged in!</h2>
      <button
        onClick={handleLogout}
        className="logout-button"
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
