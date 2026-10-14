import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="header">
      <h1>MyBank</h1>
      <ul>
        <li>
          <Link to="/user">Dashboard</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </div>
  );
}
