import React from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { useState } from "react";
export default function Register() {
  const [obj, setObj] = useState({});
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await api.post("/auth/register", obj);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <p>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setObj({ ...obj, name: e.target.value })}
          />
        </p>
        <p>
          <input
            type="email"
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
          <button>Submit</button>
        </p>
      </form>
    </div>
  );
}
