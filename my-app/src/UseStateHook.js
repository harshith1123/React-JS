import React, { useState } from 'react'

function UseStateHook() {
    const nameArray = useState("Harshit");
    const [name,setBrand] = useState("Ford");
    const [model,setModel] = useState("Mustang");
    const [year,setYear] = useState(1964);
    const [color,setColor] = useState('red');
    function changeState(){
        console.log("Change State Function Called")
        nameArray[1]("Harshit Gajanan Shetty")
    }
  return (
    <div>
    {/* Using With Array Indexes */}
      <h1>{nameArray[0]}</h1>
      <button type="submit" onClick={()=>nameArray[1]("Harshit Shetty")}>Click to Update Without External Function</button>
      <button type="submit" onClick={()=>changeState()}>Click to Update With External Function</button>

      <ul>
        <li>{name}</li>
        <li>{model}</li>
        <li>{year}</li>
        <li>{color}</li>
        <button type="submit" onClick={()=> {setBrand("BMW")}}>Change Brand</button>
        <button type="submit" onClick={()=> {setModel("Sedans")}}>Change Brand</button>
        <button type="submit" onClick={()=> {setYear(2000)}}>Change Brand</button>
        <button type="submit" onClick={()=> {setColor("Black")}}>Change Brand</button>
      </ul>
    </div>
  )
}

export default UseStateHook
