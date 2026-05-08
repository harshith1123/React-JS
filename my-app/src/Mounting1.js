import React, { Component } from 'react'
import Mounting2 from './Mounting2';

export default class Mounting1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "Harshit Shetty"
        }
        console.log("Mounting 1... Constructor invoked.");
    }

    static getDerivedStateFromProps(props,state){
        console.log(state);
        console.log(props);
        console.log("Mounting 1... getDerivedStateFromProps invoked.");
        return null;
    }
    componentDidMount(){
        console.log("Mounting 1... componentDidMount invoked.");
    }
  render() {
    console.log("Mounting 1... render invoked.");
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.props.city}</h1>
        <Mounting2 city="Kumta"/>
      </div>
    )
  }
}
