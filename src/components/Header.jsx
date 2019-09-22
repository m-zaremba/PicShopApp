import React from 'react';
import styled from 'styled-components';


const Header = (props) => {

    return (
      <HeaderMainContainer>
        <HeaderWrapper>
          <HeaderMotto>{props.headerText}</HeaderMotto>
        </HeaderWrapper>
        <Svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon fill="white" points="0,0 0,100 50,100 100,100 100,0 50,100" />
        </Svg>
      </HeaderMainContainer>
    )

 }

 export default Header;


/* --------------- STYLES --------------- */

const HeaderMainContainer = styled.header`
  background-color: rgb(255, 222, 0);
  height: 242px;
  text-align: center;
  padding-top: 2em;
  padding-bottom: 4em;
  padding-left: 10px;
  padding-right: 10px;
  color: black;
  position: relative;

  @media (min-width: 769px) {
    padding-top: 0;
    padding-bottom: 6em;
  }
`

const HeaderWrapper = styled.div`
  width: 100%;

  @media (min-width: 769px) {
    max-width: 1200px;
  }
`

const HeaderMotto = styled.span`
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 2em;

  @media (min-width: 769px) {
    font-size: 3em;
  }
`

const Svg = styled.svg`
  width: 100%;
  height: 2em;
  position: absolute;
  bottom: 0;
  left: 0;

  @media (min-width: 769px) {
    height: 3em;
  }
`
