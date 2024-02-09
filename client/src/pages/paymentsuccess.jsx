import React, { useEffect } from 'react'
import Landing from './landing'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { toast } from "react-toastify";
import BG from '../assets/CheckoutBg.png'
function paymentsuccess() {

  useEffect(()=>{
    async function EmptyCart(){
      let userData=JSON.parse(localStorage.getItem("user"));
      userData=userData.email;
      console.log(userData);
      let result=await axios.post("http://localhost:3000/cart/emptycart",{userData});
      if(result.data=="Cart is Empty Now"){
        
        localStorage.removeItem('cart');
        toast.success("Checkout Successfully");
      }
      else{
        toast.alert("Something is Wrong with cart");
      }
    }
    EmptyCart();
  },[]);

  return (
    <>
    <Link to='/'>
            <div className='bg-black opacity-80 fixed top-0 bottom-0 left-0 right-0 h-screen w-screen overflow-y-hidden'>
                <div className='flex justify-center items-center h-full'>
                    <h1 className='text-white text-7xl font-semibold'>Payment Successfull</h1>
                </div>
            </div>
    </Link>
    <div className='h-screen w-screen'>
      <img src={BG} alt=""  className='w-full h-full'/>
    </div>
    </>
  )
}

export default paymentsuccess   