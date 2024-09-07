<<<<<<< HEAD

 import rootReducer from './reducers/index'
import {thunk} from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store= createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))


=======
import rootReducer from './reducers/index'
import {thunk} from 'redux-thunk'
import {createStore, applyMiddleware, compose} from 'redux';

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


>>>>>>> 8000d6aefee7ac732088c8e588acff330cae9e04
export default store