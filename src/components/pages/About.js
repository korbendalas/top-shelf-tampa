import React from 'react';
import Button from '../reusable/Button';
import HeaderParalax from '../reusable/HeaderParalax';
import aboutImg1 from '../../img/menu/about-menu-img.jpg';
import aboutImg2 from '../../img/menu/about-menu-img2.jpg';

const About =()=>{
    return(
        <div className="about">
            <HeaderParalax nameClass="about "
                headerName="ABOUT US"
                headerText="We opened our doors in 2017 
                to accompany the AdventHealth Center Ice,
                home to the largest ice facility in the southeast, 
                located in the Tampa Bay area."
             />
        <div className="cheer-team">
            <div className="cheer-team-container">
                   <h1 className="menu-heading about-heading">CHEER FOR YOUR TEAM</h1>
                    <h3 className="item-header about-item-header">ENJOY EVERYTHING ELSE</h3>
                    <p className="item-text about-item-text">
                Whether you are celebrating a hockey win or just watching your
                 favorite sports teams play, we are a great Wesley Chapel
                  sports bar that offers
                 a variety of food and drinks that everyone will like.
                
                </p>
            </div>
            {/* end cheer team-container */}
            </div>
        {/* end cheer-team */}
            <div className="about-menu">
                <div className="about-img-1-container">
                    <img className="about-img-1" src={aboutImg1} alt="about menu"/>

                    <p className="about-img-1-text">
                        Our American fare cuisine
                        is a perfect post game meal or 
                        treat for any corporate event.
                    </p>  
                </div>
                           
                <div className="about-img-2-container">
                    <img className="about-img-2" src={aboutImg2} alt="about menu"/>
                    <p className="item-text about-menu-text">
                        We offer a full service menu with fresh food made from scratch
                        and cold craft local beer in one of the coolest environments.
                        Try one of our burgers while watching one of our 15 TVs,
                        or relax after work for one of the best Tampa Bay happy hours.
                    </p>
                </div>
            </div>
            {/* end about-menu */}
      
             <div className="about-buttons">    
                <Button buttonColor="dark" buttonName="menu"/>    
                <Button buttonColor="orange" buttonName="drinks"/>
            </div>
            {/* end about buttons */}

            <section className="contact-info about-working-hours">
            <p className="item-text "> Hours of Operation</p>

                <div className="hours-of-operation">
                    <h4 className="item-price">
                        Monday – Tuesday &nbsp;
                    </h4>
                    <h4 className="item-header">
                    4 P.M – 11:30 P.M.
                    </h4>    
                 </div> 

                 <div className="hours-of-operation">
                    <h4 className="item-price">
                    Wednesday – Friday  &nbsp;
                    </h4>
                    <h4 className="item-header">
                    11:30 A.M – 11:30 P.M.
                    </h4>    
                 </div> 

                 <div className="hours-of-operation">
                    <h4 className="item-price">
                    Saturday &nbsp;
                    </h4>
                    <h4 className="item-header">
                    11 A.M. – 11:30 P.M.
                    </h4>    
                 </div> 
                 <div className="hours-of-operation">
                    <h4 className="item-price">
                    Sunday &nbsp;
                    </h4>
                    <h4 className="item-header">
                    11 A.M. – 10:30 P.M.
                    </h4>    
                 </div> 

            </section>
            {/* end section working hours */}
    </div>
    // end about page

    );

};
export default About;