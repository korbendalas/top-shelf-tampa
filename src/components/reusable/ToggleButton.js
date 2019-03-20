import React from 'react';

const ToggleButton =(props)=>{
    return (
        <button onClick={props.click} className="toggle-button">
            <i className="fa fa-bars"></i> 
    
        </button>
    );
}
export default ToggleButton;