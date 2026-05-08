import React, { useEffect, useState, useRef } from 'react'

function UseRef2() {
    const [name,setName] = useState("");
    // const [count, setCount] = useState(0);
    const count = useRef(0)

    // useEffect(()=>{
    //     console.log("Use Effect Function Called");
    //     setCount(count+1);
    // })

    // useEffect(()=>{
    //     console.log("Use Effect Function Called");
    //     setCount(count+1);
    // },[])

    useEffect(()=>{
        console.log("Use Effect Function Called");
        count.current = count.current+1
        console.log(count.current);

        // count.current=count.current + 1
    })

  return (
    <div>
      <form action="">
        <label htmlFor="">Enter Name:</label>
        <input type="text" name="" id="" value={name} onChange={(e)=> setName(e.target.value)}/>
        <h2>Render Count: {count.current}</h2>
      </form>
    </div>
  )
}

export default UseRef2
