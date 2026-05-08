import React, {Component} from 'react'
import './App.css';

export default class ControlledComponentsUsingClass extends Component {
    state = {
        name: "",
        email:""
    }
    handleForm(e){
        e.preventDefault();
        console.log(e);
        console.log("After submission username is:",e.target[0].value)
        console.log("After submission email is:",e.target[1].value)
        alert("Form Saved successfully");
    }
  render() {
    const handleUserName = (e)=>{
        console.log("Event e:",e)
        this.setState({
            // data: e.target.value
            // data: e.target.value.toUpperCase()
            name: e.target.value.toLowerCase().substring(0,7)
        })
        console.log("Target Value of UserName is:",e.target.value)
        // setTimeout(()=>{
        //     console.log("Data from state is:",this.state.data);
        // },2000)
        console.log("UserName from state is:",this.state.data);
    }

    const handleUserEmail = (e)=>{
        console.log(e);
        this.setState({
            email:e.target.value
        });
        console.log("Target Value of UserEmail is:",e.target.value)
    }
    return (
      <div className='App'>
      <h1>UserName: {this.state.name}</h1>
      <h1>UserEmail: {this.state.email}</h1>
      <form onSubmit={this.handleForm}>
      <div>
        <label htmlFor="">Enter UserName:</label>
        <input type="text" value ={this.state.name} onChange={handleUserName} />
      </div>
        <div>
        <label htmlFor="">Enter Email:</label>
        <input type="email" value ={this.state.email} onChange={handleUserEmail} />
            
        </div>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
    )
  }
}

