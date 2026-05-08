import React, { Component, createRef } from 'react'

export default class UnControlled_Component extends Component {
    constructor(){
        super();
        this.nameRef = createRef();
        this.ageRef = createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        console.log(this.nameRef);
        console.log(this.ageRef);
        this.ageRef.current.focus();
    }
    handleSubmit(e){
        e.preventDefault();  
        // console.log("Name:",this.nameRef.current.value);
        console.log("Age:",this.ageRef.current.value);
        console.log("Name:",document.getElementById('name').value)
        alert("Your Data with Name:"+ this.nameRef.current.value +" and Age:"+ this.ageRef.current.value +" saved successfully");
    }
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="">Enter Name:</label>
                <input type="text" name="" id="name" ref={this.nameRef} placeholder='Enter Name'/>
            </div>
            <br />
            <div>
                <label htmlFor="">Enter Age:</label>
                <input type="number" name="" id="" ref={this.ageRef} placeholder='Enter Age'/>
            </div>
            <br />
            <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
