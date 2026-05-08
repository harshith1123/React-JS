import React, { Component } from 'react'
import Unmount2 from './Unmount2';

export default class Unmount1 extends Component {
    state = {
        active: true
    }
    changeState = () => {
        this.setState({
            active: false
        })
    }
  render() {
    console.log("Unmounting1 render method called");
    return (
      <div>
        {this.state.active ? <Unmount2/> : <h1> Unmount2 Component got Deleted</h1>}
        <button type="button" onClick={this.changeState}>Change State</button>
      </div>
    )
  }
}
