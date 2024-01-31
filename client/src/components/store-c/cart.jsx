import React from "react";
import "../main/login.css";
import { IoClose } from "react-icons/io5";
import Quantity from "../product-c/quantity";
import { useEffect } from "react";
import axios from 'axios';

function cart({quit,cartItems}) {
  if(cartItems==null){
    cartItems=sessionStorage.getItem('cart');
    cartItems=JSON.parse(cartItems);
  }
  useEffect(() => {
    // Save cart data to sessionStorage whenever the cart is updated
    sessionStorage.setItem('cart', JSON.stringify(cartItems));
    // const getCart = async()=>{
    //   const res=await axios.get('http://localhost:3000/cart');
    //   console.log(res.data);
    // }
    // getCart();
  }, [cartItems]);


  let itemObj = {
    name: "Coffee",
    price: 11,
    size: "M",
    service: "Drive Through",
    quantity: 5,
    image_url: "https://iili.io/H8Y78Qt.webp",
    id: "6424335b59f9f6fdd657d2e1",
  };
  return (
    <>
      <div className="overlay">
        {/* Cart Body */}
        <div className="bg-white p-8 absolute top-1/4 h-2/3  overflow-y-scroll left-1/4 right-1/4 opacity-100">
          <div className="head  justify-between">
            <h2 className="text-5xl font-medium">Cart</h2>
            <button onClick={quit} className="text-4xl relative -top-4">
              <IoClose />
            </button>
          </div>
          {/* Cart Body */}
          <div className=" overflow-y-scroll">
          {
            (cartItems.length!=0)?cartItems.map((item,index)=>{
              return(
                <div key={index} className="flex justify-between items-center border-b-2 pb-4">
                  <div className="flex gap-5">
                    <img src={item.image_url} alt="" className="w-20 h-20"/>
                    <div>
                      <h2 className="text-3xl font-medium">{item.name}</h2>
                      <h3 className="text-xl"><b>Size: </b>{item.size}</h3>
                      <h3 className="text-xl font-medium">{item.service}</h3>
                    </div>
                  </div>
                  <div className="flex gap-5 items-center">
                    <Quantity quantity={item.quantity}/>
                    <h2 className="text-2xl font-medium">&#36;{item.price*item.quantity}</h2>
                  </div>
                </div>
              )}):<div className="flex justify-center items-center h-96"><h1 className="text-5xl">Cart is Empty</h1></div>
            }
          </div>
            
        </div>
      </div>
    </>
  );
}

export default cart;
