import {SHOW_CART, ADD_TO_CART_FAIL,ADD_TO_CART_START,ADD_TO_CART_SUCCESS,REMOVE_FROM_CART_FAIL,REMOVE_FROM_CART_START,REMOVE_FROM_CART_SUCCESS,HIDE_CART} from "./cart.types";

export interface CartState{
   loading?:boolean,
   shown?:boolean
   error?:string,
   items:[]
}


interface Action{
   type:string,
   payload?:any
}

const cartReducer=(state: CartState={items:[]} ,action: Action)=>{
   
   switch(action.type){
       case ADD_TO_CART_START:
           return{...state,loading:true}
       case ADD_TO_CART_SUCCESS:
           const incart=state.items.find((item:any) => item.id===action.payload.item.id)?true:false
           console.log(incart)
           return{...state,loading:false,
            items:incart?state.items.map((item:any)=>item.id ===action.payload.item.id?
            {...item,qty:item.qty+action.payload.count}:item) : [...state.items,{...action.payload.item,qty:action.payload.count}],
            }
       case ADD_TO_CART_FAIL:
           return{loading:false,error:action.payload}
           case REMOVE_FROM_CART_START:
            return{...state,loading:true}
        case REMOVE_FROM_CART_SUCCESS:
            console.log(action.payload)
             const f=state.items.filter((item:any)=>item.id!==action.payload)
             console.log(f)
            return{...state,
             loading:false,
            items:state.items.filter((item:any) =>item.id !== action.payload)}
        case REMOVE_FROM_CART_FAIL:
            return{loading:false,error:action.payload}
        case SHOW_CART: 
            return{...state,shown:true}
        case HIDE_CART:
            return{...state,shown:false}
       default:
           return state   
   }
}
export default cartReducer;
