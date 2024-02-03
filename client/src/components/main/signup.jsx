import React from 'react'
import { IoClose } from "react-icons/io5";
import './login.css'
import { useState } from 'react';
import {auth} from '../../config/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
// Import navigate
import {useNavigate} from 'react-router-dom';
import {useUser} from '../../config/user'
import axios from 'axios';

function signup({quit}) {
    let [user,setUser]=useState({});
    let {setIsLoggedIn}=useUser();

    function handlechange(e){
      setUser({...user,[e.target.name]:e.target.value})
    }

    async function handleSubmit(e){
      e.preventDefault();
      try{
        let userData=await createUserWithEmailAndPassword(auth,user.email,user.password);
        // Set a token in local storage
        localStorage.setItem('token',userData.user.accessToken);
        localStorage.setItem('user',JSON.stringify(userData.user));
        setIsLoggedIn(true);
        quit();
        useNavigate('/store');
      }
      catch(err){
        console.log(err)
      }
    }
  return (

    <div className="overlay">
    <div className="modal w-1/2 absolute top-[15%] left-1/4">
      <div className="head">
        <h2 className="text-5xl font-medium">SignUp</h2>
        <button onClick={quit} className="text-4xl relative -top-4" ><IoClose /></button>
      </div>
      <div className="body">
        <form action="#" className=" items-stretch grid grid-cols-2 gap-8">
              <input type="text" name="username" id="name" placeholder="Username" className="focus:outline-none" onChange={handlechange}/>
              <input type="text" name='phone' placeholder='Phone no.'  className="focus:outline-none" onChange={handlechange}/>
              <input type="email" name='email'placeholder='Email' className="focus:outline-none col-span-2" onChange={handlechange} />
              <input type="password" name="password" placeholder="Password" className="focus:outline-none col-span-2"onChange={handlechange}/>
              
              <button className="mt-8 text-3xl text-white bg-black w-full h-14 hover:bg-gray-900 col-span-2" onClick={handleSubmit}>SignUp</button>
        </form> 
      </div>
    </div>
  </div>
  )
}

export default signup