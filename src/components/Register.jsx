import React, { useState } from "react";
import './Register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleregister = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="form-wrapper">
      <form className="register-form" onSubmit={handleregister}>
        <h2>Welcome</h2>

        <label className="form-label">Enter your Email</label>
        <input
          type="text"
          placeholder="Enter Your Email"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="form-label">Confirm Password</label>
        <input
          type="password"
          placeholder="••••••••"
          className="form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="form-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
