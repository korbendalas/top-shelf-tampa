import React from 'react';
import navLogo from '../../img/logo_header.svg';
import { Link} from 'react-router-dom';
import SideMenu from './SideMenu';
import ToggleButton from './ToggleButton';

const HeaderNav =(props)=> {

   
   
    return(

        <div className="header-nav">
            <div className="header-nav-container">
            <Link to="/">  <img src={navLogo} className="header-logo" alt="nav logo"/> </Link>
            <div className="nav-right">
                <Link to="/about">about </Link>

                <Link to="/menu" className="menu">menu
                <ul className="menu-dropdown dropdown">
                      <li><Link to="/menu">menu</Link></li>  
                      <li><Link to="/drinks-menu">drinks menu</Link></li> 
                      <li><Link to="/weekly-specials">weekly specials</Link></li> 
                    </ul>
                </Link>
                <Link to="/contact-us" className="contact">contact
                <ul className="contact-dropdown dropdown">
                      <li><Link to="/contact-us">contact us</Link></li>  
                      <li><Link to="/catering">catering</Link></li> 
                      <li><Link to="/join-the-team">join the team</Link></li> 
                    </ul>

                </Link>
            </div>
                <ToggleButton click={props.onClickMenu} />
                
            </div>
        </div>
    );
} 

export default HeaderNav;