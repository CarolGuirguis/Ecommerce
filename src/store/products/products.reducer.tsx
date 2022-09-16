import { FETCH_PRODUCTS_FAILURE,FETCH_PRODUCTS_START,FETCH_PRODUCTS_SUCCESS,SET_CURRENT_PRODUCT_SUCCESS,REMOVE_CURRENT_PRODUCT_SUCCESS} from "./products.types";
export interface ProductState{
   loading?:boolean,
   error?:string,
   current?:string,
   gallery?:boolean,
   data:[]
}
interface Action{
   type:string,
   payload?:string
}
const productReducer=(state: ProductState={data:[]} ,action: Action)=>{
   switch(action.type){
       case FETCH_PRODUCTS_START:
           return{...state,loading:true}
       case FETCH_PRODUCTS_SUCCESS:
           return{...state,loading:false,data:action.payload}
       case FETCH_PRODUCTS_FAILURE:
           return{...state,loading:false,error:action.payload}
       case SET_CURRENT_PRODUCT_SUCCESS:
           return{...state,current:action.payload,gallery:true}
       case REMOVE_CURRENT_PRODUCT_SUCCESS:
            return{...state,current:"",gallery:false}
       default:
           return {...state}   
   }
}
export default productReducer;
