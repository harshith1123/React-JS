import React, { useState } from 'react'

function HandlingMultipleInputViaFunctioninForms() {
    const [data,setData] = useState({
        name:"",
        email:""
    });

    function handleForm(e){
        e.preventDefault();
        console.log(data);
        console.log(data.name);
        console.log(data.email);
    }

    function handleData(e){
        console.log(e);
        setData((prevData) =>{
            return {
                ...prevData, [e.target.name]: e.target.name === "email" ? e.target.value.toLowerCase().replace('-','@') : e.target.value.substring(0,15)
            }
        })
    }
  return (
    <div>
      <form onSubmit={handleForm}>
        <label htmlFor="">Enter Name:</label>
        <input type="text" name="name" value={data.name} onChange={handleData} placeholder='Enter Name Here'/>
        <br />
        <label htmlFor="">Enter Email:</label>
        <input type="email" name="email" value={data.email} onChange={handleData} placeholder='Enter Email Here' />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default HandlingMultipleInputViaFunctioninForms
