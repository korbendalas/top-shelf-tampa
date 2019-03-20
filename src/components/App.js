import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import '../scss/main.scss';

import About from './pages/About';
import Catering from './pages/Catering';
import ContactUs from './pages/ContactUs';
import DrinksMenu from './pages/DrinksMenu';
import Home from './pages/Home';
import JoinTheTeam from './pages/JoinTheTeam';
import Menu from './pages/Menu';
import WeeklySpecials from './pages/WeeklySpecials';

import HeaderNav from './reusable/HeaderNav';
import Footer from './reusable/Footer';

import SideMenu from './reusable/SideMenu';
import Backdrop from './reusable/Backdrop';

class App extends Component {

  state={sideMenu:false};

   onClickMenu=()=>{
    // prevState is passed default by react
    //with method ensures to be changed state
        this.setState((prevState)=>{
          return {sideMenu: !prevState.sideMenu}
        });
   };
   backdropClick =()=>{
     this.setState({
       sideMenu:false
     });
   };

  render() {
    // ako je sideMenu true, iscrtace backdrop. 
     let backdrop;
     if(this.state.sideMenu){
       backdrop=<Backdrop click = {this.backdropClick}/>
     }


    return (
      <div className="App" style={{height: "100%"}}>
{/* SideMenu je uvek prisutan, backdrop nije  */}
      <SideMenu show={this.state.sideMenu}/>
{backdrop}
          <HashRouter >
                <div>
                 <HeaderNav onClickMenu={this.onClickMenu} />
                
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" exact component={About} />
                        <Route path="/menu" exact component={Menu} />
                        <Route path="/drinks-menu" exact  component={DrinksMenu} />
                        <Route path="/weekly-specials" exact component={WeeklySpecials} />
                        <Route path="/contact-us" exact component={ContactUs} />
                        <Route path="/catering" exact component={Catering} />
                        <Route path="/join-the-team" exact component={JoinTheTeam} />
                    </Switch>
                    <Footer/>
                </div>
                
            </HashRouter>

      </div>
    );
  }
}

export default App;
