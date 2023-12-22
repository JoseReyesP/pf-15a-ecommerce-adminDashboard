import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "./auth/Signin";
import Dashboard from "./core/Dashboard";
import NewProduct from "./core/NewProduct";
import PhotoUploader from "./core/photoUploader";

const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" Component={Dashboard} />
        <Route exact path="/newProduct" Component={NewProduct} />
        <Route exact path="/newPhoto" Component={PhotoUploader} />
      </Routes>
    </div>
  );
};

export default MainRouter;
