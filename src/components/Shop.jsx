import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from './actions/cartActions.js';

import { MdAddShoppingCart } from "react-icons/md";

class Shop extends React.Component {

   handleClick = (id)=>{
         this.props.addToCart(id);
     }

   render(){

       let itemList = this.props.items.map(item=>{
            return(
                <div key={item.id} style={{marginTop: '58px'}}>
                  <div>
                    <img src={item.img} alt={item.title}/>
                    <span>{item.title}</span>
                    <span to="/" onClick={()=>{this.handleClick(item.id)}}><MdAddShoppingCart /></span>
                  </div>

                  <div>
                    <p>{item.desc}</p>
                            <p><b>Price: {item.price}$</b></p>
                        </div>
                 </div>
            )
        })
        return(
            <div>
              <h3>Our items</h3>
              <div>
                    {itemList}
                </div>
            </div>
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

export default connect (mapStateToProps, mapDispatchToProps)(Shop)
