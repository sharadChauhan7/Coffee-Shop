import React from "react";
import './login.css'
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import axios from "axios";
import {redirect} from 'react-router-dom';


function login({ quit }) {
  let [user, setUser] = useState({});
  function handlechange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  // Handel Submit
  async function handleSubmit(e) {
    e.preventDefault();
    const res= await axios.post('http://localhost:3000/auth/login',user);
    if(res.status===200){
      console.log(res.data);
      quit();
    }
    
  }
  return (
    <div className="overlay">
      <div className="modal w-1/2 absolute top-1/4 left-1/4">
        <div className="head">
          <h2 className="text-5xl font-medium">Login</h2>
          <button onClick={quit} className="text-4xl relative -top-4" ><IoClose /></button>
        </div>
        <div className="body">
          <form action="#" className="flex flex-col items-stretch gap-8">
                <input type="text" name="username" id="name" placeholder="Username" className="focus:outline-none"onChange={handlechange} />
                <input type="password" name="password" placeholder="Password" className="focus:outline-none" onChange={handlechange}/>
                <button className="mt-8 text-3xl text-white bg-black w-full h-14 hover:bg-gray-900" onClick={handleSubmit} >Login</button>
                <a href="#" className="text-blue-500 text-center text-xl">Don't have an account SignUp</a>
          </form> 
        </div>
      </div>
    </div>
  );
}

export default login;
