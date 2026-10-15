import React from "react";
import { AppContext } from "../context/AppContextProvider";
import { useContext } from "react";
export default function Dashboard() {
  const { user } = useContext(AppContext);
  return (
    <div>
      <h1>Hello {user?.name}</h1>
    </div>
  );
}