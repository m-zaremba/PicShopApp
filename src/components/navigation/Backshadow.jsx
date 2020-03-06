import React from 'react';
import styled from 'styled-components';

const Backshadow = () => (
  <Div></Div>
);

export default Backshadow;

const Div = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .45);
  z-index: 100;
  top: 0;
  left: 0;
`
