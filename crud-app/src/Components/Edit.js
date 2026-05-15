import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { YupCreateSchema } from './YupCreateSchema';
import { Link, useNavigate } from 'react-router-dom';

function Edit() {

    const [updateId,setId] = useState(0);
    const [updateName,setName] = useState('');
    const [updateEmail,setEmail] = useState('');
    const [updateAge,setAge] = useState('');

    const initialValuesData = {
        name:updateName,
        email:updateEmail,
        age:updateAge,
    }

    const readNavigate = useNavigate();

    const {handleChange,handleSubmit,handleBlur,values,errors,touched} =useFormik({
        enableReinitialize: true,
        initialValues:initialValuesData,
        validationSchema:YupCreateSchema,
        onSubmit: (values,action)=>{
            console.log(values);
            console.log(values.name);
            console.log(values.email);
            console.log(values.age);
            axios.put(`https://crud-api.free.beeceptor.com/crud-api/${updateId}`,{
                u_name:values.name,
                u_email:values.email,
                u_age: values.age
            }).then(()=>{
               readNavigate('/');
            })
            alert("Your Name: "+values.name + ", Email:" + values.email + ", Age:" + values.age + " updated successfully in our API System." );
            action.resetForm();
        }
    });

    useEffect(()=>{
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setEmail(localStorage.getItem('email'));
        setAge(localStorage.getItem('age'));
    },[]);
    
  return (
    <>
        <div className="row justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <div className="col-md-4">                    
                <form action="" onSubmit={handleSubmit}>                
                    <div className="form-group border border-primary p-4 rounded bg-dark">
                    <h1 className='bg-primary text-white' style={{textAlign:"center", fontFamily:"-moz-initial", borderRadius:"10px"}}>Update Data</h1>
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
                            <button type="submit" className='btn btn-outline-primary'>Update Data</button>
                        </div>
                    </div>
                </form>
                <div className='mb-2 mt-2 d-block'>
                    <Link to="/">
                        <button type="button" className='btn btn-success w-100'>Read Data</button>
                    </Link>                                            
                </div>
            </div>
        </div>
    </>
  )
}

export default Edit
