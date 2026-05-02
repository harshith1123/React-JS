import React, { Component } from 'react'

export default class Updating2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            name2: this.props.name1
        }
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps Called");
        if(state.name2!==props.name1){
            console.log("Updating the name");
            return {name2:props.name1};
        }
        // console.log("Not updated state");
        return null;
    }
  render() {
    console.log(this.state.name2)
    return (
      <div>
        <h1>{this.state.name2}</h1>
      </div>
    )
  }
}
