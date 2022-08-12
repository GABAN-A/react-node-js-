import { useFormik } from "formik";
import Joi from "joi";
import { useState } from "react";
import Input from "./common/Input";
import PageHeader from "./common/PageHeader";
import FormikValidate from "./validate/formvalidate";
import {Navigate, useNavigate} from "react-router-dom"
import { toast } from "react-toastify";
import { useAuth } from "./context/authcontext";

const SignIn=({redirect})=>{
    
    const[error,setError]=useState("");
const{login,logout,user}=useAuth();
const navigate =useNavigate();

    const form =useFormik({
        validateOnMount:true,
        initialValues:{
            email:'',
            password:'',
        },
        validate:FormikValidate({
            email: Joi.string().min(6).max(255).required().email({tlds:{allow:false}}
                ),
            password: Joi.string().min(6).max(1024).required()
            }),
        async onSubmit(values){
            try{
          await  login(values);
     toast("YOU HAVE BEEN signed in CONGRATS")
        if(redirect){
            navigate(redirect);
        }
        }catch({response}){
            if(response?.status===400){
                setError(response.data);
            }
        }
        },
    });
if(user){
    return <Navigate to="/"/>;
}
    return(
        <>
<PageHeader title={"Sign in to YOUR account"} description={"if you are not sgined please sig in"}/>

<form noValidate autoComplete="off" onSubmit={form.handleSubmit}>
        {error &&<div className="alert alert-danger">{error}
        </div>}
        <Input  name="email" label="Email" type="email" {...form.getFieldProps("email")} error={form.touched.email && form.errors.email}/>
    <Input  name="password" label="Password" type="password" {...form.getFieldProps("password")} error={form.touched.password && form.errors.password}/>
 <div className="my-2">
    <button className="btn btn-primary" type="submit" disabled={!form.isValid}>Sign in</button>
 </div>
    </form>

    </>
    )
    }
export default SignIn;