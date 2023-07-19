import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { privateRoutes, publishRoutes } from "../router/routes";
import Loader from "./UI/loader/Loader";
import { ROUTE } from "../constants/routConstants";

export default function AppRouter() {
  const isAuth = true;
  const isLoading = false;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to={isAuth ? ROUTE.HOME : ROUTE.LOGIN} />} />

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
