import { addtocart } from '../types';


const initialState = {
    cartItems:[]
}
const addtocartReducer =(state = initialState, action)=>{
    const {type, payload} = action
    switch (type) {
        case addtocart:
            return {
                ...state,
                cartItems : [...state.cartItems, payload]
            }
            
    
        default:
            return state
    }
}

export default addtocartReducer;