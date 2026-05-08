import React, { useState } from 'react'

function MultipleCheckboxesinForm() {
    const [fruitsArray,setFruitsArray] = useState([])

    function handleCheckbox(e){
        console.log(e)
        console.log(e.target.value);
        console.log(e.target.checked);
        const value = e.target.value;
        if(e.target.checked){
            setFruitsArray([
                ...fruitsArray, e.target.value
            ])
        }
        else{
            setFruitsArray(fruitsArray.filter((e)=> (e!==value)))
        }
    }
    function getDetails(e){
        e.preventDefault();
        console.log(fruitsArray)
    }
  return (
    <div>
      <form onSubmit={getDetails}>
        <label htmlFor="">Mango:&nbsp; </label>
        <input type="checkbox" name="" id="" value="Mango" onChange={handleCheckbox} />
        &nbsp;
        <label htmlFor="">Apple:&nbsp;</label>
        <input type="checkbox" name="" id="" value="Apple" onChange={handleCheckbox}/>
        &nbsp;
        <label htmlFor="" >Grapes:&nbsp;</label>
        <input type="checkbox" name="" id="" value="Grapes" onChange={handleCheckbox}/>
        &nbsp;
        <label htmlFor="">Stawberry:&nbsp;</label>
        <input type="checkbox" name="" id="" value="Strawberry" onChange={handleCheckbox}/>
        &nbsp;
        <label htmlFor="">Papaya:&nbsp;</label>
        <input type="checkbox" name="" id="" value="Papaya" onChange={handleCheckbox}/>
        <br />
        <input type="submit" value="submit" onChange={handleCheckbox}/>
      </form>
    </div>
  )
}

export default MultipleCheckboxesinForm
