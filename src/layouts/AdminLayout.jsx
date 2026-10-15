import React from "react";
import { Link, Outlet } from "react-router-dom";
export default function AdminLayout() {
  return (
    <div>
      <h1> Admin Page</h1>
      <Link to="/admin">Users</Link>
      <hr />
      <Outlet/>
    </div>
  );
}
