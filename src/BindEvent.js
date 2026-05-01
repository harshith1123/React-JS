import React, { Component } from 'react'

export default class BindEvent extends Component {
    constructor(){
        super();
        // Bind using Constructor
        this.handleBindEvent = this.handleBindEvent.bind(this);
        this.state = {
            name: "Harshit Shetty"
        }
    }

    // handleBindEvent(){
    //     console.log("This:",this);
    //     this.setState({
    //         name:"Harshit Gajanan Shetty"
    //     })
    // }
    handleBindEvent = ()=>{
        console.log("This:",this);
        this.setState({
            name:"Harshit Gajanan Shetty"
        })
    }
  render() {
    return (
      <div>
      <h1>{this.state.name}</h1>
        {/* <button type='button' onClick={this.handleBindEvent}>Click</button> */}
        {/* Inside Render Function */}
        {/* <button type="button" onClick={this.handleBindEvent.bind(this)}>Click</button> */}
        <button type="button" onClick={() => this.handleBindEvent()}>Click</button>
      </div>
    )
  }
}
