import React, { Component } from 'react'

export default class Unmount2 extends Component {
    componentWillUnmount(){
        console.log("componentWillUnmount Method is called...");
    }
  render() {
    console.log("Unmount2 render method called");
    return (
      <div>
        <h1>Learning Unmounting Phase</h1>
      </div>
    )
  }
}
