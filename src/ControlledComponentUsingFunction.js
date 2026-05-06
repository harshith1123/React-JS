import React, { useState } from 'react'

function ControlledComponentUsingFunction() {
    const [name,setName] = useState("");
    function handleSubmit(e){
        e.preventDefault();
        console.log(e);
        alert("Form Saved Successfully")
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="">Enter UserName:</label>
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
        </div>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default ControlledComponentUsingFunction
