import React, { useState } from 'react'

function FormValidationWithoutLibrary() {
    const [name,setName] = useState('');
    const [nameError, setNameError] = useState(false);

    const [email,setEmail] = useState('');
    const [emailError,setEmailError] = useState(false);

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const handleName = (e)=>{
        let name = e.target.value;
        setName(name)
        console.log(name);
        if(name.length <3){
            setNameError(true);
        }
        else{
            setNameError(false);
        }
    }
    const handleEmail = (e)=>{
        let email = e.target.value;
        setEmail(email)
        console.log(email);
        if(!(email.match(emailRegex))){
            setEmailError(true);
        }
        else{
            setEmailError(false);
        }
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        let name = e.target[0].value;
        setName(name)
        console.log(name);
        if(name.length <3){
            setNameError(true);
        }
        else{
            setNameError(false);
        }
        let email = e.target[1].value;
        setEmail(email)
        console.log(email);
        if(!(email.match(emailRegex))){
            setEmailError(true);
        }
        else{
            setEmailError(false);
        }
        if(name.length>=3 && email.match(emailRegex)){
            alert("Form Saved Successfully");
            alert("Name:"+ name + " and Email:"+email);
        }
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="">Enter Name:</label>
            <input type="text" name="" value={name} onChange={handleName} />
            <br />
            {nameError ? <span style={{color: "red", fontSize:"0.9rem"}}>The length of the Name should be greater than 3</span> : ''}
        </div>
        <br />
        <br />
        <div>
            <label htmlFor="">Enter Email:</label>
            <input type="email" name="email" value={email} onChange={handleEmail}/>
            <br />
            <br />
            {emailError ? <span style={{color: "red", fontSize:"0.9rem"}}>Invalid Email Entered, Please Enter a valid Email</span> : ''}
        </div>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default FormValidationWithoutLibrary
