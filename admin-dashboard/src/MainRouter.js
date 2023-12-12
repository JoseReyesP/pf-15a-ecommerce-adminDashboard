import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "./auth/Signin";
import Dashboard from "./core/Dashboard";
import NewProduct from "./core/NewProduct";

const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" Component={Signin} />
        <Route exact path="/dashboard" Component={Dashboard} />
        <Route exact path="/newProduct" Component={NewProduct} />
      </Routes>
    </div>
  );
};

export default MainRouter;
