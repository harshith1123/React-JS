import React, { Component, createRef } from 'react'

export default class ReactRef extends Component {
    constructor(){
        super();
        this.myRef = createRef();
    }
    componentDidMount(){
        console.log(this.myRef);
        console.log(this.myRef.current);
    }
  render() {
    function handleSubmit(){
        this.myRef.current.align = "center";
        // this.myRef.current.hidden = true;
        this.myRef.current.style.color = "red";
        this.myRef.current.style.backgroundColor = "green";
    }
    return (
      <div>
        <h1 ref={this.myRef}>This is React Ref</h1>
        <button type="submit" onClick={handleSubmit.bind(this)}>Submit</button>
      </div>
    )
  }
}
