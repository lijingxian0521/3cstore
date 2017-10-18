import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import product from './product'
export default combineReducers({
    product,
import cartStore from './cartRed/cartStore.js';
export default combineReducers({
    cartStore:cartStore,
    router:routerReducer,
})