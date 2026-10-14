import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
export default function RootLayout() {
  return (
    <div>
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
