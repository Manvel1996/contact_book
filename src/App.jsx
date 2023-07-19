import React from "react";

import Layout from "./components/Layout";

import "./assets/styles/Main.scss";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
}

export default App;
