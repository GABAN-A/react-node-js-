import Input from "./common/Input";
import { useFormik } from "formik";
import Joi from "joi";
import PageHeader from "./common/PageHeader";
import FormikValidate from "./validate/formvalidate";
import { toast } from "react-toastify";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { creatCard } from "./services/CardService";
const CreatCard=()=>{

    const[error,setError]=useState("");
    const navigate= useNavigate();

const form=useFormik({
    validateOnMount:true,
    initialValues:{
        bizName:"",
        bizDescription:"",
        bizAddress:"",
        bizPhone:"",
        bizImage:""
    },
        validate:FormikValidate({
            bizName: Joi.string().min(2).max(255).required().label("Name"),
            bizDescription: Joi.string().min(2).max(1024).required().label("Description"),
            bizAddress: Joi.string().min(2).max(400).required().label("Address"),
            bizPhone: Joi.string().min(9).max(10).required().regex(/^0[2-9]\d{7,8}$/).label("Phone"),
            bizImage: Joi.string().min(11).max(1024).uri().allow("").label("Image")
        }),
        async onSubmit(values){
            try{
                const{bizImage,...body}=values;
                if(bizImage){
                    body.bizImage=bizImage;
                }
          await  creatCard(body);
     toast("new card is created CONGRATS")
                navigate("/my-cards");
            
        }catch({response}){
            if(response?.status===400){
                setError(response.data);
            }
        }
        }, 
               })



    return(
          <>
    <PageHeader title={"create new bussinse card"} description={"enter card data"}/>
        <form noValidate autoComplete="off" onSubmit={form.handleSubmit}>
            {error &&<div className="alert alert-danger">{error}
            </div>}
           <Input type="text" label="Name" {...form.getFieldProps("bizName")} error={form.touched.bizName && form.errors.bizName}></Input>
           <Input type="text" label="Description" {...form.getFieldProps("bizDescription")} error={form.touched.bizDescription && form.errors.bizDescription}></Input>
           <Input type="text" label="Address" {...form.getFieldProps("bizAddress")} error={form.touched.bizAddress && form.errors.bizAddress}></Input>
           <Input type="text" label="Phone" {...form.getFieldProps("bizPhone")} error={form.touched.bizPhone && form.errors.bizPhone}></Input>
           <Input type="text" label="Image" {...form.getFieldProps("bizImage")} error={form.touched.bizImage && form.errors.bizImage}></Input>
        
     <div className="my-2">
        <button className="btn btn-primary" type="submit" disabled={!form.isValid}>Creat card</button>
     </div>
        </form>
    
        </>
    )
}
export default CreatCard;