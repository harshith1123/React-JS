import React, { Component } from 'react'
import './CSSThroughExternalCSS.css'

export default class CSSThroughExternalFile extends Component {
  render() {
    const x = this.props.bool ? 'one' : 'second'
    return (
      <div>
        <h1 className={`${x} third`} >CSS Through External File</h1>
      </div>
    )
  }
}
