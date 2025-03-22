import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../auth/Login";
import Resgister from "../auth/Resgister";
import Home from "../pages/Home";
import ProtectedRoute from "./ProtectedRoute";
import Main from "../pages/Main";
import Category from "../pages/Category";
import Cart from "../pages/Cart";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Resgister />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Main />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
