import {SyntheticEvent,useState,useEffect} from 'react'
import {Link} from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../hooks'
import {signup} from '../store/users/users.actions';
import { useNavigate } from "react-router-dom";

export const SignUp=() =>{
    const[firstname,setFirstName]=useState('')
    const[lastname,setLastName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[userName,setUserName]=useState('')
    const userLogin = useAppSelector(state => state.userLogin);
    const { userInfo }=userLogin
    let navigate = useNavigate();
    const dispatch= useAppDispatch()
    const submitHandler= async (e: SyntheticEvent)=>{
        e.preventDefault();
        dispatch(signup(firstname,lastname,email,password,userName));
        }
        useEffect(()=>{
            if(userInfo != undefined && userInfo['firstName'] )
            navigate('/home')
          },[userInfo])
return(
<div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="firstname"
                        placeholder="First Name" 
                        onChange={(e)=>setFirstName(e.target.value)}/>
                     <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="lastname"
                        placeholder="Last Name" 
                        onChange={(e)=>setLastName(e.target.value)}/>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" 
                        onChange={(e)=>setEmail(e.target.value)} />

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="username"
                        placeholder="User Name"
                        onChange={(e)=>setUserName(e.target.value)} />
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" 
                        onChange={(e)=>setPassword(e.target.value)} />

<button
            type="submit"
            onClick={submitHandler}
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-green-500 py-2 px-4 text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            
            Create Account
          </button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 	&nbsp;
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 	&nbsp;
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account?  	&nbsp;
                    <Link to={`/login`}>
                    <a className="no-underline border-b border-blue text-blue-500" href="../login/">
                     Log in
                    </a>.
                    </Link>
                </div>
            </div>
        </div>
)
}