import React, { Component } from 'react'

export default class Mounting2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "Shreyata Shetty"
        }
        console.log("Mounting 2... Constructor invoked.");
    }

    static getDerivedStateFromProps(props,state){
        console.log(state);
        console.log(props);
        console.log("Mounting 2... getDerivedStateFromProps invoked.");
        return null;
    }
    componentDidMount(){
        console.log("Mounting 2... componentDidMount invoked.");
    }
  render() {
    console.log("Mounting 2... render invoked.");
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.props.city}</h1>

      </div>
    )
  }
}
