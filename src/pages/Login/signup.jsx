import React, { useState } from "react";
import './signup.css';

const SignupPage = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user");

    const signupRequest = {
      username: username,
      email: email,
      password: password,
    };

    fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupRequest),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log(data);
        // Perform further actions with the signed-up user details
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  const handleModalClose = () => {
    // Call the onClose function passed from the parent component
    if (typeof onClose === "function") {
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="modal-close" onClick={handleModalClose}>
          <img src="./images/download3.png" alt="Close" />
        </span>
        <h2>Sign Up</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
