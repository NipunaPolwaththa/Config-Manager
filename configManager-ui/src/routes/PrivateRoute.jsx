import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
  const token = localStorage.getItem('token');
  return token ? <Outlet /> : <Navigate to="/auth" />;
}

export default PrivateRoute;
