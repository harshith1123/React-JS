import React, { Component } from 'react'

export default class HandleMultipleInputViaClassInForms extends Component {
    constructor(){
        super();
        this.state = {
            n: "",
            email:""
        }
    }
    handleChange = (e)=>{
        console.log(e)
        console.log(e.target);
        console.log(e.target.value);
        console.log(e.target.name)
        const name = e.target.name;
        const value = e.target.value
        this.setState({
            [name]: value
        })
    }
  render() {
    return (
      <div>
        <form>
            <label htmlFor="">Enter UserName:</label>
            <input type="text" name="n" value={this.state.n} onChange={this.handleChange}/>
            <br />
            <label htmlFor="">Enter Email:</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
            <br />
            <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
