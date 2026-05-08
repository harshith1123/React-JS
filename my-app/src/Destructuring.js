import React, {Component} from 'react'

// First method of Destructuring props using Functional Components
// export default function Destructuring({name,age}) {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <h1>{age}</h1>
//     </div>
//   )
// }

// Second way of Destructuring Props using Functional Components
// export default function Destructuring(props) {
//     const {name, age} = props
//     return (
//         <div>
//             <h1>{name}</h1>    
//             <h1>{age}</h1>
//         </div>
//     )
// }

// Destructuring using Class Component
// export default class Destructuring extends Component {
//   render() {
//     const {name, age,arr} = this.props;
//     return (
//       <div>
//         <h1>{name}</h1>
//         <h1>{age}</h1>
//         <h1>{arr}</h1>
//       </div>
//     )
//   }
// }


// Destructuring State
export default class Destructuring extends Component {
    constructor(){
        super();
        this.state = {
            team1: "CSK",
            team2: "KKR"
        }
    }
  render() {
    const {team1, team2} = this.state;
    return (
      <div>
        <h1>{team1}</h1>
        <h1>{team2}</h1>
      </div>
    )
  }
}


