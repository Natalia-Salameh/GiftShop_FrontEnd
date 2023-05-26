import React, { useState, useEffect } from "react";
import "./login.css";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state for tracking login status

  useEffect(() => {
    // Check if the user is already logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(isLoggedIn);
  }, []);

  const handleLogin = () => {
    // Perform login logic here
    // ...

    // Set the login status in local storage
    localStorage.setItem('isLoggedIn', true);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform logout logic here
    // ...

    // Remove the login status from local storage
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user");

    const loginRequest = {
      username: username,
      password: password
    };

    fetch('http://localhost:8080/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginRequest)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Incorrect username or password');
        }
      })
      .then(data => {
        // Handle the response data
        console.log(data);
        // Perform further actions with the JWT token and user details

        // Set the login status in local storage
        localStorage.setItem('isLoggedIn', true);
        setIsLoggedIn(true);

        // Go back to the previous page after successful login
        window.history.back();
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
        setError(error.message);
      });
  };

  if (isLoggedIn) {
    // Render the profile component when the user is logged in
    return (
      <div>
        <h1>Welcome to the Profile Page</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  } else {
    // Render the login form when the user is not logged in
    return (
      <form onSubmit={handleSubmit}>
        {error && <p className="error-message">{error}</p>}
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
};

export default LoginPage;
