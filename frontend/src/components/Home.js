import React, { useEffect, useState } from "react";
import Logout from "./Logout";

function Home({ handleLogout }) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const token = localStorage.getItem("jwtToken");
        const response = await fetch("http://localhost:8080/api/protected", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setMessage(data.message);
        } else {
          console.error("Failed to fetch protected data");
        }
      } catch (error) {
        console.error("Error fetching protected data:", error);
      }
    };

    fetchProtectedData();
  }, []);

  return (
    <div>
      <h2>Welcome to the Home Page!</h2>
      <p>{message}</p>
      <Logout handleLogout={handleLogout} />
    </div>
  );
}

export default Home;
