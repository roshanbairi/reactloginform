import React, { useState } from "react";
import './Reset.css';

const Reset = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlereset = (e) => {
    e.preventDefault();
    console.log('Reset Email:', email);
    console.log('New Password:', password);
  };

  return (
    <div className="reset-container">
      <form className="reset-form" onSubmit={handlereset}>
        <h2>Reset Password</h2>

        <label className="form-label">Email</label>
        <input
          type="text"
          placeholder="Enter Your Email"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="form-label">New Password</label>
        <input
          type="password"
          placeholder="••••••••"
          className="form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="form-button">
          Reset
        </button>
      </form>
    </div>
  );
};

export default Reset;
