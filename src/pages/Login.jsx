import React from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/user");
  };


  const handleRegister = () => {
    navigate("/register")
  }

  return (
    <div className="login-row">
      <div className="login-row-left">
        <h1>Hello!</h1>
        <div>Welcome to the world of MyBank</div>
        <div>
          Are you a new user? <br /> Choose one of the following options if you
          are a new user
        </div>
        <div>
        
          <button className="register-button" onClick={handleRegister}> Register Now</button>
          <button className="activate-button">Activate</button>
        </div>
        <div>
          Don’t have an account with MyBank? Open Now!
        </div>
      </div>

      <div className="login-row-form">
        <form onSubmit={handleLogin}>
          <h3>Login/Password</h3>
          <p>
            <input type="text" placeholder="Username" />
          </p>
          <p>
            <input type="password" placeholder="Password" />
          </p>
          <p>
            <button>Login</button>
          </p>
        </form>
      </div>
    </div>
  );
}
