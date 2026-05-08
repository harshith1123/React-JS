import React, { Component } from 'react'

export default class State extends Component {

    // Without Constructor
    state = {
            name: this.props.name,
            count: 1
        }

    // constructor(props){
    //     super(props);

    //     this.state = {
    //         name: this.props.name,
    //         count: 1
    //     }
    // }

    changeState(){
        this.setState({
            name: "Harshit Shetty",
            count: this.state.count + 1
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.count}</h1>
        <button type="button" value="Click" onClick={()=> this.changeState()}>Click</button>
      </div>
    )
  }
}
