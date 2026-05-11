import React, { useState } from 'react'
import { Formik,Field,Form } from 'formik'
import * as Yup from 'yup'
import RedErrorMessage from './RedErrorMessage';

function FormikComponent() {
    const [formData,setFormData] = useState({});

    const validateField = Yup.object({
        name: Yup.string().required("Name is required").min(3, "Too short").max(20, "Too long"),
        email:Yup.string().email("Invalid Email Typed, Please Enter a valid Email").required("Email Field is Required"),
        age:Yup.number().min(10).max(60).required(),
        pass:Yup.string().required("Password is Required").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Enter Strong Password"),
        gender: Yup.string().required(),
        hobbies: Yup.array().min(1),
        message:Yup.string().required().max(50),
        country:Yup.string().required()
})

  return (
    <div>
      <Formik 
      validationSchema={validateField}
      initialValues={{
            name:"",
            email:"",
            age:"",
            pass:'',
            gender:"",
            hobbies:[],
            message:"",
            country:""
        }}
        onSubmit={(values,action)=>{
            console.log(values);
            setFormData(values);
            alert("Form Saved Successfully");
            action.resetForm();
        }}
        >
        <Form>
            <label htmlFor="">Enter Name:</label>
            <Field type="text" name="name"/>
            <br />
            {/* <ErrorMessage name="name"/> */}
            <RedErrorMessage propPass="name"/>
            <br />

            <label htmlFor="">Enter Email:</label>
            <Field type="email" name="email"/>
            <br />
            <RedErrorMessage propPass="email"/>
             <br />

            <label htmlFor="">Enter Age:</label>
            <Field type="number" name="age"/>
            <RedErrorMessage propPass="age"/>
            <br /> <br />

            <label htmlFor="">Enter Password:</label>
            <Field type="password" name="pass" />
            <RedErrorMessage propPass="pass"/>
            <br /> <br />

            <label htmlFor="">Select Gender:&nbsp;</label>
            <label htmlFor="">Male:&nbsp;</label>
            <Field type="radio" name="gender" value="Male"/>

            <label htmlFor="">Female:</label>
            <Field type="radio" name="gender" value="Female"/>
            <br /> 
            <RedErrorMessage propPass="gender"/>
            <br />

            <label htmlFor="">Choose Hobbies:&nbsp;</label>
            <label htmlFor="">Reading:&nbsp;</label>
            <Field type="checkbox" name="hobbies" value="Reading"/>

            <label htmlFor="">&nbsp;Writing:&nbsp;</label>
            <Field type="checkbox" name="hobbies" value="Writing"/>

            <label htmlFor="">&nbsp;Watching Sports:&nbsp;</label>
            <Field type="checkbox" name="hobbies" value="Sports"/>

            <label htmlFor="">&nbsp;Travelling:&nbsp;</label>
            <Field type="checkbox" name="hobbies" value="Travelling"/>
            <br />
            <RedErrorMessage propPass="hobbies"/>
            <br />

            <label htmlFor="">Enter Your Message:&nbsp;</label>
            <Field style={{verticalAlign:"top"}} as="textarea" name="message" cols="30" rows="10" placeholder="Type Your Message"/>
            <br />
            <RedErrorMessage propPass="message"/>
            <br />

            <label htmlFor="">Choose Country</label>
            <Field as="select" name="country">
                <option value="">Select</option>
                <option value="India">India</option>
                <option value="New Zealand">New Zealand</option>
                <option value="England">England</option>
                <option value="Srilanka">Srilanka</option>
                <option value="South Africa">South Africa</option>
            </Field>
            <RedErrorMessage propPass="country"/>
            <br />
            
            <br />
            <button type="submit">Submit</button>
        </Form>
      </Formik>
      {JSON.stringify(formData)}
    </div>
  )
}

export default FormikComponent
