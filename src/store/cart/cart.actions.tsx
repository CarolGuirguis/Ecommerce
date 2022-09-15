import {ADD_TO_CART_FAIL,ADD_TO_CART_START,ADD_TO_CART_SUCCESS,REMOVE_FROM_CART_FAIL,REMOVE_FROM_CART_START,REMOVE_FROM_CART_SUCCESS,SHOW_CART,HIDE_CART} from "./cart.types";
import {ThunkAction,ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import { RootState } from "../store.js";
export const AddToCart = 
    (
       item:{}
    ):ThunkAction<Promise<void>,RootState,unknown,AnyAction> =>
 async(
    dispatch:ThunkDispatch<RootState,unknown,AnyAction>)
    :Promise <void>=>{
try {
    console.log(item)
    dispatch({
        
        type:ADD_TO_CART_START,
      
    })

    dispatch({
        type:ADD_TO_CART_SUCCESS,
        payload:item
    })

} catch (error) {
    let message
  if (error instanceof Error) message = error.message
  else message = String(error)
  console.log(message)
    dispatch({
        type:ADD_TO_CART_FAIL,
        payload:message
    })
}
}

export const ShowCart = 
    (
       
    ):ThunkAction<Promise<void>,RootState,unknown,AnyAction> =>
 async(
    dispatch:ThunkDispatch<RootState,unknown,AnyAction>)
    :Promise <void>=>{
try {
    
  
    
    dispatch({
        type:SHOW_CART
    })

} catch (error) {
    let message
  if (error instanceof Error) message = error.message
  else message = String(error)
  console.log(message)
   
}
}
export const HideCart = 
    (
       
    ):ThunkAction<Promise<void>,RootState,unknown,AnyAction> =>
 async(
    dispatch:ThunkDispatch<RootState,unknown,AnyAction>)
    :Promise <void>=>{
try {
    
  

    dispatch({
        type:HIDE_CART
    })

} catch (error) {
    let message
  if (error instanceof Error) message = error.message
  else message = String(error)
  console.log(message)
   
}
}
export const DeleteFromCart = 
    (
       item:any
    ):ThunkAction<Promise<void>,RootState,unknown,AnyAction> =>
 async(
    dispatch:ThunkDispatch<RootState,unknown,AnyAction>)
    :Promise <void>=>{
try {
    
    dispatch({
        
        type:REMOVE_FROM_CART_START,
      
    })

    dispatch({
        type:REMOVE_FROM_CART_SUCCESS,
        payload:item
    })

} catch (error) {
    let message
  if (error instanceof Error) message = error.message
  else message = String(error)
  console.log(message)
    dispatch({
        type:REMOVE_FROM_CART_FAIL,
        payload:message
    })
}
}
