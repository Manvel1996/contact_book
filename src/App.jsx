import React from "react";

import { ToastContainer } from "react-toastify";

import Layout from "./components/Layout";
import AppRouter from "./components/AppRouter";

import "react-toastify/dist/ReactToastify.css";
import "./assets/styles/Main.scss";

function App() {
  return (
    <Layout>
      <AppRouter />
      <ToastContainer position="bottom-right" />
    </Layout>
  );
}

export default App;
