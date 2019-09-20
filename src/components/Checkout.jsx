import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

class Checkout extends React.Component{

  render(){

      return(
          <div>
            <TotalCostWrapper>
              <b>Total: {this.props.total} $</b>
            </TotalCostWrapper>
            <div>
              <Button> {`>>>`} Checkout {`<<<`} </Button>
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

export default connect(mapStateToProps,mapDispatchToProps)(Checkout);

const Button = styled.button`
  border: none;
  background-color: rgb(255, 222, 0);
  padding: 5px 20px;
  outline: none;
  margin: 1em 0;

  &:hover {
    transition: .3s;
    color: white;
    background-color: black;
    cursor: pointer;
  }
`

const TotalCostWrapper = styled.div`
  padding: 1em 0;
`
