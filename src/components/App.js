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



class App extends Component {
  render() {
    return (
      <div className="App">
          <HashRouter >
                <div>
                 <HeaderNav/>
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
