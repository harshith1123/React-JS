import * as Yup from 'yup';

export const YupSchema = Yup.object({
    // name:Yup.string().min(3).max(15).required(), --> will throw default error message
    name:Yup.string().min(3, "Min 3 characters are allowed").max(15, "Max 15 characters are allowed").required("Name Field is Required"),
    // email:Yup.string().email().required()
    email:Yup.string().email("Invalid Email Typed, Please Enter a valid Email").required("Email Field is Required"),
    age:Yup.number("Only Number Type is allowed").min(10).max(50).required("Age Field is Required"),
    pass:Yup.string().required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Enter Strong Password"),
    confPass:Yup.string().required().oneOf([Yup.ref('pass'),null],"Password Doesn't Matches")
})