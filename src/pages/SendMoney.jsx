import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContextProvider";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
export default function SendMoney() {
  const [obj, setObj] = useState({});
  const { user } = useContext(AppContext);
  const navigate = useNavigate();
  const handleSend = async (e) => {
    try {
      e.preventDefault();
      await api.post("/transfer", { ...obj, fromUserId: user.id });
      navigate("/user");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSend}>
        <h1>Send Money</h1>
        <p>
          <input
            type="number"
            placeholder="Account Number"
            onChange={(e) => setObj({ ...obj, toUserId: e.target.value })}
          />
        </p>
        <p>
          <input
            type="number"
            placeholder="Amount"
            onChange={(e) => setObj({ ...obj, amount: e.target.value })}
          />
        </p>
        <p>
          <button>Send</button>
        </p>
      </form>
    </div>
  );
}
