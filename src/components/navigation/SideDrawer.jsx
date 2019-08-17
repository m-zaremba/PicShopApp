import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import DrawerButton from './DrawerButton';
import {Transition} from "react-transition-group";

import {TiGift, TiHomeOutline, TiShoppingCart} from "react-icons/ti";

class SideDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeText: 'Home',
      shopText: 'Photos',
      cartText: 'Cart'
    }
  }

  onMouseover = (e) => {
    if (e.currentTarget.classList.contains("first")) {
      this.setState({homeText: 'Go to Homepage'})
    } else if (e.currentTarget.classList.contains("second")) {
      this.setState({shopText: "Want to buy a photo? That's THE place."})
    } else if (e.currentTarget.classList.contains("third")) {
      this.setState({cartText: "Want to check what you're about to buy?"})
    }

  }
  //clear the text
  onMouseout = (e) => {
    this.setState({homeText: 'Home', shopText: 'Photos', cartText: 'Cart'})
  }

  render() {

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    let homeText;
    let shopText;
    let cartText;

    if (isMobile) {
      homeText = 'Home';
      shopText = 'Photos';
      cartText = 'Cart';
    } else {
      homeText = this.state.homeText;
      shopText = this.state.shopText;
      cartText = this.state.cartText;
    }

    const navBody = <>
      <NavBtnWrapper>
        <DrawerButton click = {this.props.hamburgerClick} />
      </NavBtnWrapper>
      <NavList>
        <NavLink className='first' onClick={this.props.click} onMouseOver={this.onMouseover} onMouseLeave={this.onMouseout}>
          <StyledLink to='/'>
            <TiHomeOutline style={{flex: '1', fontSize: '20px'}}/><LinkText>{homeText}</LinkText>
          </StyledLink>
        </NavLink>
        <NavLink className='second' onClick={this.props.click} onMouseOver={this.onMouseover} onMouseLeave={this.onMouseout}>
          <StyledLink to='/shop'>
            <TiGift style={{flex: '1', fontSize: '20px'}}/><LinkText>{shopText}</LinkText>
          </StyledLink>
        </NavLink>
        <NavLink className='third' onClick={this.props.click} onMouseOver={this.onMouseover} onMouseLeave={this.onMouseout}>
          <StyledLink to='/cart'>
            <TiShoppingCart style={{flex: '1', fontSize: '20px'}}/><LinkText>{cartText}</LinkText>
          </StyledLink>
        </NavLink>
      </NavList>
    </>;

    return (
      <Transition in={this.props.animate} timeout={300}>
        {(state) => (
          <> {isMobile ?
            <Navigation state={state}>
              {navBody}
            </Navigation>
          :
          <Navigation state={state} onMouseLeave={this.props.click}>
            {navBody}
          </Navigation>
          } </>)}
          </Transition>)
          }
          }

export default SideDrawer;

const Navigation = styled.nav `
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 1em;
  background-color: rgba(255, 223, 6, 0.96);
  height: 100vh;
  width: 70%;
  max-width: 350px;
  box-shadow: 1px 0px 6px rgba(0, 0, 0, .5);
  z-index: 200;
  transition: 0.25s;
  transform: translateX(${({state}) => (state === "entering" || state === "entered" ? 0 : -101)}%);

    @media (max-width: 768px) {
      padding-top: unset;
      height: 70vh;
      width: 100%;
      max-width: 100%;
      transform: translateY(${ ({state}) => (state === "entering" || state === "entered" ? 0 : -100)}%);
    }
${'' /* } */}
`

const NavBtnWrapper = styled.div `
  position: absolute;
  top: 30px;
  right: -182px;
    @media (max-width: 768px) {
      top: 100%;
      right: 0;
    }
`

const NavList = styled.ul `
  display: flex;
  flex-direction: column;
`

const NavLink = styled.li `
  & {
    text-align: left;
    list-style: none;
    padding-top: 2em;
    padding-bottom: 2em;
    padding-left: 1.5em;
    padding-right: 1.5em;
    border-bottom: rgba(0, 0, 0, 0.1) solid 1px;
    width: 100%;
  }

  &:hover {
    background-color: white;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 1.1em;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    color: black;
  };
`
const LinkText = styled.div `
flex: 4;
`
