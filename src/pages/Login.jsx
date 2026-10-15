import React, { useContext } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AppContext } from "../context/AppContextProvider";
export default function Login() {
  const [obj, setObj] = useState({});
  const [error, setError] = useState();
  const navigate = useNavigate();
  const { setUser } = useContext(AppContext);

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const res = await api.post("/auth/login", obj);
      if (res.data === null) {
        setError("Access Denied");
      } else {
        setUser(res.data);
        navigate("/user");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister = () => {
    navigate("/register");
  };

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
          <button className="register-button" onClick={handleRegister}>
            {" "}
            Register Now
          </button>
          <button className="activate-button">Activate</button>
        </div>
        <div>Don’t have an account with MyBank? Open Now!</div>
      </div>

      <div className="login-row-form">
        <form onSubmit={handleLogin}>
          <h3>Login/Password</h3>
          <p>{error}</p>
          <p>
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setObj({ ...obj, email: e.target.value })}
            />
          </p>
          <p>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setObj({ ...obj, password: e.target.value })}
            />
          </p>
          <p>
            <button>Login</button>
          </p>
        </form>
      </div>
    </div>
  );
}
