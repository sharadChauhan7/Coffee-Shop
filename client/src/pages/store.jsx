import React from "react";
import Navbar from "../components/store-c/Navbar";
import CardBox from "../components/store-c/CardBox";
import Signup from "../components/main/signup";
import Login from "../components/main/login";
import Cart from "../components/store-c/cart";
import { useState } from "react";

import { Link } from 'react-router-dom'
import Footer from "../components/main/Footer";
function store() {
  let [login, setLogin] = useState(false);
  let [signup, setSignup] = useState(false);

  function handellogin() {
    setLogin(!login);
  }
  function handelsignup() {
    setSignup(!signup);
  }

    // Cart state

    let [popcart,setPopcart]=useState(false);
    function handelPopcart(){
      setPopcart(!popcart);
    }
  return (
    <div>
      {/* Login Sign Up */}
      {login ? <Login quit={handellogin} /> : null}
      {signup ? <Signup quit={handelsignup} /> : null}
      {popcart ? <Cart quit={handelPopcart} /> : null}

      <Navbar   handellogin={handellogin} handelsignup={handelsignup} handelcart={handelPopcart} />
        <div className="px-[5%] text-3xl my-10 mt-32"><Link className="navbar-item text-gray-500" activeclassname="is-active" to="/">
              Home
            </Link> | <button>Store</button> </div>
      <div className="flex px-[5%] w-[100vw] justify-between">
        <div className="border w-[20%]">
          filter
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
