import React from 'react';

const MenuItem2 =(props)=>{

    return(
        <div className="menu-item menu-item-2">
            <div className="header-and-price">
            {/* sent with props black or blue  */}

                <h3 className={`item-header item-header-${props.color}`}>
                    {props.itemHeader?props.itemHeader:'ITEM HEADER'}
                </h3>

                <h3 className="item-price">
                    {props.itemPrice?props.itemPrice:'ITEM PRICE'}
                </h3>
    
             </div>
                     
        </div>
    );
};
export default MenuItem2;