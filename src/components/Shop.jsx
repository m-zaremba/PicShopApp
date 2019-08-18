import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from './actions/cartActions.js';
import styled from 'styled-components';
import Pagination from "react-js-pagination";

import { FaPlusCircle } from "react-icons/fa";



class Shop extends React.Component {


   handleClick = (id)=>{
         this.props.addToCart(id);
     }


   render(){

       let itemList = this.props.items.map(item=>{
            return(
                <ShopItem key={item.id}>
                  <div>
                    <img src={item.img} alt={item.tag}/>
                    <span to="/" onClick={()=>{this.handleClick(item.id)}}><IconBuy /></span>
                  </div>
                  <div>
                    <p>Author: {item.author}</p>
                    <p><b>Price: {item.price}$</b></p>
                  </div>
                </ShopItem>
            )
        })
        return(
            <ShopMainContainer>
              <h3>Our items</h3>
              <ShopItemWrapper>
                {itemList}
              </ShopItemWrapper>
            </ShopMainContainer>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    items: state.items
     }
  }

const mapDispatchToProps= (dispatch) => {

  return {
    addToCart: (id)=>{dispatch(addToCart(id))}
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Shop);

const ShopMainContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  min-height: calc(100vh - 30px);
`

const ShopItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const ShopItem = styled.div`
  font-family: 'Montserrat', sans-serif;
  display: inline-block;
  margin: 20px 10px;
  flex: 1 1 calc(33% - 20px);
  max-width: calc(33% - 20px);

`

const IconBuy = styled(FaPlusCircle)`
  font-size: 1.9em;
  color: rgb(255, 42, 42);

  &:hover{
    color: green;
    transition: color .3s;
  }
`
