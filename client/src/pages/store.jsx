import React from "react";
import Navbar from "../components/store-c/Navbar";
import CardBox from "../components/store-c/CardBox";
import Signup from "../components/main/signup";
import Login from "../components/main/login";
import Cart from "../components/store-c/cart";
import {usePopup} from '../config/popup'

import { Link } from 'react-router-dom'
import Footer from "../components/main/Footer";
function store() {
  let {popup,handelPopcart,signup,handelsignup,login,handellogin}=usePopup();

    // Cart state
  return (
    <div>
      {/* Login Sign Up */}
      {login ? <Login quit={handellogin} /> : null}
      {signup ? <Signup quit={handelsignup} /> : null}
      {popup ? <Cart quit={handelPopcart} /> : null}

      <Navbar />
        <div className="px-[5%] text-3xl my-10 mt-32"><Link className="navbar-item text-gray-500" activeclassname="is-active" to="/">
              Home
            </Link> | <button>Store</button> </div>
      <div className="flex px-[5%] w-[100vw] justify-between">
        <div className="border w-[20%]">
          {/* Filterrrr */}
        </div>
        <div className="w-[75%] mb-24">
          <CardBox items={20} style="grid-cols-3"/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default store;
