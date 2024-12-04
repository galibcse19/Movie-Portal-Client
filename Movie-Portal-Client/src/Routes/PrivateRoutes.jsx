import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const {user} = useContext(AuthContext);
    if(user){
        return children;
    }
    return <Navigate to="/logIn"></Navigate>
};

export default PrivateRoutes;