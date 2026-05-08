import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Props_Class extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.desc}</h1>
        <h1>{this.props.age}</h1>
      </div>
    )
  }
}

export class Props_Class2 extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

Props_Class.propTypes = {
    age: PropTypes.number
}

