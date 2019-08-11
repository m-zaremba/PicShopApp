import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions';
import Checkout from './Checkout';

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

                        <li key={item.id}>
                          <div>
                            <img src={item.img} alt={item.img}/>
                          </div>
                          <div>
                            <span>{item.title}</span>
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}$</b></p>
                            <p>
                              <b>Quantity: {item.quantity}</b>
                            </p>
                            <div>
                              <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddQuantity(item.id)}}>arrow_drop_up</i></Link>
                              <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(item.id)}}>arrow_drop_down</i></Link>
                            </div>
                            <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                          </div>
                        </li>
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
       return(
            <div>
              <div>
                <h5>You have ordered:</h5>
                <ul>
                  {addedItems}
                </ul>
              </div>
            </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(Cart)
