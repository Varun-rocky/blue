import React, { useState, useEffect } from "react";
import Signup from "./components/Signup";
import Home from "./components/Home";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if the user is already logged in on page load
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    setIsAuthenticated(false);
  };

  return (
    <div className="App">
      {!isAuthenticated ? (
        <div>
          <Signup setIsAuthenticated={setIsAuthenticated} />
        </div>
      ) : (
        <Home handleLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
