/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {  useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProviders";



const PrivateRouters = ({children}) => {
    const {user,loading,}=useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <p>Loading....</p>
    }

    if(user){
        return children
    }
    return (
        <Navigate to='/login' state={{from:location}} replace></Navigate>
    );
};

export default PrivateRouters;