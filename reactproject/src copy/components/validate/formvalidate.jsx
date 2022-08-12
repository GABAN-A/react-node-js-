
import Joi from "joi";
export const FormikValidate=(schema)=>{
    return(values)=>{
        const{error}= Joi.object(schema).validate(values,{
            abortEarly:false,
        });
        if(!error){
            return null;
        }
        const errors={};
        for(const detail of error.details){
      errors[detail.path[0]]=detail.message;
        }
        console.log(errors)
return errors; 
    };
};
export default FormikValidate;