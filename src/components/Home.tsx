import { Navigate } from "react-router-dom";
import { ShowCart } from '../store/cart/cart.actions';
import { useAppSelector, useAppDispatch } from '../hooks'
import { useEffect, useState ,Fragment, SyntheticEvent} from "react";
import { fetchallproducts } from "../store/products/products.actions";
import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { XMarkIcon,ShoppingCartIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
import { AddToCart } from "../store/cart/cart.actions";
function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}
type ProductType = {
  id: string,
  title:string,
  price:any,
  description:string,
  image:string
}
export const Home=()=>{
  const [open, setOpen] = useState(false)
  
  const [currentProduct,setProduct]=useState({id:"",title:"",price:0,description:"",image:""})
 
    const userLogin = useAppSelector(state => state.userLogin);
    const products  = useAppSelector(state => state.products);
    const [state, setState] = useState('hide')
    const dispatch= useAppDispatch()
    const { userInfo }=userLogin
    const productsarray:[{}]=products['data']
    
    const handleClick=(product:{id:string,title:string,price:any,description:string,image:string})=>{
      setProduct(product);
      console.log(currentProduct)
      setState("show");
      setOpen(true);
    }

    const handleClose =() =>{
      setOpen(false);
      setState("hide");
    }
    const handleAddToCart=(e:SyntheticEvent,product:{})=>{
           e.preventDefault();
           dispatch(AddToCart(product));
           setOpen(false);
          setState("hide");
          dispatch(ShowCart());
    }
    useEffect(()=>{
        dispatch(fetchallproducts());
     } ,[])

    if(userInfo !== undefined && userInfo['firstName'] ){
    if(state==="show"){
      console.log(currentProduct.id)
      return (
        <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
          </Transition.Child>
    
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                enterTo="opacity-100 translate-y-0 md:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 md:scale-100"
                leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              >
                <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                  <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                    <button
                      type="button"
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                      onClick={handleClose}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
    
                    <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
                      <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                        <img src={currentProduct.image} className="object-cover object-center" />
                      </div>
                      <div className="sm:col-span-8 lg:col-span-7">
                      <h2 className="text-l font-bold text-red-900 sm:pr-12">Sneaker Company</h2>
                        <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{currentProduct.title}</h2>
    
                        <section aria-labelledby="information-heading" className="mt-2">
                          <h3 id="information-heading" className="sr-only">
                            Product information
                          </h3>
    
                          <p className="text-2xl text-gray-900">${currentProduct.price}</p>
    
                          
                          
                        </section>
    
                        <section aria-labelledby="options-heading" className="mt-10">
                          <h3 id="options-heading" className="sr-only">
                            Product options
                          </h3>
    
                          <form>
                           
                            <div>
                              
                              {currentProduct.description}
                            
                      
                            </div>
    
                          
    
                            <button
                              type="submit"
                              onClick={(e)=>{handleAddToCart(e,currentProduct)}}
                              className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                              <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                              &nbsp;
                              Add to Cart
                            </button>
                          </form>
                        </section>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      
      )
    }
    else{
    if(productsarray){
    return (
       
        <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
         
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {productsarray.map((product:any) => (
              <div key={product.id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-white-200  group-hover:opacity-75 lg:aspect-none lg:h-80 ">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a onClick={()=>handleClick(product)} >
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </a>
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
    }
    else{
        return (
        
            <div>Loading</div>
        )
    }}}
    else{
     return(
        <Navigate replace to="/login" />
     )

    }
}