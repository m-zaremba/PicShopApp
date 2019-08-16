import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import DrawerButton from './DrawerButton';
import { Transition } from "react-transition-group";

class SideDrawer extends React.Component {
   constructor(props) {
   super(props);
   this.state = {
     homeText: 'Home',
     shopText: 'Shop',
     cartText: 'Cart'
   }
   }

   onMouseover = (e) => {
     if(e.currentTarget.classList.contains("first")){
       this.setState({homeText : 'Home sweet home...'})
     } else if (e.currentTarget.classList.contains("second")) {
       this.setState({shopText : 'Wanna buy a pic?'})
     } else if (e.currentTarget.classList.contains("third")) {
       this.setState({cartText : 'Wanna checkout?'})
     }

   }
   //clear the text
   onMouseout = (e) => {
     this.setState({homeText : 'Home', shopText: 'Shop', cartText: 'Cart'})
   }

   render(){
     const homeText = this.state.homeText;
     const shopText = this.state.shopText;
     const cartText = this.state.cartText;

     return (
       <Transition in={this.props.animate} timeout={500}>
         {(state) => (
           <Navigation state={state}>
             <NavBtnWrapper>
               <DrawerButton click={this.props.hamburgerClick} />
             </NavBtnWrapper>
             <NavList>
               <NavLink className='first' onClick={this.props.click} onMouseOver={this.onMouseover}
                 onMouseLeave={this.onMouseout}><StyledLink to='/'>{homeText}</StyledLink></NavLink>
               <NavLink className='second' onClick={this.props.click} onMouseOver={this.onMouseover} onMouseLeave={this.onMouseout}><StyledLink to='/shop'>{shopText}</StyledLink></NavLink>
               <NavLink className='third' onClick={this.props.click} onMouseOver={this.onMouseover} onMouseLeave={this.onMouseout}><StyledLink to='/cart'>{cartText}</StyledLink></NavLink>
             </NavList>
           </Navigation>
         )}
       </Transition>
     )
   }
 }

// const SideDrawer = props => (
//
//
//   <Transition in={props.animate} timeout={500}>
//     {(state) => (
//       <Navigation state={state}>
//         <NavBtnWrapper>
//           <DrawerButton click={props.hamburgerClick} />
//         </NavBtnWrapper>
//         <NavList>
//           <NavLink onClick={props.click}><StyledLink to='/'>Home</StyledLink></NavLink>
//           <NavLink onClick={props.click}><StyledLink to='/shop'>Shop</StyledLink></NavLink>
//           <NavLink onClick={props.click}><StyledLink to='/cart'>Cart</StyledLink></NavLink>
//         </NavList>
//       </Navigation>
//     )}
//   </Transition>
//
// )

export default SideDrawer;

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 1em;
  background-color: rgba(255, 223, 6, 0.96);
  height: 100vh;
  width: 70%;
  max-width: 260px;
  box-shadow: 1px 0px 6px rgba(0, 0, 0, .5);
  z-index: 200;
  transition: 0.5s;
  transform: translateX(
  ${({ state }) => (state === "entering" || state === "entered" ? 0 : -101)}%
  );
`

const NavBtnWrapper = styled.div`
  position: absolute;
  top: 30px;
  right: -182px;
`

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
`

const NavLink = styled.li`
  & {
    text-align: center;
    list-style: none;
    padding-top: 2em;
    padding-bottom: 2em;
    border-bottom: rgba(0, 0, 0, 0.1) solid 1px;
    width: 100%;
  }
  &:hover {
    background-color: white;
  }
`

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: black;
    };
`
