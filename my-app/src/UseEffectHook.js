import React, { useEffect, useState } from 'react'

function UseEffectHook() {
    const [count,setCount] = useState(0);
    const [name,setName] = useState("Harshit");

    // On every update the below useEffect function will run
    useEffect(()=> {
        console.log("Use Effect Function Called on any every update ", count);
    })

    // Only run on initial render
    useEffect(()=>{
        console.log("Only Run on initial render ",count)
    },[])

    // Only Run on every update of count
    useEffect(()=>{
        console.log("Only Run on every update of count ",count)
    },[count])

    // Only Run on every update of name
    useEffect(()=>{
        console.log("Only Run on every update of name ",name)
    },[name])

    // Only Run on every update of name and count
    useEffect(()=>{
        console.log("Only Run on every update of name ",name, " and count ",count)
    },[name,count])
  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Name: {name}</h1>
      <button type="button" onClick={()=> setCount(count+1)}>Update Count</button>
      <button type="button" onClick={()=> setName("Harshit Shetty")}>Update Name</button>
    </div>
  )
}

export default UseEffectHook
