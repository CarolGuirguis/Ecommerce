import { USER_LOGIN_FAILURE,
     USER_LOGIN_REQUEST,
      USER_LOGIN_SUCCESS, 
      USER_LOGOUT,
      USER_SIGNUP_FAILURE,
      USER_SIGNUP_REQUEST,
      USER_SIGNUP_SUCCESS, } from "./users.types";
export interface UserState{
    loading?:boolean,
    error?:string,
    userInfo:{firstName?:string,lastName?:string}
}
interface Action{
    type:string,
    payload?:string
}
 const userReducer=(state: UserState={userInfo:{}} ,action: Action)=>{
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return{loading:true}
        case USER_LOGIN_SUCCESS:
            return{loading:false,userInfo:action.payload}
        case USER_LOGIN_FAILURE:
            return{loading:false,error:action.payload}
        case USER_SIGNUP_REQUEST:
            return{loading:true}
        case USER_SIGNUP_SUCCESS:
            return{loading:false,userInfo:action.payload}
        case USER_SIGNUP_FAILURE:
            return{loading:false,error:action.payload}
        case USER_LOGOUT:
            return{} 
        default:
            return state   
    }
}
export default userReducer;
