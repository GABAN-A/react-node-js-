import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authcontext"

const ProtectedRoutes=({children,onlyBiz=false})=>{
    const{user}=useAuth();
    console.log(user);
    if(!user || (onlyBiz && !user.biz)){
        return <Navigate to="/signin"/>;
    }
    return children
}
export default ProtectedRoutes;