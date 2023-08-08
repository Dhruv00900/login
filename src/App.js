import React, { useState } from "react";
import './App.css';

function App() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleFormMode = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Handle login logic here using the email and password state
    alert("Login Successfuly");
    console.log('Logging in with:', email, password);
  };

  const handleSignup = () => {
    alert("Signup Successfuly");
    // Handle signup logic here using the email, password, and other state
    console.log('Signing up with:', email, password);
  };

  return (
    <div className={`form-structor ${isLoginForm ? '' : 'signup-active'}`}>
      <div className="signup">
        <h2 className="form-title" id="signup" onClick={toggleFormMode}>
          <span>or</span> Signup
        </h2>
        <div className="form-holder">
          <input type="text" className="input" placeholder="Name" />
          <input type="email" className="input" placeholder="Email" />
          <input type="password" className="input" placeholder="Password" />
        </div>
        <button className="submit-btn" onClick={handleSignup}>Sign up</button>
      </div>
      <div className={`login ${isLoginForm ? 'slide-up' : ''}`}>
        <div className="center">
          <h2 className="form-title" id="login" onClick={toggleFormMode}>
            <span>or</span> Login
          </h2>
          <div className="form-holder">
            <input type="email" className="input" onChange={handleEmailChange} placeholder="Email" />
            <input type="password" className="input" onChange={handlePasswordChange} placeholder="Password" />
          </div>
          <button className="submit-btn" onClick={handleLogin}>Log in</button>
        </div>
      </div>
    </div>
  );
}

export default App;
