import React from "react";
import PropTypes from 'prop-types';


function Props(props){
    return(
        console.log(props),
        console.log(props.age),
        <>
            <h1>Name: {props.name}</h1>
            <h1>Age: {props.age}</h1>
            <h1>isMarried: {props.isMarried.toString()}</h1>
            <h1>isMarried: {String(props.isMarried)}</h1>
            <h1>Friends are: {props.arr}</h1>
            {props.children}
        </>
    ) 
}

Props.propTypes = {
    
    age: PropTypes.number,
    isMarried: PropTypes.number,
    arr: PropTypes.array
}

Props.defaultProps = {
    name: "Harshit"
}

export default Props;