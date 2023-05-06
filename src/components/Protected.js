import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Protected({ children }) {
  const userData = useSelector((state) => state.authReducer.userData);
  if (!userData?.token) {
    return <Navigate to="/signin" replace />;
  }
  return children;
}
export default Protected;
