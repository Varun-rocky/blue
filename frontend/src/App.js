import React, { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Logout from "./components/Logout";
import './App.css'; // Optional: Add any global styles here

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(false);  // Track which page is being shown

  return (
    <div className="App">
      <h1>Blue Reserve</h1>
      {!isAuthenticated ? (
        <>
          {isLoginPage ? (
            <Login setIsAuthenticated={setIsAuthenticated} setIsLoginPage={setIsLoginPage} />
          ) : (
            <Signup setIsAuthenticated={setIsAuthenticated} setIsLoginPage={setIsLoginPage} />
          )}
        </>
      ) : (
        <Logout setIsAuthenticated={setIsAuthenticated} />
      )}
    </div>
  );
}

export default App;
