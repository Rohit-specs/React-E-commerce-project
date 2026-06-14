import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Login from '../pages/Login'

const ProtectedRoutes = () => {
    const isLogin = localStorage.getItem("isActive")

  return isLogin === "true"?<Outlet/>:<Navigate to="/login"/>
}

export default ProtectedRoutes
