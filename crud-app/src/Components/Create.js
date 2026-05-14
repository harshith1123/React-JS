import axios from 'axios';
// import React, { useState } from 'react'
import {useFormik} from 'formik';
import { YupCreateSchema } from './YupCreateSchema';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Create() {
    // const [name,setName] = useState('');
    // const [email,setEmail] = useState('');
    // const [age,setAge] = useState('');

    const initialValuesData = {
        name:'',
        email:'',
        age:'',
    }

    // const handleSubmit = (e)=>{
    //     e.preventDefault();
    //     console.log(e);
    //     axios.post('https://crud-api.free.beeceptor.com/crud-api',{
    //         u_name:name,
    //         u_email:email,
    //         u_age: age
    //     });
    //     alert("Your Name: "+e.target[0].value + ", Email:" + e.target[1].value + ", Age:" + e.target[2].value + " saved successfully in our API System." );
    // }
    const readNavigate = useNavigate();

    const {handleChange,handleSubmit,handleBlur,values,errors,touched} =useFormik({
        initialValues:initialValuesData,
        validationSchema:YupCreateSchema,
        onSubmit: (values,action)=>{
            console.log(values);
            console.log(values.name);
            console.log(values.email);
            console.log(values.age);
            axios.post('https://crud-api.free.beeceptor.com/crud-api',{
                u_name:values.name,
                u_email:values.email,
                u_age: values.age
            }).then(()=>{
               readNavigate('/');
            })
            alert("Your Name: "+values.name + ", Email:" + values.email + ", Age:" + values.age + " saved successfully in our API System." );
            action.resetForm();
        }
    })

  return (
    <>
        <div className="row justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <div className="col-md-4">                    
                <form action="" onSubmit={handleSubmit}>                
                    <div className="form-group border border-primary p-4 rounded bg-dark">
                    <h1 className='bg-primary text-white' style={{textAlign:"center", fontFamily:"-moz-initial", borderRadius:"10px"}}>Fill Form</h1>
                        <label htmlFor="">Enter Name:</label>
                        <input type="text" name="name" placeholder='Name' value={values.name} onChange={handleChange} className='form-control' onBlur={handleBlur} />
                        <br />
                        {errors.name && touched.name ? <span style={{color:"red"}}>{errors.name}</span> : null}
                        <br />
                        <label htmlFor="">Enter Email:</label>
                        <input type="text" name="email" placeholder='Email' value={values.email} onChange={handleChange} className='form-control' onBlur={handleBlur} />
                        <br />
                        {errors.email && touched.email ? <span style={{color:"red"}}>{errors.email}</span> : null}
                        <br />
                        
                        <label htmlFor="">Enter Age:</label>
                        <input type="number" name="age" placeholder='Age' value={values.age} onChange={handleChange} className='form-control' onBlur={handleBlur} />
                        <br />
                        {errors.age && touched.age ? <span style={{color:"red"}}>{errors.age}</span> : null}
                        <br />
                        <div className="d-grid">
                            <button type="submit" className='btn btn-outline-primary'>Submit</button>
                        </div>
                    </div>
                </form>
                <div className='mb-2 mt-2 d-block'>
                    <Link to="/">
                        <button type="submit" className='btn btn-success w-100'>Read Data</button>
                    </Link>                                            
                </div>
            </div>
        </div>
        {/* {name}
        {email}
        {age} */}
    </>
  )
}

export default Create
