import React, { useContext } from 'react'
import { NameContext, StateContext } from './App'

function UseContext3() {
    const myName = useContext(NameContext)
    // const person = useContext(StateContext)
    const {name, age}= useContext(StateContext)
  return (
    <div>
      <h1>This is the UseContext</h1>
      <h1>{myName}</h1>
      <h1>{name}</h1>
      {age}
      {/* <h1>Name:{person.name}</h1> */}
      {/* <h1>Age: {person.age}</h1> */}
    </div>
  )
}

export default UseContext3
