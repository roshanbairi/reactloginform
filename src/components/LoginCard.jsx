import React, { useState } from 'react';
import "./Login.css";
import { useNavigate } from 'react-router-dom';

const LoginCard = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
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
          <video
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            autoPlay
            loop
            muted
            className="bird-video"
          />
          <h2 className="left-title">Enter Your Dashboard</h2>
        </div>

        <div className="login-right">
          <h1 className="brand-name">Login Panel</h1>

          <form className="login-form" onSubmit={handleLogin}>
            <label className="form-label">User name or Email</label>
            <input
              type="text"
              placeholder="Enter Your Email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="form-label">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="forgot-link">
              <span
                onClick={handleReset}
                style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }}
              >
                Forgot Password
              </span>
            </div>

            <button className="signin-btn">Sign in</button>
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
