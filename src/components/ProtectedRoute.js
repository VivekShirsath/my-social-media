import { useAuth } from "../context/AuthContext";
import { Navigate,useLocation } from "react-router-dom";

export const ProtectedRoute = ({children}) => {
    const {token} = useAuth();
    const location = useLocation();
    return token ? (
        children
      ) : (
        <Navigate to="/login" state={{ from: location }} />
      )
}