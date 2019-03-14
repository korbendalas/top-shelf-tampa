import React from 'react';
import SliderComponent from '../reusable/SliderComponent';
import Button from '../reusable/Button';

import homeImg1 from '../../img/food-img.jpg';
import homeImg2 from '../../img/drinks-img.jpg';
import sliderBounce from '../../img/checkin-logo.png';
class Home extends React.Component {
  render(){
   
      return (
      <div className="home">
        <div className ="slider">
            <SliderComponent/>
        <img src={sliderBounce} className="animation slider-bounce" alt="slider animation"/>
        </div>
            {/* end slider */}

         <div className="snow">
             <div className="snow-top"> </div>

        <div className="cheer-team cheer-team-home">
            <div className="cheer-team-container">
                   <h1 className="menu-heading about-heading">CHEER FOR YOUR TEAM</h1>
                    <h3 className="item-header about-item-header">ENJOY EVERYTHING ELSE</h3>
                    <p className="item-text about-item-text">
                Whether you are celebrating a hockey win or just watching your
                 favorite sports teams play, we are a great Wesley Chapel
                  sports bar that offers
                 a variety of food and drinks that everyone will like.
                
                </p>
                <Button buttonName="more about us"
                  buttonColor="orange"
                    customButton="cheer-team-button"
                />
            </div>
            {/* end cheer team-container */}
            </div>
        {/* end cheer-team */}
         </div>   
        {/* end snow */}


        <div className="home-menu">
            <div className="home-menu-container">
                <div className="yelp"></div>

                <div className="home-menu-container-item">
                   <img src ={homeImg1} alt="home img food" />
                   
                    <div>
                        <h3 className="item-header ">HOW ABOUT SOME</h3>
                         <h1 className="menu-heading about-heading">GREAT FOOD</h1>
                        
                        <p className="item-text">
                            Our kitchen staff is dedicated to providing 
                            exceptional cuisine to provide you with one of
                            the best Wesley Chapel restaurant dining experiences.
                        </p>
                        <Button buttonName="menu"
                        buttonColor="orange"
                            
                        />
                </div>
                

             </div>
                {/* end home-menu-container-item */}

                <div className="home-menu-container-item ">
                  
                   
                    <div>
                        <h3 className="item-header ">VERY SPECIAL</h3>
                         <h1 className="menu-heading about-heading">DRINKS</h1>
                        
                        <p className="item-text">
                        Along with our specialty drinks, Top Shelf Sports Lounge
                         is passionate about craft beer from local breweries.
                        </p>
                        <Button buttonName="drinks menu"
                        buttonColor="orange"
                            
                        />
                </div>
                <img src ={homeImg2} alt="home img food" />

             </div>
                {/* end home-menu-container-item 2*/}

            </div>
            {/* end home menu container */}
        </div>
            {/* end home menu */}

    <div className="happy-hour">
        <div className="happy-hour-container">
            <h4>PERFECTLY TIMED</h4>
            <h2>HAPPY HOURS</h2>
            <p>We offer one of the best happy hours in the Wesley Chapel area.
                Monday through Friday from 4pm until 7pm,
                and from 10:00pm to close each night.</p>
            <p>

            <Button buttonName="weeekly specials"
                        buttonColor="orange"
                            customButton="happy-hour-button"
                        />  
            </p>
                
        </div>
    </div>
{/* end happy hour */}

 </div> 
//end home  
      );
       };
      } 
export default Home;