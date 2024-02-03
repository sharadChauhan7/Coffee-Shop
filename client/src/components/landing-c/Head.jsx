import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import Button from "./Button";
import Wood from "../../assets/Logo.png"
import Logout from "../main/logout";
import { CiUser } from "react-icons/ci";
import { useState,useEffect } from "react";
import {usePopup} from "../../config/popup"
import {useUser} from "../../config/user"
import axios from "axios";

function Heading() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-7xl font-bold text-white">LIFE IS BETTER</h1>
      <h2 className="text-5xl font-medium text-white">WITH COFFEE</h2>
      <Button text="Order Now" link="store" />
    </div>
  );
}
function Tab({ btns }) {
  return (
    <>
      {btns.map((data, index) => {
        return (
          <a className="mx-4" href={`${data[1]}`} key={index}>
            {data[0]}
          </a>
        );
      })}
    </>
  );
}

function Tabsearch() {
  // Check if user is logged in
  let {isLoggedIn}=useUser();
  let [popup,setPopup]=useState(false);
  let {handelPopcart,handellogin,handelsignup}=usePopup();
  return (
    <>
    <div className="bg-white border mt-5 h-12 rounded-3xl gap-2 flex items-center justify-center text-xl px-5">
      <a href="#">
        <CiSearch />
      </a>
      <a onClick={handelPopcart}>
        <IoBagOutline />
      </a>
      <button
        onClick={() => {
          setPopup(!popup);
        }}
      >
        <CiUser />
      </button>
    </div>
    <div>

        {popup ?!isLoggedIn? (
            <div className="absolute top-20 right-[29%] w-36 h-32 bg-white rounded-3xl flex flex-col gap-2">
              <button onClick={() => {handellogin();setPopup((n) => !n);}} className="mt-4 text-xl font-semibold text-gray-600">Login</button>
              <button onClick={() => {handelsignup();setPopup((n) => !n);}}className="mt-4 text-xl font-semibold text-gray-600">Signup</button>
            </div>
          ):<Logout bg="bg-white" text="text-gray-600" home={true}/>: null}
    </div>
    </>
  );
}

function Info() {
  return (
    <div
      className="w-[100%] rounded-3xl h-48 border overflow-hidden bg-wood bg-cover px-28 py-5 flex"
      id="aboutus"
    >
      <div className="flex w-[20%]">
        <img src={Wood} alt="" />
      </div>
      <div className="flex items-center  text-white w-[80%]">
        At Damiun Coffee Shop, we take immense pride in crafting each cup of
        coffee with passion and precision. Our skilled baristas curate a diverse
        selection of specialty coffees sourced from the finest beans across the
        globe, ensuring every sip transports you to a world of unparalleled
        taste and bliss.
      </div>
    </div>
  );
}

export { Tab, Tabsearch, Heading, Info };
