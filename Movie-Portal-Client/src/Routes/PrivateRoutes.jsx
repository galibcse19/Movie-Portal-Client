import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if(user){
        return children;
    }
    if(!user){
        return  loading && <span className="loading loading-spinner text-primary"></span>;
    }
    return <Navigate to="/logIn"></Navigate>
};

export default PrivateRoutes;