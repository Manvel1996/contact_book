import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import { checkIsAuth, loadingState } from "../redux/features/auth/AuthActions";

import Loader from "./UI/loader/Loader";

import { privateRoutes, publishRoutes } from "../router/routes";

import { ROUTE } from "../constants/routConstants";

export default function AppRouter() {
  const isAuth = useSelector(checkIsAuth);
  const isLoading = useSelector(loadingState);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={isAuth ? ROUTE.HOME : ROUTE.LOGIN} />}
      />

      {isAuth
        ? privateRoutes.map((rout) => (
            <Route
              key={rout.path}
              path={rout.path}
              element={<rout.element />}
            />
          ))
        : publishRoutes.map((rout) => (
            <Route
              key={rout.path}
              path={rout.path}
              element={<rout.element />}
            />
          ))}
    </Routes>
  );
}
