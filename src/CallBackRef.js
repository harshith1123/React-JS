import React, { Component } from 'react'

export default class CallBackRef extends Component {
    constructor(){
        super();
        this.myRef = null;
        this.setMyRef = (element) =>{
            this.myRef = element;
        }
    }
    componentDidMount(){
        console.log(this.myRef);
        this.myRef.focus();
    }
    handleSubmit(e){
        e.preventDefault()
        this.myRef.style.color = "red"
        this.myRef.style.backgroundColor = "Yellow"
    }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label htmlFor="">Enter Name:</label>
        <input type="text" name="" id="" ref={this.setMyRef} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
