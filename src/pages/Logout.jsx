import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  }, []);

 
  return <div>Logout</div>;
}
