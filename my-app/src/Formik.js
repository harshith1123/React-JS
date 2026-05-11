import React from 'react'
import {useFormik,ErrorMessage} from 'formik'
import { YupSchema } from './YupSchema';

function Formik() {

    const formikInitialValue = {
        name:'',
        email:'',
        age:'',
        pass:'',
        confPass:''
    }

    // const formik =useFormik({
    //     initialValues:formikInitialValue,
    //     onSubmit: (values)=>{
    //         console.log(values);
    //         console.log(values.name);
    //         console.log(values.email);
    //         alert("Your Name:"+values.name+ " and Email:"+values.email+ " saved successfully");
    //     }
    // });

    const {handleChange,handleSubmit,handleBlur,values,errors,touched} =useFormik({
        initialValues:formikInitialValue,
        validationSchema: YupSchema,
        onSubmit: (values,action)=>{
            console.log(values);
            console.log(values.name);
            console.log(values.email);
            console.log(values.age);
            console.log(values.pass);
            console.log(values.confPass);
            alert("Your Name:"+values.name+ " , Email:"+values.email+ " , Age:" + values.age +" with password" + " saved successfully");
            action.resetForm()
        }
    });

  return (
    <div>
    <h1>Formik Demo</h1>
      {/* <form action="" onSubmit={formik.handleSubmit}> */}
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Enter Name:</label>
        {/* <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange}/> */}
        <input type="text" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur}/>
        <br />
        {/* <span style={{color:"red"}}>{errors.name}</span> */}
        {errors.name && touched.name ? <span style={{color:"red"}}>{errors.name}</span> : null}
        <br />
        <label htmlFor="">Enter Email:</label>
        {/* <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange}/> */}
        <input type="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
        <br />
        {/* <span style={{color:"red"}}>{errors.email}</span> */}
        {errors.email && touched.email ? <span style={{color:"red"}}>{errors.email}</span> : null}
        <br />
        <label htmlFor="">Enter Age:</label>
        <input type="text" name="age" value={values.age} onChange={handleChange} onBlur={handleBlur}/>
        <br />
        {errors.age && touched.age ? <span style={{color:"red"}}>{errors.age}</span> : null}
        <br />
        <label htmlFor="">Enter Password:</label>
        <input type="password" name="pass" value={values.pass} onChange={handleChange} onBlur={handleBlur} />
        <br />
        {errors.pass && touched.pass ? <span style={{color:"red"}}>{errors.pass}</span> : null}
        <br />
        <label htmlFor="">Confirm Password:</label>
        <input type="password" name="confPass" value={values.confPass} onChange={handleChange} onBlur={handleBlur} />
        <br />
        {errors.confPass && touched.confPass ? <span style={{color:"red"}}>{errors.confPass}</span> : null}
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Formik
