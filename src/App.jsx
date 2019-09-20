import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import styled from 'styled-components';
import './app.css'

import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import SideDrawer from './components/navigation/SideDrawer';
import Backshadow from './components/navigation/Backshadow';
import Footer from './components/Footer';


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

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    let backShadow;

    if (this.state.sideDrawerVisible) {
      backShadow = <Backshadow click={this.handleBackshadowClick}/>
    }

     return (
         <BrowserRouter>
           <MainContainer>
             <SideDrawer animate={this.state.drawerAnimate} hamburgerClick={this.handleSideDrawerToggleCLick} click={this.handleBackshadowClick}/>
             {isMobile ? null : backShadow}
             <Switch>
               <Route exact path='/' component={Home}/>
               <Route path='/shop' component={Shop}/>
               <Route path='/cart' component={Cart}/>
             </Switch>
             <Footer/>
           </MainContainer>
         </BrowserRouter>
     )
   }
 }

export default App;

const MainContainer = styled.div`
  width: 100%;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`
