import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../auth/Login";
import Resgister from "../auth/Resgister";
import Home from "../pages/Home";
import ProtectedRoute from "./ProtectedRoute";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Resgister />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRouter;
