import React from "react";

// Icons
import { CiLocationOn } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { IoBagOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";

// State
import { useState } from "react";

function Navbar({handellogin,handelsignup}) {
    let [popup, setPopup] = useState(false);
  return (
    <div className="h-20 bg-[#0D0D0D] fixed top-0 w-full">
      <div className="flex items-center justify-between w-4/5 mx-auto h-full">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl text-white font-semibold flex">
            <CiLocationOn />
            Mathura, India
          </h1>
        </div>
        <div className="text-center w-2/5">
          <input
            type="search"
            placeholder="Search"
            className=" bg-transparent border-white border w-full rounded-3xl h-10 px-4 text-white"
          />
        </div>
        <div className="flex items-center gap-4 text-3xl">
          {/* Write Like,Bell,Bag */}
          <h1 className="text-white font-medium">
            <CiHeart />
          </h1>
          <h1 className="text-white font-medium">
            <GoBell />
          </h1>
          <h1 className="text-white font-medium">
            <IoBagOutline />
          </h1>

          <h1 className="text-white font-medium">|</h1>
          <button className="text-white font-medium" onClick={() => {
                setPopup((n) => !n);
              }}>
              <CiUser />
          </button>

            {/* Popup */}
            {popup ? (
            <div className="absolute top-24 right-[6%] w-36 h-32 bg-black rounded-3xl flex flex-col gap-2">
              <button onClick={()=>{handellogin();setPopup((n)=>!n)}} className="mt-4 text-xl font-semibold text-white">Login</button>
              <button onClick={()=>{handelsignup();setPopup((n)=>!n)}}className="mt-4 text-xl font-semibold text-white">Signup</button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
