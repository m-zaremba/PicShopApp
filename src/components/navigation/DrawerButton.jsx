import React from 'react';
import styled from 'styled-components';

import { MdDehaze } from "react-icons/md";





class DrawerButton extends React.Component {

  render() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    // let route = window.location.pathname;

    return (
       <>
         {(isMobile) ? <Wrapper onClick={this.props.click}>
           <Button><MdDehaze /></Button>
         </Wrapper> : <Wrapper onMouseEnter={this.props.click}>
           { window.location.pathname === '/' ? <NavLogoLeftWhite>Pic</NavLogoLeftWhite> : <NavLogoLeftYellow>Pic</NavLogoLeftYellow>}
           <NavLogoRight>SHOP</NavLogoRight>
           <Button><MdDehaze /></Button>
         </Wrapper>}
       </>
    )
  }
}

export default DrawerButton;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const Button = styled.button`
  background: none;
  border: none;
  outline: none;
  height: 42px;
  width: 42px;
  font-size: 30px;
  cursor: pointer;
  color: gray;
  display: flex;
`

const NavLogoLeftWhite = styled.div`
  width: 70px;
  font-size: 1.5em;
  background-color: white;
  color: black;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  text-align: right;
  letter-spacing: 5px;
  box-shadow: inset 10px 0 9px -10px rgba(0,0,0,0.7)
`

const NavLogoLeftYellow = styled.div`
  width: 70px;
  font-size: 1.5em;
  background-color: rgb(255, 222, 0);
  color: black;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  text-align: right;
  letter-spacing: 5px;
  box-shadow: inset 10px 0 9px -10px rgba(0,0,0,0.7)
`

const NavLogoRight = styled.div`
  width: 70px;
  font-size: 1.5em;
  font-weight: 700;
  letter-spacing: -2px;
  background-color: black;
  color: rgba(255, 223, 6, 0.96);
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 20px;
`
