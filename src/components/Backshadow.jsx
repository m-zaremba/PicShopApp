import React from 'react';
import styled from 'styled-components';

const Backshadow = props => (
  <Div onClick={props.click}></Div>
);

export default Backshadow;

const Div = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .3);
  z-index: 100;

`
