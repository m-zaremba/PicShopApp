import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import DrawerButton from './DrawerButton';
import { Transition } from "react-transition-group";

const SideDrawer = props => {

  if (props.slideIn) {
    return (
      <Transition in={props.animate} timeout={500}>
        {(state) => (
          <Navi state={state}>
            <div style={{position: 'absolute', top: 30, right: -100, display: 'flex', alignItems: 'center'}}>
              <div>PicShop</div>
              <DrawerButton click={props.hamburgerClick} />
            </div>
            <ul>
              <li><Link to='/' onClick={props.click}>Home</Link></li>
              <li><Link to='/shop' onClick={props.click}>Shop</Link></li>
              <li><Link to='/cart' onClick={props.click}>Cart</Link></li>
            </ul>
          </Navi>

        )}
      </Transition>
          )

        } else {
          return (
            <Transition in={props.animate} timeout={500}>
              {(state) => (
                <Navi state={state}>
                  <div style={{position: 'absolute', top: 30, right: -100, display: 'flex', alignItems: 'center'}}>
                    <div>PicShop</div>
                    <DrawerButton click={props.hamburgerClick} />
                  </div>
                  <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/shop'>Shop</Link></li>
                    <li><Link to='/cart'>Cart</Link></li>
                  </ul>
                </Navi>

              )}
            </Transition>
          )
        }
        }

        export default SideDrawer;

        // const Nav = styled.nav`
        // position: fixed;
        // top: 0;
        // left: 0;
        // background-color: rgba(255, 255, 255, .5);
        // height: 100vh;
        // padding-top: 45vh;
        // width: 70%
        // max-width: 400px;
        // box-shadow: 1px 0px 10px rgba(0, 0, 0, .5);
        // z-index: 200;
        // {/* transform: translateX(-100%); */}
        // transition: 0.5s;
        // {/* width: 300px;
        // height: 200px; */}
        // /* example for move item */
        // transform: translateX(
        // ${({ state }) => (state === "entering" || state === "entered" ? 400 : 0)}%
        // );
        // `


        const Navi = styled.nav`
        position: fixed;
        top: 0;
        left: 0;
        background-color: white;
        height: 100vh;
        padding-top: 45vh;
        width: 70%
        max-width: 400px;
        box-shadow: 1px 0px 10px rgba(0, 0, 0, .5);
        z-index: 200;
        {/* transform: translateX(0); */}
        transition: 0.5s;
        {/* width: 300px;
        height: 200px; */}
        /* example for move item */
        transform: translateX(
        ${({ state }) => (state === "entering" || state === "entered" ? 0 : -100)}%
        );
`
