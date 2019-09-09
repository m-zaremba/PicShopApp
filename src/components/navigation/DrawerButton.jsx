import React from 'react';
import styled from 'styled-components';

import { MdDehaze } from 'react-icons/md';



class DrawerButton extends React.Component {

  render() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    let desktopButton;

    if (window.location.pathname === '/') {
      desktopButton = <><NavLogoLeft>Pic</NavLogoLeft><NavLogoRight>SHOP</NavLogoRight><Button><MdDehaze /></Button></>
    } else {
      desktopButton = <><NavLogoLeftVariant></NavLogoLeftVariant><NavLogoRightVariant><MdDehaze /></NavLogoRightVariant></>
    }

    return (
       <>
         {(isMobile) ? <Wrapper onClick={this.props.click}>
           <ButtonVariant><MdDehaze /></ButtonVariant>
         </Wrapper> : <Wrapper onMouseEnter={this.props.click}>
           {desktopButton}
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

  @media (max-width: 414px) {
    background: black;
    color: rgb(255, 222, 0);
    font-size: 1.5em;
  }
`

const ButtonVariant = styled.button`
  background: black;
  border: none;
  outline: none;
  height: 42px;
  width: 42px;
  font-size: 30px;
  cursor: pointer;
  color: rgb(255, 222, 0);
  display: flex;
`

const NavLogoLeft = styled.div`
  width: 70px;
  font-size: 1.5em;
  background-color: white;
  color: black;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  text-align: right;
  letter-spacing: 5px;
  box-shadow: inset 10px 0 9px -10px rgba(0,0,0,0.7);

  @media (max-width: 414px) {
    display: none;
  }
`

const NavLogoLeftVariant = styled.div`
  width: 40px;
  height: 40px;
  background-color: white;
  box-shadow: inset 10px 0 9px -10px rgba(0,0,0,0.7);

  @media (max-width: 414px) {
    display: none;
  }
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

  @media (max-width: 414px) {
    display: none;
  }
`

const NavLogoRightVariant = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 1.5em;
  background-color: black;
  color: rgba(255, 223, 6, 0.96);
`
