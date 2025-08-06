import React, { useState } from 'react';
import "./Login.css";
import { useNavigate } from 'react-router-dom';

const LoginCard = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const result = await response.json();
      console.log("Login Response:", result);

      // Optional: Navigate to dashboard if login is successful
      if (result.success) {
        navigate("/dashboard");
      } else {
        alert(result.message || "Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Something went wrong. Try again.");
    }
  };

  const handleReset = () => {
    navigate('/reset');
  };

  const handleNewAccount = () => {
    navigate('/register');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-left">
          <h2 className="left-title">Enter Your Dashboard</h2>
        </div>

        <div className="login-right">
          <h1 className="brand-name">Login Panel</h1>

          <form className="login-form" onSubmit={handleSubmit}>
            <label className="form-label">User name or Email</label>
            <input
              type="text"
              placeholder="Enter Your Email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label className="form-label">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="forgot-link">
              <span
                onClick={handleReset}
                style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }}
              >
                Forgot Password
              </span>
            </div>

            <button className="signin-btn" type="submit">
              Sign in
            </button>
          </form>

          <div className="divider">
            <span>or</span>
          </div>

          <button
            className="google-btn"
            onClick={() => window.location.href = "https://www.google.com/"}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
              alt="Google"
            />
            Sign in with Google
          </button>

          <p className="create-account">
            New Employee?{" "}
            <span
              onClick={handleNewAccount}
              style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }}
            >
              Create Account
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
