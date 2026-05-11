import * as Yup from 'yup';

export const YupSchema = Yup.object({
    // name:Yup.string().min(3).max(15).required(), --> will throw default error message
    name:Yup.string().min(3, "Min 3 characters are allowed").max(15, "Max 15 characters are allowed").required("Name Input is Required"),
    // email:Yup.string().email().required()
    email:Yup.string().email("Invalid Email Typed, Please Enter a valid Email").required("Email is Required")
})