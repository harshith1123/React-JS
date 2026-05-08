import React, { useState } from 'react'

function UseStateHookWithArrays() {
    let [numbers,setNumber] = useState([10,20,30,40,50]);
    
    const updateNumber = ()=>{
        // To change all numbers
        // setNumber([100,200,300,400,500]);

        // To add extra value
        setNumber(prevState =>{
        return[
            ...prevState,
            Math.floor(Math.random()* 100)
        ]
        })
    }
    
  return (
    <div>
      <ul>
        {numbers.map((num,index)=> <li key={index}>{num}</li>)}
        <button type="submit" onClick={updateNumber}>Update</button>
      </ul>
    </div>
  )
}

export default UseStateHookWithArrays
