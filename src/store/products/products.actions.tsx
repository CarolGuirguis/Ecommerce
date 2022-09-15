import {FETCH_PRODUCTS_FAILURE,FETCH_PRODUCTS_SUCCESS,FETCH_PRODUCTS_START} from "./products.types";
import {ThunkAction,ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import { RootState } from "../store.js";
export const fetchallproducts = 
    (
       
    ):ThunkAction<Promise<void>,RootState,unknown,AnyAction> =>
 async(
    dispatch:ThunkDispatch<RootState,unknown,AnyAction>)
    :Promise <void>=>{
try {
    
    dispatch({
        
        type:FETCH_PRODUCTS_START,

    })
   const response= await fetch('https://fakestoreapi.com/products',
   {
    method:'GET',
    headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })     
    const data=await response.json();
    console.log(data)
    dispatch({
        type:FETCH_PRODUCTS_SUCCESS,
        payload:data
    })

} catch (error) {
    let message
  if (error instanceof Error) message = error.message
  else message = String(error)
  console.log(message)
    dispatch({
        type:FETCH_PRODUCTS_FAILURE,
        payload:message
    })
}
}

export const fetchcategoryproducts = 
    (
       category:string
    ):ThunkAction<Promise<void>,RootState,unknown,AnyAction> =>
 async(
    dispatch:ThunkDispatch<RootState,unknown,AnyAction>)
    :Promise <void>=>{
try {
    
    dispatch({
        
        type:FETCH_PRODUCTS_START,

    })
    var url="";
    if(category==="Men"){
        url="https://fakestoreapi.com/products/category"+"/men's clothing";
    }else{
    if(category==="Women"){
        url="https://fakestoreapi.com/products/category"+"/women's clothing";
    }
    else{
        url="https://fakestoreapi.com/products";
    }
     }
     console.log(url)
   const response= await fetch(url,
   {
    method:'GET',
    headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })     
    const data=await response.json();
    console.log(data)
    dispatch({
        type:FETCH_PRODUCTS_SUCCESS,
        payload:data
    })

} catch (error) {
    let message
  if (error instanceof Error) message = error.message
  else message = String(error)
  console.log(message)
    dispatch({
        type:FETCH_PRODUCTS_FAILURE,
        payload:message
    })
}
}

