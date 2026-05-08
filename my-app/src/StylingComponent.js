import React, { act, Component } from 'react'

export default class StylingComponent extends Component {

    constructor(){
        super();
        this.state ={
            active: false
        }
    }
    changeState = ()=>{
        console.log("Change State called");
        this.setState({
            active: true
        })
    }
    
  render() {    

    let obj = {
        color: "red",
        fontSize: "40px",
        backgroundColor: "Green"
    }
    let obj1 = {
        textAlign: "center",
        fontFamily: 'Segoe UI',
        fontWeight: "bold"
    }
    let obj2 = {
        display: "block",
        padding: "10px",
        color: "Orange",
        backgroundColor: "Green",
        margin: "0 auto",
        cursor: "pointer"
    }
    
    if(this.state.active){
        console.log("Active is:",this.state.active);
        obj2.backgroundColor = "Red"
    }
    return (
      <div>
        <h1 style={{color:"green", backgroundColor: "yellowgreen"}}>Hello... World</h1>
        <h1 style={obj}> Learning Inline Styling</h1>
        <p style={{...obj1, ...obj}}>Applying multiple style objects</p>
        <button style ={obj2} onClick={this.changeState}>Click Here</button>
      </div>
    )
  }
}
