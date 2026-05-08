import React, { Component } from 'react'

export default class Updating2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            name2: this.props.name1
        }
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps Called");
        if(state.name2!==props.name1){
            console.log("Updating the name");
            return {name2:props.name1};
        }
        // console.log("Not updated state");
        return null;
    }

    // Should explicitly return a boolean value because of overriding it.
    shouldComponentUpdate(nextProps,nextState){
      console.log("Called shouldcomponentUpdate");
      console.log("NextProps is:",nextProps);
      console.log("NextState is:",nextState);
      // return false;
      return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
      console.log("getSnapshotBeforeUpdate Method Called...");
      console.log("PrevProps is:",prevProps);
      console.log("PrevState is:",prevState);
      return "Successfully got a Snapshot";
    }
    componentDidUpdate(prevProps,prevState,snapShot){
      console.log("componentDidUpdate Method Called...");
      console.log("PrevProps is:",prevProps);
      console.log("PrevState is:",prevState);
      console.log("SnapShot is:",snapShot);
    }
  render() {
    console.log("Render method called");
    console.log(this.state.name2)
    return (
      <div>
        <h1>{this.state.name2}</h1>
      </div>
    )
  }
}
