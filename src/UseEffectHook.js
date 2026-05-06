import React, { useEffect, useState } from 'react'

function UseEffectHook() {
    const [count,setCount] = useState(0);

    useEffect(()=> {
        console.log("Use Effect Function Called");
    })
  return (
    <div>
      <h1>Count: {count}</h1>
      <button type="button" onClick={()=> setCount(count+1)}>Update Count</button>
    </div>
  )
}

export default UseEffectHook
