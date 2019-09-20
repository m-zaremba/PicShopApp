import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions';
import Checkout from './Checkout';
import Header from './Header';
import styled from 'styled-components';

import {IoIosCloseCircle} from "react-icons/io"

class Cart extends React.Component{

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }

    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }

    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }

    render() {

        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item=>{
                    return(

                        <CartItem key={item.id}>
                          <CartImageWrapper>
                            <img src={item.img} alt='to be filled properly'/>
                          </CartImageWrapper>
                          <CartItemDetailsWrapper>
                            {/* <span>Author: {item.author}</span> */}
                            <p><b>Price: {item.price}$</b></p>
                            <p><b>File type: {item.format}</b></p>
                          </CartItemDetailsWrapper>
                          <RemoveIconWrapper>
                            <RemoveIcon onClick={()=>{this.handleRemove(item.id)}} />
                          </RemoveIconWrapper>
                          </CartItem>
                    )
                })
            ):

             (
                <EmptyCartMessage>Nothing here... Must change that!</EmptyCartMessage>
             )

         const cartHeaderText = <>
           <HeaderBig>ALMOST</HeaderBig>
           <HeaderSubTextWrapper>
             <HeaderSmall>There.</HeaderSmall>
             <HeaderSmall>Just.</HeaderSmall>
             <HeaderSmall>Confirm.</HeaderSmall>
           </HeaderSubTextWrapper>
         </>;

       return(
         <>
           <Header headerText={cartHeaderText}/>
           <CartMainContainer>
             <CartWrapper>
               <ShopListHeader>Your cart's content:</ShopListHeader>
               <CartList>
                 {addedItems}
               </CartList>
             </CartWrapper>
             {this.props.items.length ? <Checkout /> : null}
           </CartMainContainer>
         </>
       )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.addedItems
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => {dispatch(removeItem(id))},
        addQuantity: (id) => {dispatch(addQuantity(id))},
        subtractQuantity: (id) => {dispatch(subtractQuantity(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);

const HeaderBig = styled.span`
  font-size: 2.2em;
  font-weight: bold;
  letter-spacing: .15em;
  text-indent: .15em;
  display: inline-block;

  @media (min-width: 321px) and (max-width: 415px) {
    letter-spacing: .24em;
    text-indent: .24em;
  }

  @media (min-width: 416px) {
    letter-spacing: 9vw;
    text-indent: 9vw;
  }
`

const HeaderSubTextWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const HeaderSmall = styled.span`
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: .5em;
`

const CartMainContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 472px);
  background-color: white;
  padding: 2em 1em;
`
const CartWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
`

const CartList = styled.ul`
  list-style: none;
`

const CartItem = styled.li`
  display: flex;
  width: 100%;
  padding: .5em 0;
  border-bottom: solid 1px rgba(0, 0, 0, .6);
`

const CartImageWrapper = styled.div`
  width: 30%;
`

const CartItemDetailsWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const RemoveIconWrapper = styled.div`
  display: flex;
  align-items: center;
`

const RemoveIcon = styled(IoIosCloseCircle)`
  font-size: 2em;
  color: rgb(255, 222, 0);
`

const ShopListHeader = styled.h5`
  padding: .5em 0;
  border-bottom: solid 1px rgba(0, 0, 0, .6);
`

const EmptyCartMessage = styled.p`
  padding: 1em 0;
  border-bottom: solid 1px rgba(0, 0, 0, .6);
`
