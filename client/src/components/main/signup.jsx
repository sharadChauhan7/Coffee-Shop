import React from 'react'
import { IoClose } from "react-icons/io5";
import './login.css'
import { useState } from 'react';
import axios from 'axios';

function signup({quit}) {
    let [user,setUser]=useState({});

    function handlechange(e){
      setUser({...user,[e.target.name]:e.target.value})
    }

    async function handleSubmit(e){
      e.preventDefault();

      const res = await axios.post('http://localhost:3000/auth/signup',user);
      if(res.status===200){
        console.log(res.data);
        quit();
      }
      else{
        console.log("Some Error Occured");
        console.log(res);
        quit();
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
              <input type="number" name='phone' placeholder='Phone no.'  className="focus:outline-none" onChange={handlechange}/>
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