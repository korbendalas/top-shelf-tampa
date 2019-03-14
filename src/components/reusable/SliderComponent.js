import React from 'react';
import Slider from "react-slick";
import Button from '../reusable/Button';

import slider1 from '../../img/slider/slider1.jpg';
import slider2 from '../../img/slider/slider2.jpg';
import slider3 from '../../img/slider/slider3.jpg';
import slider4 from '../../img/slider/slider4.jpg';
import slider5 from '../../img/slider/slider5.jpg';
import slider6 from '../../img/slider/slider6.jpg';

import arrowLeft from '../../img/slider/arrow_prev.png';
import arrowRight from '../../img/slider/arrow_next.png';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  console.log(className);
  return (
    <div
   
      className="slick-arrow arrow-right"
      style={{ ...style, display: "block"}}
      onClick={onClick}
    >
    <img src={arrowRight} alt="arrow_right"/>
    </div>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
    className="slick-arrow arrow-left"
      style={{ ...style, display: "block"}}
      onClick={onClick}
    >
    <img src={arrowLeft} alt="arrow_left"/>
    </div>
  );
}
class SliderComponent extends React.Component{
 
  firstSliderImg=()=>{
    return(
      <div className="slider-img slider-img-1">

           <div className="slider-img-container ">
                <h1>FLIPPING FRIDAY</h1>
                <p>9:00PM – Close | Top Shelf vs. YOU <br/>
                  Flip a coin for a chance to
                  receive 50% off your drinking bill. 20% off appetizers.
                </p>
                <div className="slider-buttons">
                      <Button buttonName="explore menu"
                      buttonColor="dark"
                      />
                      <Button buttonName="our specials"
                      buttonColor="orange"
                      />
                </div>
           </div>
      </div>
  
    );

}; 

secondSliderImg=()=>{
  return(
    <div className="slider-img slider-img-2">    

           <div className="slider-img-container ">
                <h1>TRIVIA NIGHT | BREW VS. BRAIN</h1>
                <p>Wednesdays at 7:30PM <br/>
                Specials: <strong>$0.75 Wings</strong>
                , $5 Craft Beers. Prizes: Gift Cards, Sponsor Giveaways.
                </p>
                <div className="slider-buttons">
                      <Button buttonName="explore menu"
                      buttonColor="dark"
                      />
                      <Button buttonName="our specials"
                      buttonColor="orange"
                      />
                </div>
           </div>
      </div>

  );
}

thirdSliderImg=()=>{
  return(
    <div className="slider-img slider-img-3">

         <div className="slider-img-container ">
              <h1>NOT JUST A SPORTS LOUNGE</h1>
              <p>All the sports, but with excellent food and perfect happy hours.
              </p>
              <div className="slider-buttons">
                    <Button buttonName="explore menu"
                    buttonColor="dark"
                    />
                    <Button buttonName="our specials"
                    buttonColor="orange"
                    />
              </div>
         </div>
    </div>

  );

}; 

fourthSliderImg=()=>{
  return(
    <div className="slider-img slider-img-4">

         <div className="slider-img-container ">
              <h1>LATE NIGHT HAPPY HOUR</h1>
              <p>10:00 P.M. – Close | Sunday – Thursday <br/>
              $3.50 Domestic Drafts, $2.00 Off House Wines, $5.00 Jameson Shots, $4.00 Fireball, $4.00 Premium Wells
              </p>
              <div className="slider-buttons">
                    <Button buttonName="explore menu"
                    buttonColor="dark"
                    />
                    <Button buttonName="our specials"
                    buttonColor="orange"
                    />
              </div>
         </div>
    </div>

  );

}; 


fifthSliderImg=()=>{
  return(
    <div className="slider-img slider-img-5">

         <div className="slider-img-container ">
              <h1>BOLTS NATION</h1>
              <p>Game Day Drink Specials <br/>
              $3 Lightning Shots, $4 Coors Light, $5 Jack Daniels, $6 Nachos
              </p>
              <div className="slider-buttons">
                    <Button buttonName="explore menu"
                    buttonColor="dark"
                    />
                    <Button buttonName="our specials"
                    buttonColor="orange"
                    />
              </div>
         </div>
    </div>

  );

}; 


sixhtSliderImg=()=>{
  return(
    <div className="slider-img slider-img-6">

         <div className="slider-img-container ">
              <h1>SEMINOLES</h1>
              <p>$3 Fireball, $6 Renegade Shots, $3 Garnet & Gold Shots, $16 16oz. Bud Buckets, $6 Nachos
              </p>
              <div className="slider-buttons">
                    <Button buttonName="explore menu"
                    buttonColor="dark"
                    />
                    <Button buttonName="our specials"
                    buttonColor="orange"
                    />
              </div>
         </div>
    </div>

  );

}; 





  render() {
    const settings = {
      autoplay:true,
      fade:true,
      autoplaySpeed:4000,
      dots: false,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div>
   
        <Slider {...settings}>
          <div>
                {this.firstSliderImg()}
          </div>
          <div>
           {this.secondSliderImg()}
          </div>
          <div>
         {this.thirdSliderImg()}
          </div>
          <div>
          {this.fourthSliderImg()}
          </div>
          <div>
            {this.fifthSliderImg()}
          </div>
          <div>
            {this.sixhtSliderImg()}
          </div>
        </Slider>
      </div>
    );
  }

}
    export default SliderComponent;