import { useContext } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context/AuthProvider";

const RequireAuth = () => {
    const { auth } = useContext(AuthContext);
    const location = useLocation();

    return (
        // auth?.username\
        localStorage.getItem("username")
            ? <Outlet />    
            : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;