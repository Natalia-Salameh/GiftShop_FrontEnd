import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./login.css";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state for tracking login status
  const [userRole, setUserRole] = useState(''); // New state for user role

  useEffect(() => {
    // Check if the user is already logged in
    const loggedIn = localStorage.getItem('isLoggedIn');
    const role = localStorage.getItem('userRole');
    setIsLoggedIn(loggedIn);
    setUserRole(role);
  }, []);

  const handleLogin = () => {
    // Perform login logic here
    // ...

    // Set the login status and user role in local storage
    localStorage.setItem('isLoggedIn', true);
    localStorage.setItem('userRole', 'ROLE_USER');
    setIsLoggedIn(true);
    setUserRole('ROLE_USER');
  };

  const handleLogout = () => {
    // Perform logout logic here
    // ...

    // Remove the login status and user role from local storage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userRole');
    setIsLoggedIn(false);
    setUserRole('');
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

        // Set the login status and user role in local storage
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('userRole', data.roles[0]);
        setIsLoggedIn(true);
        setUserRole(data.roles[0]);

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
    if (userRole === 'ROLE_ADMIN') {
      // Render the admin component when the user is logged in as admin
      return (
        <div>
          <h1>Welcome to the Admin Dashboard</h1>
          <Link to="/categorypage">Go to Category Page</Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      );
    } else {
      // Render the user profile component when the user is logged in as user
      return (
        <div>
          <h1>Welcome to the Profile Page</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      );
    }
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
