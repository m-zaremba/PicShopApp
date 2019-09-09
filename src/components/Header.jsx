import React from 'react';
import styled from 'styled-components';


const Header = (props) => {

  // render(){

    let headerText = '';

    if (window.location.pathname === '/') {
      headerText = 'Best Shop. Best Photos. Best Photographers.';
    } else if (window.location.pathname === '/shop') {
      headerText = 'Choose Your Photos.';
    } else {
      headerText = 'Wanna Buy...';
    }


    return (
      <HeaderMainContainer>
        <HeaderWrapper>
          <HeaderMotto>{headerText}</HeaderMotto>
        </HeaderWrapper>
      </HeaderMainContainer>


    )

  // }
 }

 export default Header;

const HeaderMainContainer = styled.footer`
  background-color: rgb(255, 222, 0);
  height: auto;
  text-align: center;
  padding: 6em 10px;
  color: black;

  @media (max-width: 768px) {
    padding: 2em 10px;
  }
`

const HeaderWrapper = styled.div`
  max-width: 1200px;
  width: 100%;

  @media (max-width: 768px) {
    max-width: unset;
  }
`

const HeaderMotto = styled.span`
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 3em;
  letter-spacing: .4rem;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`
