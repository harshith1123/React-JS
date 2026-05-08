import React, { useState } from 'react'

function TextAreaSelectAndCheckboxes() {
  const [textArea,setTextArea] = useState("")
  const [country,setCountry] = useState("India")
  const [checked,setChecked] = useState(false)

  function handleSubmit(e){
    e.preventDefault();
    console.log(e);
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(e.target[2].checked);
  }
  return (
    <form className='App' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="" style={{verticalAlign:"top"}}>Enter Message:</label>
        <textarea value={textArea} cols="30" rows="5" placeholder='message' onChange={(e)=> setTextArea(e.target.value)}></textarea>
      </div>
      <div>
      <label htmlFor="">Select Country:</label>
        <select value={country} onChange={(e)=> setCountry(e.target.value)}>
            <option value="UK">UK</option>
            <option value="India">India</option>
            <option value="South Africa">South Africa</option>
            <option value="Australia">Australia</option>
            <option value="New Zealand">New Zealand</option>
        </select>
      </div>
      <label htmlFor="">Yes, I agree</label>
      <input type="checkbox" checked={checked} onChange={(e)=>setChecked(e.target.checked)}/>
      <br />
      <input type="submit" value="Submit" />
    </form>
  )
}

export default TextAreaSelectAndCheckboxes
