import httpSERVICE from "./httpservice";
import jwtDecode from "jwt-decode"
const TOKEN_KEY="token";
setTokenheader();

function setTokenheader(){
    httpSERVICE.setCommonHeader("x-auth-token",getJWT()) 
}
export function getJWT(){
    return localStorage.getItem(TOKEN_KEY);
}
export function createUser(user){
 return httpSERVICE.post('/users',user)   
}
export async function loginUser(credentials){
 const {data}= await httpSERVICE.post("/auth",credentials)
 localStorage.setItem(TOKEN_KEY,data.token) 
setTokenheader();
getUser();
}
export function logout(){
localStorage.removeItem(TOKEN_KEY);
setTokenheader();
}
 export function getUser(){
    try{
        const token=getJWT();
        console.log(jwtDecode(token))
        return jwtDecode(token)
    }catch{
        return null;
    }
 }
const userservice={
    getJWT,
    createUser,
    loginUser,
    logout,
    getUser
};
export default userservice;
