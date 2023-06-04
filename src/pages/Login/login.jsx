import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import Authgoogle from "./googleauth";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    const role = localStorage.getItem("userRole");
    const storedName = localStorage.getItem("customerUsername");

    setIsLoggedIn(loggedIn);
    setUserRole(role);
    setName(storedName);
  }, []);

  const handleLogin = () => {
    // Perform login logic here
    // ...

    // Set the login status and user role in local storage
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("userRole", "ROLE_USER");
    setIsLoggedIn(true);
    setUserRole("ROLE_USER");
  };

  const handleLogout = () => {
    // Perform logout logic here
    // ...

    // Remove the login status and user role from local storage
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userRole");
    setIsLoggedIn(false);
    setUserRole("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginRequest = {
      username: username,
      password: password,
    };

    fetch("http://localhost:8080/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginRequest),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Incorrect username or password");
        }
      })
      .then((data) => {
        // Handle the response data
        console.log(data);

        // Store the customer details in local storage
        localStorage.setItem("customerId", data.id);
        localStorage.setItem("customerEmail", data.email);
        localStorage.setItem("customerUsername", data.username);
        localStorage.setItem("password", data.password);

        // Set the login status and user role in local storage
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("userRole", data.roles[0]);
        setIsLoggedIn(true);
        setUserRole(data.roles[0]);
        setName(data.username);

        // Go back to the previous page after successful login
        window.history.back();
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
        setError(error.message);
      });
  };

  if (isLoggedIn) {
    if (userRole === "ROLE_ADMIN") {
      // Render the admin component when the user is logged in as admin
      return (
        <div className="login-container">
          <div className="admin-dashboard">
            <h1>Welcome to the Admin Dashboard</h1>
            <Link to="/categorypage">Edit The Category Page</Link>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      );
    } else {
      // Render the user profile component when the user is logged in as user
      return (
        <div className="login-container">
          <div className="profile-page">
            <h1>Welcome, {name}</h1>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      );
    }
  } else {
    // Render the login form when the user is not logged in
    return (
      <div className="login-container">
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <h2>Log in Into your account</h2>
            {error && <p className="error-message">{error}</p>}
            <label>
              <input
                placeholder="Username"
                className="input-field"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br />
            <label>
              <input
                placeholder="Password"
                className="input-field"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <button className="submit-button" type="submit">
              Log In
            </button>
            <div className="line-container">
              <hr className="line" />
              <span className="or-text">or</span>
              <hr className="line" />
            </div>
            <div className="google">
              <Authgoogle />
            </div>
          </form>
          <div className="signup">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>
        </div>
      </div>
    );
  }
};

export default LoginPage;
