import React from 'react'

export default function Conditional_Rendering() {
    // If Else
    const bool = true;
    const age = 12;
    // if(bool){
    //     return <h1>Condition Becomes true</h1>
    // }
    // else{
    //     return <h1>Condition Becomes false</h1>
    // }
  return (
    <div>
    {/* LOgical && Operator */}
      {bool && <h1>This is Conditional Rendering</h1>}
      {/* Ternary Operator */}
      {age>=18 ? <h1>You'r eligible to vote</h1> : <h1>You'r not eligible to vote</h1>}
    </div>
  )
}
