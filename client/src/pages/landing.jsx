import React, { useState } from "react";
import { Info, Tab, Tabsearch } from "../components/landing-c/Head";
import { Heading } from "../components/landing-c/Head";
import Bg from "../assets/Bg.png";

import CardBox from "../components/store-c/CardBox";
import Signup from "../components/main/signup";
import Login from "../components/main/login";
import Cart from "../components/store-c/cart";
import Booking from "../components/landing-c/booking";
import Footer from "../components/main/Footer";
import { Link } from "react-router-dom";
import { usePopup } from "../config/popup";
import Newsletter from '../components/landing-c/newsletter'
import { RxHamburgerMenu } from "react-icons/rx";


function landing() {
  const btns = [
    ["Home", "#home"],
    ["About Us", "#aboutus"],
    ["Store", "store"],
    ["Contact Us", "#contactus"],
  ];

  let[navbarOpen,setNavbarOpen]=useState(false);
  function handelNavbar(){
    setNavbarOpen(!navbarOpen);
  }

console.log(navbarOpen);
  const { popup, handelPopcart,login,handellogin,signup,handelsignup } = usePopup();
  return (
    <>
      {/* Login Sign Up */}
      {login ? <Login quit={handellogin} /> : null}
      {signup ? <Signup quit={handelsignup} /> : null}
      {popup ? <Cart quit={handelPopcart} /> : null}

      <img
        src={Bg}
        alt=""
        className="w-full cd:h-[85vh] ss:h-[75vh] h-[65vh] position absolute -z-10 mb-2 object-cover"
      />
      <main className="px-[5%] cd:h-[85vh] ss:h-[75vh] h-[65vh] bg-cover " id="home">
        <div className={`flex  justify-center gap-10 max-ss:justify-between  ${navbarOpen?'max-ss:items-start':'max-ss:items-end'}`}>
          <div className={`text-4xl text-white mb-1 ss:hidden ${navbarOpen?'mt-7':''}`} onClick={handelNavbar}>
            <RxHamburgerMenu />
          </div>
          <div className={`bg-white mt-5 h-12 rounded-3xl flex items-center justify-center text-sm px-5 ${navbarOpen?'max-ss:h-[20vh] absolute top-16 w-full text-xl left-0 flex-col':'max-ss:hidden'}`}>
            <Tab btns={btns} />
          </div>
          <div >
             <Tabsearch />
          </div>
        </div>
        <div className="mt-[20%]">
          <Heading />
        </div>
      </main>
      <section className="">
        <div className="h-[80vh] ss:mt-20 max-ss:mt-10 xs:px-[5%]">
          <Info />
          {/* Card Component */}

          <div className="h-3/4 pt-20 overflow-y-scroll px-[5%] no-scrollbar">
            <CardBox items={4} style="flex gap-10 " />
          </div>
          <div className="text-center m-2">
           <Link to="/store" className="py-3 px-6 rounded-3xl bg-black text-white"> View-More</Link>
          </div>
        </div>
      </section>

      <section className="h-70vh] mt-20 xs:px-[5%] py-1">
        {/* Booking */}
        <div className="my-20">
          <Booking />
        </div>
      </section>
        <section className="h-[30vh]">
          <Newsletter/>
        </section>
        <Footer />
    </>
  );
}

export default landing;
