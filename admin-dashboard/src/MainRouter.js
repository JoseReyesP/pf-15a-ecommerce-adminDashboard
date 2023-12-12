import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "./auth/Signin";
import Dashboard from "./core/Dashboard";

const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" Component={Signin} />
        <Route exact path="/dashboard" Component={Dashboard} />
      </Routes>
    </div>
  );
};

export default MainRouter;
