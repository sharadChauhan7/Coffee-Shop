import React from "react";
import './login.css'
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import axios from "axios";
import {auth} from '../../config/firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
import {useUser} from '../../config/user'
import {ValidateLogin} from '../../util/validation.js'
import { toast } from "react-toastify";

function login({ quit }) {

  async function settingCart(email){
    console.log(email);
    let result = await axios.get(`http://localhost:3000/cart/${email}`);
    // console.log(result.data);
    localStorage.setItem("cart", JSON.stringify(result.data));

  }
  let [user, setUser] = useState({});
  let {setIsLoggedIn}=useUser();
  function handlechange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  // Handel Submit
  async function handleSubmit(e) {
    e.preventDefault();
    try{
      let {error}=ValidateLogin.validate(user);
      if(error){
        toast.error(error.details[0].message,{position:'top-center'});
        return;
      }
      let userData=await signInWithEmailAndPassword(auth,user.email,user.password);
      // Set a token in local storage

      let res=await axios.get(`http://localhost:3000/auth/login/${userData.user.email}`);
      userData.user.providerData[0].phoneNumber=res.data[0].phone;
      userData.user.providerData[0].displayName=res.data[0].username;
      userData.user.providerData[0].address=res.data[0].address;

      localStorage.setItem('token',userData.user.accessToken);
      localStorage.setItem('user',JSON.stringify(userData.user));
      setIsLoggedIn(true);
      settingCart(user.email);
      quit();
      toast.success('User Logged In',{position:'top-right'});
    }
    catch(err){
      toast.error(err.message,{position:'top-right'});
      console.dir(err);
    }
    
  }
  return (
    <div className="overlay">
      <div className="modal md:w-1/2 xs:w-[80%] absolute top-1/4 md:left-1/4 xs:left-[10%] xs:right-[10%] max-xs:w-full">
        <div className="head">
          <h2 className="text-5xl font-medium">Login</h2>
          <button onClick={quit} className="text-4xl relative -top-4" ><IoClose /></button>
        </div>
        <div className="body">
          <form action="#" className="flex flex-col items-stretch gap-8">
                <input type="text" name="email" id="email" placeholder="Email" className="focus:outline-none"onChange={handlechange} />
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
