import * as Yup from 'yup';

export const YupCreateSchema = Yup.object({
    name:Yup.string().min(3, "Min 3 characters are allowed").max(25, "Max 20 characters are allowed").required("Name Field is Required"),
        
    email:Yup.string().email("Invalid Email Typed, Please Enter a valid Email").required("Email Field is Required"),
    age:Yup.number("Only Number Type is allowed").min(10).max(60).required("Age Field is Required"),
})