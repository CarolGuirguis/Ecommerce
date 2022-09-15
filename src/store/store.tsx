import {combineReducers} from 'redux'
import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import users from "./users/users.reducer";
import products from "./products/products.reducer";
import cart from "./cart/cart.reducer";
const reducers=combineReducers({
  userLogin:users,
  products:products,
  cart:cart
});
const initialState={}
const middleware=[thunk]
export const store = configureStore({
    reducer: reducers,
  })
  export default store;
  export type RootState=ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch