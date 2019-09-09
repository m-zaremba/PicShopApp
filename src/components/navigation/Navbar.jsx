import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import { MdShoppingCart } from 'react-icons/md';

// import DrawerButton from './DrawerButton';

const Navbar = props => (

    <NavBar>
      <Wrapper>
        {/* <div><DrawerButton click={props.hamburgerClick} /></div> */}
        <Link to='/'>The Logo</Link>

        <NavList>
          <NavLink><Link to='/'>Home</Link></NavLink>
          <NavLink><Link to='/shop'>Shop</Link></NavLink>
          <NavLink><Link to='/cart'><MdShoppingCart /></Link></NavLink>
        </NavList>
      </Wrapper>
    </NavBar>


)

export default Navbar;

const NavBar = styled.nav`
  background-color: yellow;
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
`

const Wrapper = styled.div`
  max-width: 1020px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavList = styled.ul`
  display: flex;
  padding: 5 20;
`

const NavLink = styled.li`
  padding-left: 1em;
  padding-right: 1em;
  list-style: none;
`
