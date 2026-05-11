import React from 'react'
import {useFormik} from 'formik'

function Formik() {

    const formikInitialValue = {
        name:'',
        email:''
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

    const {handleChange,handleSubmit,values} =useFormik({
        initialValues:formikInitialValue,
        onSubmit: (values)=>{
            console.log(values);
            console.log(values.name);
            console.log(values.email);
            alert("Your Name:"+values.name+ " and Email:"+values.email+ " saved successfully");
        }
    });

  return (
    <div>
    <h1>Formik Demo</h1>
      {/* <form action="" onSubmit={formik.handleSubmit}> */}
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Enter Name:</label>
        {/* <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange}/> */}
        <input type="text" name="name" value={values.name} onChange={handleChange}/>
        <br />
        <br />
        <label htmlFor="">Enter Email:</label>
        {/* <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange}/> */}
        <input type="email" name="email" value={values.email} onChange={handleChange}/>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Formik
