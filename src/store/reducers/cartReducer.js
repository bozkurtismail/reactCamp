import { ADD_TO_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
    cartItem:cartItems
}
export default function cartReducer(state = initialState,{type,payload}){   //sepetin son halinin tutulduğu yer gönderilen actiona göre
    switch (type) {
        case ADD_TO_CART:
            let product = state.cartItems.find(c=>c.product.id === payload.id)
            break;
    
        default:
            break;
    }
}