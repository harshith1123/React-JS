import React, { Component } from 'react'
import Updating2 from './Updating2';

export default class Updating1 extends Component {
    constructor(){
        super();
        this.changeState = this.changeState.bind(this);
        this.state = {
            name1: "Harshit"
        }
    }
    changeState(){
        console.log("Changing the state in updating1 class");
        this.setState({
            name1: "Harshit Shetty"
        })
    }
  render() {
    return (
      <div>
        <Updating2 name1 = {this.state.name1}/>
        <button type="button" onClick={this.changeState}>Change State</button>
      </div>
    )
  }
}
