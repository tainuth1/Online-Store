import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [isLogin, setIsLogin] = useState(true);
  return isLogin ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
