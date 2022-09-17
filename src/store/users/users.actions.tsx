import {USER_LOGIN_FAILURE, USER_LOGIN_SUCCESS,USER_LOGIN_REQUEST,USER_SIGNUP_FAILURE,USER_SIGNUP_REQUEST,USER_SIGNUP_SUCCESS} from "./users.types";
import {ThunkAction,ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import { RootState } from "../store.js";
export const login = 
    (
        email:string,
        password:string
    ):ThunkAction<Promise<void>,RootState,unknown,AnyAction> =>
 async(
    dispatch:ThunkDispatch<RootState,unknown,AnyAction>)
    :Promise <void>=>{
try {
    
    dispatch({
        
        type:USER_LOGIN_REQUEST,

    })
    console.log(email+" "+password)
  const response= await fetch('https://fakestoreapi.com/auth/login',{
    method:'POST',
    body:JSON.stringify({
        username: email,
        password: password
    }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    const data=await response.json();
    
    const userData={firstName:email}
    
    dispatch({
        type:USER_LOGIN_SUCCESS,
        payload:userData
    })

} catch (error) {
    let message
  if (error instanceof Error) message = error.message
  else message = String(error)
  console.log(message)
    dispatch({
        type:USER_LOGIN_FAILURE,
        payload:message
    })
}
}

export const signup = 
    (
        name:string,
        lastname:string,
        email:string,
        password:string,
        username:string
    ):ThunkAction<Promise<void>,RootState,unknown,AnyAction> =>
 async(
    dispatch:ThunkDispatch<RootState,unknown,AnyAction>)
    :Promise <void>=>{
try {
    
    dispatch({
        
        type:USER_SIGNUP_REQUEST,

    })
    console.log(name+" "+lastname+" "+email+" "+password+" "+username)
   const reponse=await fetch('https://fakestoreapi.com/users',{
    method:"POST",
    body:JSON.stringify(
        {
            email:email,
            username:username,
            password:password,
            name:{
                firstname:name,
                lastname:lastname
            },
            address:{
                city:'kilcoole',
                street:'7835 new road',
                number:3,
                zipcode:'12926-3874',
                geolocation:{
                    lat:'-37.3159',
                    long:'81.1496'
                }
            },
            phone:'1-570-236-7033'
        }
    ),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    const data=await reponse.json();
    console.log(data)
    const userData={firstName:email}
    dispatch({
        type:USER_SIGNUP_SUCCESS,
        payload:userData
    })

} catch (error) {

    let message
  if (error instanceof Error) message = error.message
  else message = String(error)
  console.log(message)
    dispatch({
        type:USER_SIGNUP_FAILURE,
        payload:message
    })
}
}
