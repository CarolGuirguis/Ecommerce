import {SyntheticEvent,useState,useEffect} from 'react'
import { useAppSelector, useAppDispatch } from '../hooks'
import {login} from '../store/users/users.actions';
import { useNavigate } from "react-router-dom";
import { LockClosedIcon } from '@heroicons/react/24/outline'
export const Login=() =>{
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const userLogin = useAppSelector(state => state.userLogin);
    const { userInfo }=userLogin
    let navigate = useNavigate();
    const dispatch= useAppDispatch()

useEffect(()=>{
  if(userInfo != undefined && userInfo['firstName'] )
  navigate('/home')
},[userInfo])

const submitHandler= async (e: SyntheticEvent)=>{
e.preventDefault();
dispatch(login(email,password));

}
    
return(
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="w-full max-w-md space-y-8">
      <div>
       
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
        
      </div>
      <form className="mt-8 space-y-6" action="#" onSubmit={submitHandler}>
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <label  className="sr-only">
              User Name
            </label>
            <input
              id="username"
              name="username"
              required
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="User Name"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Password"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <a href="#" className="font-medium text-login hover:text-purple-700">
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button

            type="submit"
            className="group relative flex w-full rounded-md border border-transparent bg-login py-2 px-4 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-login focus:ring-offset-2"
          >
             <LockClosedIcon className="h-6 w-6 text justify-left text-[#7800f3]" aria-hidden="true" />
             <div className="group relative flex w-full justify-center mr-5"> Sign in</div>
           
          </button>
        </div>
      </form>
    </div>
  </div>
)
}