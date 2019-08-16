import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import styled from 'styled-components';

import './app.css'


//import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import SideDrawer from './components/navigation/SideDrawer';
import Backshadow from './components/navigation/Backshadow';


class App extends React.Component {

  state = {
    sideDrawerVisible: false,
    drawerAnimate: false,
  };

  handleSideDrawerToggleCLick = () => {
    this.setState((prevState) => {
      return {sideDrawerVisible: !prevState.sideDrawerVisible, drawerAnimate: !prevState.drawerAnimate};
    })
  };

  handleBackshadowClick = () => {
    this.setState({
      sideDrawerVisible: false,
      drawerAnimate: false
    })
  };

   render(){

    // let sideDrawer;
    let backShadow;

    if (this.state.sideDrawerVisible) {
      // sideDrawer = <SideDrawer />
      backShadow = <Backshadow click={this.handleBackshadowClick}/>
    }

     return (
         <BrowserRouter>
           <MainContainer>
             {/* <Navbar  /> */}
             <SideDrawer animate={this.state.drawerAnimate} hamburgerClick={this.handleSideDrawerToggleCLick} click={this.handleBackshadowClick}/>
             {backShadow}
             <Switch>
               <Route exact path='/' component={Home}/>
               <Route path='/shop' component={Shop}/>
               <Route path='/cart' component={Cart}/>
             </Switch>
           </MainContainer>
         </BrowserRouter>
     )
   }
 }

export default App;

const MainContainer = styled.div`
  background-color: red;
`
