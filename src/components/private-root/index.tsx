import React from "react"
import { Navigate, Outlet } from "react-router"

export const PrivateRoute = () => {
    const token = localStorage.getItem("token")
    if (!token) {
        return <Navigate to="/" />
    }
    return (
        <Outlet />
    )
}