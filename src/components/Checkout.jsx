import React from 'react';
import { connect } from 'react-redux';

class Checkout extends React.Component{

  render(){

      return(
          <div className='container'>
            <div className='collection'>
              <b>Total: {this.props.total} $</b>
            </div>
            <div className='checkout'>
              <button className='waves-effect waves-light btn'>Checkout</button>
            </div>
          </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    addedItems: state.addedItems,
    total: state.total
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
    substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Checkout)
