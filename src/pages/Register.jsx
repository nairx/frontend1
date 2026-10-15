import React from "react";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <p>
          <input type="text" placeholder="Name" />
        </p>
        <p>
          <input type="email" placeholder="Email" />
        </p>

        <p>
          <input type="number" placeholder="Phone" />
        </p>

        <p>
          <input type="text" placeholder="Address" />
        </p>

        <p>
          <input type="number" placeholder="Initial Balance" />
        </p>

        <p>
          <input type="password" placeholder="Password" />
        </p>
        <p>
          <button>Submit</button>
        </p>
      </form>
    </div>
  );
}
