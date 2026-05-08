import React, { Component } from 'react'
import './App.css';

// Events and Event Handler without arguements in functional component
// export default function Events() {
//     function handleEvent(){
//         alert("Event Triggered");
//     }
//   return (
//     <div className='App'>
//       <input type="button" value="Click" onClick={handleEvent} />
//     </div>
//   )
// }

// Events and Event Handler without arguements in class component
// export default class Events extends Component {
//     handleEvent(){
//         alert("Event Fired");
//     }
//   render() {
//     return (
//       <div className='App'>
//          <input type="button" value="Click" onClick={this.handleEvent} />
//       </div>
//     )
//   }
// }

// Events and Event Handler with (arguements/props) in functional component

// export default function Events(props) {

//     const handleEvent= (name)=>{
//         alert (`Hey!... ${name}`)
//     }

//   return (
//     <div className='App'>
//       {/* <input type="button" value="Click" onClick={()=> handleEvent("Harshit")} /> */}
//       <input type="button" value="Click" onClick={()=> handleEvent(props.name)} />
//     </div>
//   )
// }

// Events and Event Handler with (arguements/props) in class component



export default class Events extends Component {
   
  render() {
    const handleEvent= (name)=>{
        alert (`Hey!... ${name}`)
    }
    return (
      <div className='App'>
        <input type="button" value="Click" onClick={()=> handleEvent(this.props.name)} />
      </div>
    )
  }
}


