<<<<<<< HEAD
  
import { combineReducers } from 'redux'
import { productReducer, selectedProduct } from './productReducer'
import {cartReducer} from './cartReducer'
 
const rootReducer=combineReducers({
    allProducts:productReducer,
    product:selectedProduct,
    cart:cartReducer,
    
})


=======
  
import { combineReducers } from 'redux'
import { productReducer, selectedProduct } from './productReducer'
 
const rootReducer=combineReducers({
    allProducts:productReducer,
    product:selectedProduct
})


>>>>>>> 8000d6aefee7ac732088c8e588acff330cae9e04
export default rootReducer