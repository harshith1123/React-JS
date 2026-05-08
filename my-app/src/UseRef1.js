import React, { useEffect, useRef } from 'react'

function UseRef1() {
    const firstRef = useRef();
    const lastRef = useRef();

    useEffect(()=>{
        console.log(firstRef);
        console.log(lastRef);
        firstRef.current.style.color="green";
        firstRef.current.focus();
    })
    function handleSubmit(e){
        e.preventDefault();
        console.log("First Name: ",firstRef.current.value, "Last Name:", lastRef.current.value)
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="">First Name:</label>
            <input type="text" name="" id="" placeholder='Enter First Name' ref={firstRef}/>
        </div>
        <div>
            <label htmlFor="">Last Name:</label>
            <input type="text" name="" id="" placeholder='Enter Last Name' ref={lastRef}/>
        </div>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default UseRef1
