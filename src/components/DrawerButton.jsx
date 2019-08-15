import React from 'react';
import styled from 'styled-components';

import { MdDehaze } from "react-icons/md";

const DrawerButton = props => (



       <Button onClick={props.click}><MdDehaze /></Button>



)

export default DrawerButton;

const Button = styled.button`
  background: none;
  border: none;
  outline: none;
  height: 42px;
  width: 42px;
  font-size: 40px;
  cursor: pointer;
`
