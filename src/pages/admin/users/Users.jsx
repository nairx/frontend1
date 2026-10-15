import React from "react";
import { Link } from "react-router-dom";

export default function Users() {
  return (
    <div>
      <h1>User Management</h1>
      <Link to="/admin/add-user">Add User</Link>
      <p>This is users list</p>
    </div>
  );
}
