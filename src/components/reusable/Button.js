import React from 'react';

const Button =(props)=>{
const btnName=props.buttonName?props.buttonName:'Give me name!';

    return(
    <a href="#" className={`button button-${props.buttonColor} ${props.buttonSize} ${props.customButton}`}>{btnName}</a>);
}
export default Button;