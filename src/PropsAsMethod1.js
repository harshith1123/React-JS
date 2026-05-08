import React, { Component } from 'react'
import PropsAsMethod2 from './PropsAsMethod2'

export default class PropsAsMethod1 extends Component {
    showAlert = (firstName,lastName)=>{
        console.log("Show Alert Called");
        alert(`Hey.... ${firstName} ${lastName}`);
    }
  render() {
    return (
      <div>
        <PropsAsMethod2 methodCall = {this.showAlert}/>
      </div>
    )
  }
}
