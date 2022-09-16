import { Fragment, useRef, useState ,useEffect} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useAppSelector, useAppDispatch } from '../hooks'
import image1 from '../Images/image-product-1.jpg';
import image2 from '../Images/image-product-2.jpg';
import image3 from '../Images/image-product-3.jpg';
import image4 from '../Images/image-product-4.jpg';
import { RemoveCurrentProduct } from "../store/products/products.actions";

export const ImagesPreview=()=> {
  const [open, setOpen] = useState(true)
  const products  = useAppSelector(state => state.products);
  const currentid  = products['current']
  const productsarray:[{}]=products['data']
  const dispatch= useAppDispatch()
  const [current, setCurrent] =  useState([""])
  const gallery=products['gallery'] 
  console.log(currentid)
  console.log(productsarray)
  console.log(gallery)
  const cancelButtonRef = useRef(null)
  useEffect(()=>{
    const f=productsarray.filter((item:any)=>item.id===currentid)
    let arr:any[]=[]
    Object.entries(f[0]).find(([key, value]) => {
      if (key === 'image') {
        arr.push(value);
      }})
     
      arr.push(image1,image2,image3,image4);
      setCurrent(arr);
      
  },[])
 const handleClose=()=>{
  
dispatch(RemoveCurrentProduct());
 setOpen(false);
 }
 const changeImages=(order:any)=>{
   let element:any=current[order]
   let arr:any[]=[...current]
   console.log(arr)
   arr[order]=arr[0]
   arr[0]=element
   setCurrent(arr)
   console.log(current)
   
 }
  return (
   
    <Transition.Root show={gallery} as={Fragment}>
      <Dialog as="div" className="relative z-50" initialFocus={cancelButtonRef} onClose={()=>{handleClose()}}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-0 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden  rounded-lg z-10 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white bg-opacity-100  px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <button  onClick={()=>{handleClose()}} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span className="sr-only">Close modal</span>
                </button>
                    <div className="mt-3 text-center ">
                      <div >
                        <img className=" ml-32 h-52 w-52" src={current[0]} alt="noimage"/>
                      </div>
                      <div className="grid grid-cols-4 gap-x-4 mt-6 lg:grid grid-cols-4 gap-x-4 mt-6">
                        <img onClick={()=>{changeImages(1)}} src={current[1]}  alt="noimage" className=" h-24 w-60 object-cover object-center hover:border-2 border-logo" />
                        <img  onClick={()=>{changeImages(2)}}src={current[2]}  alt="noimage" className=" h-24 w-60 object-cover object-center hover:border-2 border-logo" />
                        <img onClick={()=>{changeImages(3)}} src={current[3]}  alt="noimage" className=" h-24 w-60 object-cover object-center hover:border-2 border-logo" />
                        <img onClick={()=>{changeImages(4)}} src={current[4]}   alt="noimage" className="h-24 w-60 object-cover object-center hover:border-2 border-logo" />
                          
                        </div>
                    </div>
                 
                </div>
                
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    
  )}