import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({
  element: Component,
  isLoggedIn,
  ...props
}) {
  return isLoggedIn ? <Outlet /> : <Navigate to="/" replace />;
}

