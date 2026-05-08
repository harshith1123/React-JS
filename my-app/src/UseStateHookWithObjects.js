import React, { useState } from 'react'

function UseStateHookWithObjects() {
    const obj = {
        name:'Harshit Shetty',
        age: 22,
        height: 5.5,
        education: "B.E"
    }
    const [person,setPersonDetails] = useState(obj);

    const changePersonDetails = ()=>{
        // To change complete Details
        // setPersonDetails({
        //     name:"Shreyata Shetty",
        //     age: 19,
        //     height: 5.2,
        //     education: "B.Tech"
        // })

        // To change only single Detail
        setPersonDetails((prevState)=>{
            return{
                ...prevState,
                name:"Shreyata Shetty"
            }
        })
    }
  return (
    <div>
      <ol>
        <li>{person.name}</li>
        <li>{person.age}</li>
        <li>{person.height}</li>
        <li>{person.education}</li>
      </ol>
      <button type="submit" onClick={changePersonDetails}>Update Details</button>
    </div>
  )
}

export default UseStateHookWithObjects
