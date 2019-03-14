import React from 'react';
import {Link} from 'react-router-dom';
import footerLogo from '../../img/logo_footer.svg';
const Footer =()=>{
    return(

        <div className="footer">
            <div className="footer-container">

                <img src={footerLogo} alt="footer logo" className="footer-logo"/>

                <div className="footer-nav">
                    <Link to="/about">about</Link>
                    <Link to="/menu">menu</Link>
                    <Link to="/drinks-menu">drinks menu</Link>
                    <Link to="/weekly-specials">weekly specials</Link>
                    <Link to="/contact">contact</Link>
                    <Link to="/join-the-team">join the team</Link>

                </div>
                <h3 className="newsletter-heading">SIGN UP FOR OUR FREE NEWSLETTER</h3>
                <div className="newsletter">
                    <input className="nw-1" placeholder="Your email" required/>
                    <input className="nw-2" type="submit" value="sign up"/>
                </div>
                <div className="footer-address">
                <a href="#" >
                    3173 Cypress Ridge Blvd, Wesley Chapel, FL 33544 
                        <br/> 813-953-1032
                 </a>
                </div>
                 
                <div className="copyright">&copy; {new Date().getFullYear()} Top Shelf Sports Lounge | All rights reserved | Built by Dalibor Petric</div> 

            </div>

        </div>

    );
};
export default Footer;