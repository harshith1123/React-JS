import React, { useReducer } from 'react'

function UseReducerHook() {
    const initialValue = 0;
    const reducer = (state,action)=>{
        switch(action){
            case "Increment":
                return state+=1;
            case "Decrement":
                return state-=1;
            case "Reset":
                return 0;
            default: return state;
        }
    }

    const [count,dispatch] = useReducer(reducer,initialValue);

  return (
    <div>
      <h1>This is the useReducer Hook</h1>
      <h1>Count = {count}</h1>
      <button type="submit" onClick={()=> dispatch("Increment")}>Increment</button>
      <button type="submit" onClick={()=> dispatch("Decrement")}>Decrement</button>
      <button type="submit" onClick={()=> dispatch("Reset")}>Reset</button>
    </div>
  )
}

export default UseReducerHook;
