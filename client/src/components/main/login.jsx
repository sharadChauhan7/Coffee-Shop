import React from "react";
import './login.css'
import { IoClose } from "react-icons/io5";


function login({ quit }) {
  return (
    <div className="overlay">
      <div className="modal w-1/2 absolute top-1/4 left-1/4">
        <div className="head">
          <h2 className="text-5xl font-medium">Login</h2>
          <button onClick={quit} className="text-4xl relative -top-4" ><IoClose /></button>
        </div>
        <div className="body">
          <form action="#" className="flex flex-col items-stretch gap-8">
                <input type="text" name="username" id="name" placeholder="Username" className="focus:outline-none"/>
                <input type="password" name="password" placeholder="Password" className="focus:outline-none"/>
                <button className="mt-8 text-3xl text-white bg-black w-full h-14 hover:bg-gray-900">Login</button>
                <a href="#" className="text-blue-500 text-center text-xl">Don't have an account SignUp</a>
          </form> 
        </div>
      </div>
    </div>
  );
}

export default login;
