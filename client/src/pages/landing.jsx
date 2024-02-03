import React from "react";
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

function landing() {
  let btns = [
    ["Home", "#home"],
    ["About Us", "#aboutus"],
    ["Services", "#services"],
    ["Store", "store"],
    ["Contact Us", "#contactus"],
  ];


  let { popup, handelPopcart,login,handellogin,signup,handelsignup } = usePopup();
  return (
    <>
      {/* Login Sign Up */}
      {login ? <Login quit={handellogin} /> : null}
      {signup ? <Signup quit={handelsignup} /> : null}
      {popup ? <Cart quit={handelPopcart} /> : null}

      <img
        src={Bg}
        alt=""
        className="w-full h-[85vh] position absolute -z-10 mb-2"
      />
      <main className="px-[5%] h-[85vh] bg-cover" id="home">
        <div className=" flex  justify-center gap-10">
          <div className="bg-white mt-5 h-12 rounded-3xl flex items-center justify-center text-sm px-5">
            <Tab btns={btns} />
          </div>
          <Tabsearch />
        </div>
        <div className="mt-[20%]">
          <Heading />
        </div>
      </main>
      <section className="">
        <div className="h-[75vh] mt-20 px-[5%]">
          <Info />
          {/* Card Component */}

          <div className="h-3/4 pt-20">
            <CardBox items={4} style="grid-cols-4" />
          </div>
          <div className="text-center m-2">
           <Link to="/store"> View-More</Link>
          </div>
        </div>
      </section>

      <section className="h-[55vh] mt-20 px-[5%] py-1">
        {/* Booking */}
        <div className="my-20">
          <Booking />
        </div>
      </section>

        <Footer />
    </>
  );
}

export default landing;
