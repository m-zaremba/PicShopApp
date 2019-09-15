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

const HeaderMainContainer = styled.header`
  background-color: rgb(255, 222, 0);
  height: auto;
  text-align: center;
  padding-top: 3em;
  padding-bottom: 6em;
  padding-left: 10px;
  padding-right: 10px;
  color: black;
  position: relative;

  @media (max-width: 768px) {
    padding-top: 2em;
    padding-bottom: 4em;
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

const Svg = styled.svg`
  width: 100%;
  height: 3em;
  position: absolute;
  bottom: 0;
  left: 0;

  @media (max-width: 768px) {
    height: 2em;
  }
`
