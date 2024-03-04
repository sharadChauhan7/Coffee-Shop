import React from 'react'
import { IoClose } from "react-icons/io5";
import './login.css'
import { useState } from 'react';
import {auth} from '../../config/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import axios from 'axios';
// Import navigate
import {useNavigate} from 'react-router-dom';
import {useUser} from '../../config/user'
import {ValidateSignup}  from '../../util/validation.js'
import { toast } from 'react-toastify';

function signup({quit}) {
    let [user,setUser]=useState({});
    let {setIsLoggedIn}=useUser();

    function handlechange(e){
      setUser({...user,[e.target.name]:e.target.value})
    }


    async function handleSubmit(e){
      e.preventDefault();
      try{
        console.log(user);
        let {error}=ValidateSignup.validate(user);
        if(error){
          console.log(error.details[0].message);
          
          toast.error(error.details[0].message,{position:'top-center'});
          return;
        }
        let userData=await createUserWithEmailAndPassword(auth,user.email,user.password);
        
        userData.user.providerData[0].phoneNumber=user.phone;
        userData.user.providerData[0].displayName=user.username;
        userData.user.providerData[0].address='';

        // Set a token in local storage
        localStorage.setItem('token',userData.user.accessToken);
        localStorage.setItem('user',JSON.stringify(userData.user));
        setIsLoggedIn(true);
        let res=await axios.post('http://localhost:3000/auth/signup',user);
        console.log(res.result);

        quit();
        toast.success('User Created',{position:'top-right'});
      }
      catch(err){
        toast.error(err.message,{position:'top-center'});
      }
    }
  return (

    <div className="overlay">
    <div className="modal md:w-1/2 absolute top-[15%] md:left-1/4  xs:left-[10%] xs:right-[10%] max-xs:w-full">
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