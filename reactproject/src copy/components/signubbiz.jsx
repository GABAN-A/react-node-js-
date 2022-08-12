import { useFormik } from "formik";
import Joi from "joi";
import { useState } from "react";
import Input from "./common/Input";
import PageHeader from "./common/PageHeader";
import { createUser, loginUser } from "./services/userservice";
import FormikValidate from "./validate/formvalidate";
import {useNavigate,Navigate} from "react-router-dom"
import { toast } from "react-toastify";
import { useAuth } from "./context/authcontext";

const SignUpBiz=({redirect})=>{
    const navigate= useNavigate();
    const {user,createUser, login}=useAuth();

    const[error,setError]=useState("");
    const form =useFormik({
        validateOnMount:true,
        initialValues:{
            email:'',
            password:'',
            name:'',
        },
        validate:FormikValidate({
                email:Joi.string().email({tlds:{allow:false}}).required(),
                password:Joi.string().min(6).required(),
                name:Joi.string().min(2).required(),
            }),
        async onSubmit(values){
            try{
          await  createUser({...values,biz: true});
     await login({email:values.email,password:values.password})
     toast.success("YOU HAVE BEEN REGISTRED CONGRATS")

            if(redirect){
                navigate(redirect);
            }
        }catch({response}){
            if(response.status===400){
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
<PageHeader title={"Biz account sign up"} description={"if you want to sign-up as bussinse account please sign-up"}/>
    <form noValidate autoComplete="off" onSubmit={form.handleSubmit}>
        {error &&<div className="alert alert-danger">{error}
        </div>}
        <Input  name="email" label="Email" type="email" {...form.getFieldProps("email")} error={form.touched.email && form.errors.email}/>
    <Input name="name" label="name"  {...form.getFieldProps("name")} error={form.touched.name && form.errors.name}/>
    <Input  name="password" label="Password" type="password" {...form.getFieldProps("password")} error={form.touched.password && form.errors.password}/>
 <div className="my-2">
    <button className="btn btn-primary" type="submit" disabled={!form.isValid}>Sign Up</button>
 </div>
    </form>

    </>
    )
}
export default SignUpBiz;