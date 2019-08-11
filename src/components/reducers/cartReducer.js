import Pic1 from '../../images/pic1.JPG';
import Pic2 from '../../images/pic2.JPG';
import Pic3 from '../../images/pic3.JPG';
import Pic4 from '../../images/pic4.JPG';
import Pic5 from '../../images/pic5.JPG';
import Pic6 from '../../images/pic6.jpg';
import {ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY} from '../actions/action-types/cart-actions';

const initState = {
    items: [
        {id:1,title:'Butterfly', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:Pic1},
        {id:2,title:'Window', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: Pic2},
        {id:3,title:'Sculpture', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: Pic3},
        {id:4,title:'Landscape', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:Pic4},
        {id:5,title:'Bird-nest', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img: Pic5},
        {id:6,title:'Flower', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Pic6}
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState, action)=>{

    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
         let addedItem = state.items.find(item => item.id === action.id)

         let existed_item = state.addedItems.find(item=> action.id === item.id)
         if (existed_item) {
            addedItem.quantity += 1
             return{
                ...state,
                 total: state.total + addedItem.price
                  }
        } else {
            addedItem.quantity = 1;

            let newTotal = state.total + addedItem.price

            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
        }
    }

    if (action.type === REMOVE_ITEM) {
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)


        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        //console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }

    //INSIDE CART COMPONENT
    if (action.type === ADD_QUANTITY) {
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }

    if (action.type === SUB_QUANTITY) {
        let addedItem = state.items.find(item=> item.id === action.id)

        if (addedItem.quantity === 1) {
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        } else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                total: newTotal
            }
        }
    }
    return state
}

export default cartReducer;
