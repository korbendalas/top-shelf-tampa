import React from 'react';

const MenuItem =(props)=>{

    return(
        <div className="menu-item">
        <div className="header-and-price">
        <h3 className="item-header">
            {props.itemHeader?props.itemHeader:'ITEM HEADER'}
            </h3>
            <h3 className="item-price">
            {props.itemPrice?props.itemPrice:'ITEM PRICE'}
            </h3>

        
        </div>
           
              <p className="item-text">
              {props.itemText?props.itemText:'ITEM TEXT'}
              </p>  
        </div>
    );
};
export default MenuItem;