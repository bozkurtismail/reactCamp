//tüm statelerin toplandığı yer

import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";


//combine birleştirmek anlamına gelir.
const rootReducer = combineReducers({
    cart : cartReducer
    //,user : userReducer
})

export default rootReducer;