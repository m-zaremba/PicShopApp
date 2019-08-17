import React from 'react';
import styled from 'styled-components';

import { MdDehaze } from "react-icons/md";



const DrawerButton = (props) => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
       <>
         {isMobile ? <Wrapper onClick={props.click}>
           <Button><MdDehaze /></Button>
         </Wrapper> : <Wrapper onMouseEnter={props.click}>
           <NavLogoLeft>Pic</NavLogoLeft>
           <NavLogoRight>SHOP</NavLogoRight>
           <Button><MdDehaze /></Button>
         </Wrapper>}
       </>
  )
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
  z-index: 99;
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
`

const NavLogoRight = styled.div`
width: 70px;
  font-size: 1.5em;
  background-color: black;
  color: rgba(255, 223, 6, 0.96);
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 20px;
`
