import React from 'react';
import WeeklyItem from '../reusable/WeeklyItem';
import HeaderParalax from '../reusable/HeaderParalax';
const WeeklySpeecials =()=>{
    return(
        <div className="weekly-specials">
            <HeaderParalax nameClass="weekly-specials "
             headerName="WEEKLY SPECIALS"
             contentClass="header-paralax-content-weekly"
             headerText="We offer one of the best happy hours in the Wesley Chapel area."
             />

             <div className="weekly-specials-container">
            
                <WeeklyItem title1="Seminoles" title2="Game Days"
                 bigTitle="$3 Fireball, $6 Renegade Shots,
                  $3 Garnet & Gold Shots, $16 16oz. Bud Buckets, $6 Nachos"
                  />

<WeeklyItem title1="Monday - Friday" title2="4 P.M. - 7 P.M."
                 bigTitle="$3.50 domestic drafts, $2 off of house wines, 
                 $4 premium wells and 25% off of any appetizer on the menu."
                  />


                  <WeeklyItem title1="Wednesdays" title2="7:30PM"
                 bigTitle="Trivia Night | Brew VS. Brain
                 $0.75 Wings, $5 Craft Beers. Prizes: Gift Cards, Sponsor Giveaways."
                  />  
                 
                  <WeeklyItem title1="Friday" title2="9 P.M. to Close"
                 bigTitle="Flip a coin for a chance to receive 50% off your drinking bill. 20% off appetizers."
                  />

                <WeeklyItem title1="Sunday - Thursday" title2="10 P.M. - Close"
                 bigTitle="$3.50 domestic drafts, $2 off house wines,
                  $5 Jameson shots, $4 Fireball and $4 premium wells"
                  />
                  <WeeklyItem title1="Tampa Bay Lightning" title2="Game Days"
                 bigTitle="$3 Lightning shots, $4 Coors Light,
                  $5 Jack Daniels and $6 Nachos, during the Lightning games "
                  />


             </div>
             {/* end weekly specials container */}
        </div>
    // end weekly specials page
    );

};
export default WeeklySpeecials;