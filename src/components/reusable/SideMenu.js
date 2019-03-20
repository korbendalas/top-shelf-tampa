import React from 'react';

class SideMenu extends React.Component{
    state={submenuMenu:false,
            submenuContact:false};


    displaySubmenuMenuClick =()=>{
        this.setState((prevState)=>{
            return {submenuMenu: !prevState.submenuMenu}
          });
    }

    displaySubmenuContactClick =()=>{
        this.setState((prevState)=>{
            return {submenuContact: !prevState.submenuContact}
          });
    }


render(){

    let submenuMenuClass="submenu";
    if (this.state.submenuMenu)
    
    {  submenuMenuClass = "submenu show-submenu"}

    let submenuContactClass="submenu";
    if (this.state.submenuContact)
    
    {  submenuContactClass = "submenu show-submenu"}
   


    let sideNavClasses = "side-nav";
    if(this.props.show){
        sideNavClasses = "side-nav open";
    }

    return(

 <div className={sideNavClasses}>
          
            <div className="side-nav-container">
        
           <ul >
               <li className="side-nav-about">
                 <a href="#/about">about </a>
                 </li>

                <li className="side-nav-menu">
                    <a href="#/menu" >menu </a> <i onClick={this.displaySubmenuMenuClick} className="fa fa-sort-down"></i>
                    <ul className={`side-nav-menu-submenu  ${submenuMenuClass}`}>
                      <li><a href="#/menu">menu</a></li>  
                      <li><a href="#/drinks-menu">drinks menu</a></li> 
                      <li><a href="#/weekly-specials">weekly specials</a></li> 
                    </ul> 
                </li>

                <li className="side-nav-contact">
                <a href="#/contact-us">contact </a> <i  onClick={this.displaySubmenuContactClick} className="fa fa-sort-down"></i>
                <ul className={`side-nav-contact-submenu ${submenuContactClass}`}>
                      <li><a href="#/contact-us">contact us</a></li>  
                      <li><a href="#/catering">catering</a></li> 
                      <li><a href="#/join-the-team">join the team</a></li> 
                    </ul>
                </li>     
           
         </ul>
        
        </div>
</div>
    );
    }
}
export default SideMenu;