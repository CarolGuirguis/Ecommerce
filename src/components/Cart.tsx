import { useAppSelector, useAppDispatch } from '../hooks'
import { useEffect, useState ,Fragment} from "react";
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon,TrashIcon } from '@heroicons/react/24/outline'
import { HideCart,DeleteFromCart } from "../store/cart/cart.actions";

export const Cart=()=>{
    const cart = useAppSelector(state => state.cart);
    const dispatch= useAppDispatch()
    const items:[{}]=cart['items']
    console.log(items)
    const [open, setOpen] = useState(true)
   
    const handleClose=()=>{
      dispatch(HideCart());
      setOpen(false);
    }
    const Remove=(id:any)=>{
      dispatch(DeleteFromCart(id));
      
    }
    return (

        <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={()=>{handleClose()}}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-0 transition-opacity" />
          </Transition.Child>
  
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-20 top-12 right-10 flex max-w-80 pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-100 flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">Cart</Dialog.Title>
                          
                        </div>
                        <hr className="mt-2"/>
  
                        <div className="mt-6">
                          <div className="flow-root">
                            {items.length>0?
                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                              {items.map((item:any) => (
                                <li key={item.id} className="flex py-6">
                                  <div className=" h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={item.image}
                                      
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>
  
                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <a>{item.title}</a>
                                        </h3>
                                        <button
                                          type="button"
                                          onClick={()=>{Remove(item.id)}}
                                          className="font-medium text-indigo-600 hover:text-indigo-500"
                                        >
                                          <TrashIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                                        </button>
                                        
                                      </div>
                                      
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <p className="text-gray-500">${item.price} x {item.qty}</p>
  
                                      <div className="flex">
                                      <p className="ml-4">${item.price*item.qty}</p>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>:<div className='text-center'>Your cart is empty</div>}
                          </div>
                        </div>
                      </div>
                      {items.length>0?
                      <div className="border-t border-gray-200 mb-4 py-0 px-4 sm:px-6">
                        <div className="mt-6">
                          <a
                            href="#"
                            className="flex items-center justify-center rounded-md border border-transparent bg-logo px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                          >
                            Checkout
                          </a>
                        </div>
                      </div>:<></>}
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    )
}