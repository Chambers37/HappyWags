// src/components/Auth.jsx
import { useState } from 'react';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true); // Toggles between Sign Up and Log In

  const toggleForm = () => setIsSignUp(!isSignUp);

  return (
    <div className="auth-container">
      <h2>{isSignUp ? 'Sign Up' : 'Log In'}</h2>
      <form className="auth-form">
        {isSignUp && (
          <input
            type="text"
            placeholder="Username"
            className="auth-input"
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="auth-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="auth-input"
          required
        />
        <button type="submit" className="auth-button">
          {isSignUp ? 'Sign Up' : 'Log In'}
        </button>
      </form>
      <button onClick={toggleForm} className="toggle-auth">
        {isSignUp
          ? 'Already have an account? Log In'
          : 'Need an account? Sign Up'}
      </button>
    </div>
  );
};

export default Auth;
