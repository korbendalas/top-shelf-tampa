import React from 'react';
import Button from './Button';
const HeaderParalax =(props)=>{

//to inject name of class to different components to be reused for bg img
    return (
    <div className={`header-paralax-${props.nameClass} header-paralax`} >
        <div className="header-paralax-container">
        <div className={`header-paralax-content ${props.contentClass}`}>
            <h1 className={`header-name`}>{props.headerName?props.headerName:'HEADER NAME'}</h1>
             <p className="header-text">{props.headerText?props.headerText:null}</p>
        </div>
        <div className="button-div">
             {props.button===true? <Button buttonName={props.buttonName} buttonColor={props.buttonColor} buttonSize={props.buttonSize}/>:null}
         </div>
        </div>
       
    </div>
);
};

export default HeaderParalax;