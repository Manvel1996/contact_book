import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";

import { getMe } from "./redux/features/auth/AuthActions";

import Layout from "./components/Layout";
import AppRouter from "./components/AppRouter";

import "react-toastify/dist/ReactToastify.css";
import "./assets/styles/Main.scss";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  return (
    <Layout>
      <AppRouter />
      <ToastContainer position="bottom-right" autoClose={1000}/>
    </Layout>
  );
}

export default App;
