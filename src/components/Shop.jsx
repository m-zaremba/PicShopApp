import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from './actions/cartActions.js';
import styled from 'styled-components';

// import { FaPlusCircle } from "react-icons/fa";



class Shop extends React.Component {

  state = {
    buyButtonVisible: false,
    itemToShowId: 0
  }


   handleClick = (id)=>{
         this.props.addToCart(id);
     }

   handleBuyButtonShow = (id) => {
     this.setState({
       itemToShowId: id
     })
   }

   handleBuyButtonHide = () => {
     this.setState({
       itemToShowId: 0
     })
   }


   render(){

       let itemList = this.props.items.map(item=>{
            return(
                <ShopItem key={item.id} onMouseEnter={() => {this.handleBuyButtonShow(item.id)}} onMouseLeave={() => {this.handleBuyButtonShow()}}>
                  <div>
                    <Img src={item.img} alt={item.tag}/>
                  </div>
                  <div>
                    <p>Author: {item.author}</p>
                    {/* <p><b>Price: {item.price}$</b></p> */}
                    {item.id === this.state.itemToShowId ? <Div><Button to="/" onClick={()=>{this.handleClick(item.id)}}>Buy</Button></Div> : <Div>Buy from 2$</Div>}
                  </div>
                </ShopItem>
            )
        })
        return(
            <ShopMainContainer>
              <ShopWrapper>
                <h3>Our items</h3>
                <ShopItemWrapper>
                  {itemList}
                </ShopItemWrapper>
              </ShopWrapper>
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
  ${'' /* max-width: 1200px; */}
  width: 100%;
  ${'' /* min-height: calc(100vh - 30px); */}
  background-color: white;
`

const ShopWrapper = styled.div`
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
  padding: 20px 20px;
  flex: 1 1 calc(33% - 20px);
  max-width: calc(33% - 20px);

  &:hover{
    background-color: rgb(248, 248, 245);
  }
`

const Img = styled.img`
  width: 75%;
`

// const IconBuy = styled(FaPlusCircle)`
//   font-size: 1.9em;
//   color: rgb(255, 42, 42);
//
//   &:hover{
//     color: green;
//     transition: color .3s;
//   }
// `

const Button = styled.button`
  border: none;
  background-color: rgb(255, 222, 0);
  padding: 5px 20px;
  outline: none;

  &:hover {
    transition: .3s;
    color: white;
    background-color: black;
  }
`

const Div = styled.div`
  padding: 10px 0;
  height: 1.5em;
  font-size: .8em;
`
