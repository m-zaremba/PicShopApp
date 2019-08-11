import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import styled from 'styled-components';


import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';


class App extends React.Component {

   render(){
     return (
         <BrowserRouter>
           <MainContainer>
             <Navbar/>
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
  width: 100%;
  background-color: red;
  margin: -8px -8px;
`
