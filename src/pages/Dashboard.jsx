import React, { useState } from "react";
import { AppContext } from "../context/AppContextProvider";
import { useContext, useEffect } from "react";
import api from "../api/axios";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { user } = useContext(AppContext);
  const [account, setAccount] = useState({});

  const fetchAccount = async () => {
    try {
      const res = await api.get("/user/" + user.id);
      setAccount(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    fetchAccount()
  },[])

  return (
    <div>
      <h1>Hello {user?.name}</h1>
      <h2>
        Account {account.id} - {account.balance}
      </h2>
      <p>
        <Link to="/user/send-money">Send Money</Link>
      </p>
    </div>
  );
}
