import React from "react";
import { useNavigate } from "react-router-dom";
export default function AddUser() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/admin");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <h1>Add User</h1>
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
          <input type="text" placeholder="Role" />
        </p>
        <p>
          <button>Submit</button>
        </p>
      </form>
    </div>
  );
}
