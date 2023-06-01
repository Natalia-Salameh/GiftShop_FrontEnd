import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userRole");
    setIsLoggedIn(false);
    setUserRole([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const signupData = {
      username: username,
      email: email,
      role: userRole.length > 0 ? userRole : ["ROLE_USER"],
      password: password
    };

    fetch("http://localhost:8080/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(signupData)

    })
    // console.log( JSON.stringify(signupData))

      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Signup failed. Please try again.");
        }
      })
      .then(data => {
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("userRole", JSON.stringify(data.roles));
        setIsLoggedIn(true);
        setUserRole(data.roles);
        // Redirect to the main page after successful signup
        window.location.href = "/"; // Replace "/" with the desired main page route
      })
      .catch(error => {
        console.error(error);
        setError(error.message);
      });
  };

  // Rest of the code...

  if (isLoggedIn) {
    return (
      <div>
        <h1>Welcome to the Profile Page</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Signup</h1>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
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
            Email:
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
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
          <label>
            Confirm Password:
            <input
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Signup</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    );
  }
};

export default SignupPage;
