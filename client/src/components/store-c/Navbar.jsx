import React from "react";

// Icons
import { CiLocationOn } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { IoBagOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import Logout from "../main/logout"
import { useEffect } from "react";

// State
import { useState } from "react";
import { usePopup } from "../../config/popup";
import { useUser } from "../../config/user";

function Navbar() {

  let [popup, setPopup] = useState(false);
  let { handellogin, handelsignup, handelPopcart,num } = usePopup();
  let {isLoggedIn} = useUser();

  const [navbarOpen,setNavbarOpen]=useState(false);
 console.log(popup)
  return (
    <div className={`h-20 bg-[#0D0D0D] fixed top-0 w-full z-20 ${navbarOpen?'h-1/2':'h-20'}`}>
      <div className="flex items-center justify-between w-4/5 mx-auto h-full max-cd:items-center max-cd:justify-evenly max-cd:flex-col">
        <div className={`max-cd:flex max-cd:justify-between max-cd:w-full ${navbarOpen?'max-cd:-mt-8':'max-cd:mt-4'}`}>
          <div>
          <h1 className="text-3xl text-white font-semibold flex max-xs:text-2xl">
            <CiLocationOn />
            Damium Coffee 
          </h1>
          </div>

          <div>
          <button
            className="text-white text-3xl cd:hidden font-medium max-cd max-cd:order-first max-xs:text-2xl"
            onClick={() => {
              setPopup((n) => !n);
            }}
          >
            <CiUser />
          </button>
          <button
            className="text-white text-3xl cd:hidden font-medium max-cd max-cd:order-first max-xs:text-2xl ml-10"
            onClick={() => {
              setNavbarOpen((n) => !n);
            }}
          >
            <RxHamburgerMenu/>
          </button>
          </div>
        </div>
        <div className="text-center w-2/5 max-cd:w-3/5 max-ss:w-4/5">
          <input
            type="search"
            placeholder="Search"
            className={` bg-transparent border-white border w-full rounded-3xl h-10 px-4 text-white ${navbarOpen?'':'max-cd:hidden'} `}
          />
        </div>
        <div className={`flex items-center gap-4 text-3xl max-cd:flex-col max-cd:opacity-60  max-cd:w-3/5 max-ss:w-4/5 ${navbarOpen?'':'max-cd:hidden'}`}>
          {/* Write Like,Bell,Bag */}
          <h1 className="text-white font-medium max-cd:flex max-cd:justify-between max-cd:w-full">
            <span className="cd:hidden text-2xl">Wishlist</span>
            <CiHeart />
          </h1>
          <h1 className="text-white font-medium max-cd:flex max-cd:justify-between max-cd:w-full">
          <span className="cd:hidden text-2xl">Notification</span>
            <GoBell />
          </h1>
          <h1 className="text-white font-medium max-cd:flex max-cd:justify-between max-cd:w-full" onClick={handelPopcart}>
          <span className="cd:hidden text-2xl">Cart</span>
            <IoBagOutline />
            {num > 0 ? (<span className="relative text-base rounded-full h-6 w-6 text-center right-4 bg-white text-black bottom-2 border">{num}
            </span>):null}
          </h1>

          <h1 className="text-white font-medium max-cd:hidden">|</h1>
          <button
            className="text-white text-3xl max-cd:hidden font-medium max-cd max-cd:order-first"
            onClick={() => {
              setPopup((n) => !n);
            }}
          >
            <CiUser />
          </button>

         
        </div>
        {/* Place here */}
      </div>
       {/* Popup */}
       {popup ? !isLoggedIn? (
            <div className="absolute top-24 right-[6%] w-36 h-32 bg-black rounded-3xl flex flex-col gap-2 z-50">
              <button
                onClick={() => {
                  handellogin();
                  setPopup((n) => !n);
                }}
                className="mt-4 text-xl font-semibold text-white"
              >
                Login
              </button>
              <button
                onClick={() => {
                  handelsignup();
                  setPopup((n) => !n);
                }}
                className="mt-4 text-xl font-semibold text-white"
              >
                Signup
              </button>
            </div>
          ):<Logout quit={setPopup}/> : null}
    </div>
  );
}

export default Navbar;
