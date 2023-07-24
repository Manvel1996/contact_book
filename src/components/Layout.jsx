import React from "react";

import Navbar from "./UI/navbar/Navbar";

import "../assets/styles/components/Layout.scss";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      {children}
    </div>
  );
}
