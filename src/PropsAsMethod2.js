import React, { Component } from 'react'

export default class PropsAsMethod2 extends Component {
  render() {
    console.log(this.props.methodCall)
    return (
      <div>
        <button type="button" onClick={() =>this.props.methodCall("Harshit","Shetty")}>Click</button>
      </div>
    )
  }
}
