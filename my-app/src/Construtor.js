import React, {Component} from  'react';

export default class Constructor extends React.Component{
    constructor(props){
        super(props);
        console.log("Constructor Called");
    }
    render(){
        return(
            <>
                <h1>This is the Constructor Class</h1>
                <h3>Hey!... {this.props.name}</h3>
            </>
            
        )
    }
}