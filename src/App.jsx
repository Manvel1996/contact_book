import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { useLocation } from "react-router-dom";

import { getMe } from "./redux/features/auth/AuthActions";

import Layout from "./components/Layout";
import AppRouter from "./components/AppRouter";

import { ROUTE } from "./constants/routConstants";
import { AUTH_TOKEN } from "./constants/authConstants";

import "react-toastify/dist/ReactToastify.css";
import "./assets/styles/Main.scss";

function App() {
  const dispatch = useDispatch();

  const location = useLocation();

  const currentUrl = location.pathname;

  useEffect(() => {
    if (currentUrl !== ROUTE.LOGIN && currentUrl !== ROUTE.REGISTER && localStorage.getItem(AUTH_TOKEN)) {
      dispatch(getMe());
    }
  }, [dispatch]);

  return (
    <Layout>
      <AppRouter />
      <ToastContainer position="bottom-right" autoClose={1000} />
    </Layout>
  );
}

export default App;
