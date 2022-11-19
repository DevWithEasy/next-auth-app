import { useState } from "react";
import handleInput from "../../libs/handleInput";
import signup_account from "../../libs/signup";
import {FcGoogle} from "react-icons/fc";
import {BsGithub} from "react-icons/bs";

export default function Signup(){
    const [value,setValue] = useState({
        name : '',
        email : '',
        password : ''
    })
    return(
        <div className="h-screen flex justify-center items-center bg-gray-400">
            <div className="mx-4 md:w-6/12 py-5 px-2 space-y-2 bg-white rounded shadow">
                <h3 className="text-xl">Create new account</h3>
                <input type="text" name="name" onChange={(e)=>handleInput(e,value,setValue)} className="w-full p-2 border focus:outline-none focus:border-blue-300 rounded"/>
                <input type="text" name="email" onChange={(e)=>handleInput(e,value,setValue)} className="w-full p-2 border focus:outline-none focus:border-blue-300 rounded"/>
                <input type="text" name="password" onChange={(e)=>handleInput(e,value,setValue)} className="w-full p-2 border focus:outline-none focus:border-blue-300 rounded"/>
                <input type="submit" onClick={()=>signup_account(value)} className="px-4 py-2 bg-blue-400 text-white rounded cursor-pointer"/>
                <hr />
                <div className="space-y-2">
                    <button className="w-full flex justify-center items-center space-x-2 border rounded-full p-2 hover:bg-gray-100 transition-all duration-300">
                        <FcGoogle size={20}/>
                        <span>Sign in with Google</span>
                    </button>
                    <button className="w-full flex justify-center items-center space-x-2 border rounded-full p-2 hover:bg-gray-100 transition-all duration-300">
                        <BsGithub size={20}/>
                        <span>Sign in with Github</span>
                    </button>
                </div>
            </div>
        </div>
    )
}