import { Outlet, Navigate } from "react-router-dom";
import { useState } from "react";

export default function ProtectedRoute(){
const auth = useAuth()

return auth.isAutheticated ? <Outlet /> : <Navigate to="/"  />;
}