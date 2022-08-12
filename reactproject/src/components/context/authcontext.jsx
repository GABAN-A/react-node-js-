import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import userservice from "../services/userservice";


export const authContext=createContext(null);
authContext.displayName="auth.context";

export const AuthProvider=({children})=>{
    const [user,setUser]=useState(userservice.getUser());
    
    const refreshAndRedirect=()=>{
        setUser(userservice.getUser());
    };
    const createUser=async (user)=>{
const response = await userservice.createUser(user);
return response;
    }
const login=async(credentials)=>{
    const response = await userservice.loginUser(credentials)
    refreshAndRedirect();
    return response;
};
const logout=()=>{
    userservice.logout();
    refreshAndRedirect();
};
useEffect(()=>{
    refreshAndRedirect();
},[]);

    return(
        <authContext.Provider value={{createUser,login,logout,user}}>{children}</authContext.Provider>
    );
};
export const useAuth=()=>{
    return useContext(authContext);
};