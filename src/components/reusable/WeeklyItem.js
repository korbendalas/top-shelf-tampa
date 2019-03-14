import React from 'react';

const WeeklyItem =(props)=>{

    return(
        <div className="weekly-item">
            <h3 className="title-1">
                {props.title1?props.title1:'Title 1'}
            </h3>
            <h3 className="title-2">
                 {props.title2?props.title2:'Title 2'}
            </h3>
            <h1 className="big-title">
                {props.bigTitle?props.bigTitle:'BIG TITLE'}
            </h1>

            <div className="line">
                <div className="inner-line">
                
                </div>
            </div>

        </div>

    );
}
export default WeeklyItem;