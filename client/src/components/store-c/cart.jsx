import React from "react";
import "../main/login.css";
import { IoClose } from "react-icons/io5";
import Quantity from "../product-c/quantity";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { MdDelete } from "react-icons/md";


function cart({ quit,prevCart }) {
  // Setting Cart

  let [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function setCart() {
      const getCart = async () => {
        // Get cart data from local storage
        let cart = localStorage.getItem("cart");
        let cartObj = JSON.parse(cart);
        setCartItems(cartObj);
      };
      getCart();
    }
    setCart();
  }, [setCartItems]);

  function deleteItem(id){
    let newCart=cartItems.filter((item,index)=>{
        return (item.uuid!=id);
    });
    localStorage.setItem("cart",JSON.stringify(newCart));
    setCartItems(newCart);
    prevCart(newCart);
  }

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
        <div className="bg-white px-8 max-ss:px-2 py-4 fixed top-1/4 h-2/3 max-md:w-3/5 left-1/4 right-1/4 opacity-100 max-ss:w-full max-ss:left-0 max-ss:right-0 max-cd:w-[80%] max-cd:left-[10%] max-cd:right-[10%] cd:right-[10%] cd:left-[10%] cd:w-[80%] flex flex-col justify-between">
          <div className="head  justify-between relative">
            <h2 className="text-5xl font-medium">Cart</h2>
            <button onClick={quit} className="text-4xl relative -top-4">
              <IoClose />
            </button>
          </div>
          {/* Cart Body */}
          <div className="overflow-y-scroll h-full  no-scrollbar">
            {cartItems && cartItems.length ? (
              cartItems.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b-2 pb-4"
                  >
                    <div className="flex gap-5 max-ss:gap-0">
                      <img src={item.image_url} alt="" className="w-20 h-20" />
                      <div>
                        <h2 className="text-3xl font-medium max-ss:text-xl max-cd:text-2xl">{item.name}</h2>
                        <h3 className="text-xl max-ss:text-base max-cd:text-lg ">
                          <b>Size: </b>
                          {item.size}
                        </h3>
                        <h3 className="text-xl font-medium max-ss:text-base max-cd:text-lg">{item.service}</h3>
                      </div>
                    </div>
                    <div className="flex gap-2 flex-col items-center">
                      <h2 className="text-2xl ml-auto" onClick={()=>{deleteItem(item.uuid)}}><MdDelete /></h2>
                      <h1 className="font-medium text-xl bg-gray-400 px-2 rounded-2xl "><span className="text-xl font-medium max-ss:text-sm max-cd:text-lg">Qty:</span> {item.quantity}</h1>
                      <h2 className="text-2xl max-ss:text-xl font-medium max-cd:text-lg">
                      &#8377;{(item.price * item.quantity).toFixed(2)}
                      </h2>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="flex justify-center  h-full items-center">
                <h1 className="text-5xl max-ss:text-4xl  max-cd:text-3xl">Cart is Empty</h1>
              </div>
            )}
          </div>
          {/* Checkout */}
          {cartItems ? (
            cartItems.length ? (
              <div className="flex justify-between  relative bottom-0 w-[95%]  pt-2 items-center mb-3">
                <h2 className="text-4xl font-medium max-ss:text-2xl max-cd:text-3xl">Total</h2>
                <h2 className="text-4xl font-medium max-ss:text-2xl max-cd:text-3xl">
                  &#8377;
                  {cartItems.reduce((acc, item) => {
                    return (acc + item.price * item.quantity);
                  }, 0).toFixed(2)}
                </h2>

                <Link
                  to="/user/product/checkout"
                  className="text-3xl text-white bg-black w-36 h-14 max-ss:w-24  hover:bg-gray-900 max-ss:text-xl max-cd:text-xl max-cd-h-10 max-cd:w-28"
                >
                  <button className="text-2xl text-white bg-black w-32 h-14 max-ss:w-24 hover:bg-gray-900 max-ss:text-lg max-cd:text-xl max-cd-h-10 max-cd:w-28" onClick={quit}>
                    Checkout
                  </button>
                </Link>
              </div>
            ) : null
          ) : null}
        </div>
      </div>
    </>
  );
}

export default cart;
