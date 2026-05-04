import React from 'react'

// export default function List2(props) {
export default function List2({list,key}) {
  return (
    <div>
    {/* <h1>Direct printing through props</h1> */}
      {/* {<p>Hey!... Name:<span>{props.list.name}</span> and age is: <span>{props.list.age}</span></p>} */}

      <h1>Through Destructing</h1>
    {<p>Hey!... Name:<span>{list.name}</span> and age is: <span>{list.age}</span></p>}
    {/* {key} */}
    {/* {<li>Hey!... Name:{list.name} and age is: {list.age}</li>} */}
    </div>
  )
}
