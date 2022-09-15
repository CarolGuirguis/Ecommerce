import { FETCH_PRODUCTS_FAILURE,FETCH_PRODUCTS_START,FETCH_PRODUCTS_SUCCESS} from "./products.types";
export interface ProductState{
   loading?:boolean,
   error?:string,
   data:[]
}
interface Action{
   type:string,
   payload?:string
}
const productReducer=(state: ProductState={data:[]} ,action: Action)=>{
   switch(action.type){
       case FETCH_PRODUCTS_START:
           return{loading:true}
       case FETCH_PRODUCTS_SUCCESS:
           return{loading:false,data:action.payload}
       case FETCH_PRODUCTS_FAILURE:
           return{loading:false,error:action.payload}
       default:
           return state   
   }
}
export default productReducer;
