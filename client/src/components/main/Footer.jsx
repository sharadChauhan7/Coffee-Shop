import React from "react";
import Wood from "../../assets/Logo.png";

// Icons
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";



function Footer() {
  return (
    <div className="w-full h-[50vh] bg-[#2B2B2B] px-16 pt-16 pb-10">
      <div className="flex justify-between h-5/6 w-full">
        <div className="w-1/6 flex h-4/5 flex-col text-white items-center gap-1">
          <img src={Wood} alt="" className="w-[45%] h-4/8" />
          <h1>damiun@coffee.co.id</h1>
          <h1>(+62) 821-0000-9090</h1>
        </div>
        <div className="text-white h-4/5">
          <div className="grid grid-rows-4 grid-flow-col gap-7 text-white text-base font-thin">
            <h1 className=" font-medium">Shop</h1>
            <a href="#" className="col">Blog</a>
            <a href="#"className="col">Product</a>
            <a href="#"className="col">Booking</a>
            <h1 className=" font-medium">Legal</h1>
            <a href="#"className="col">Terms of Service</a>
            <a href="#"className="col">Privacy Policy</a>
            <a href="#"className="col">Cookies Policy</a>
            <h1 className=" font-medium">Service</h1>
            <a href="#"className="col">Sent with Courier</a>
            <a href="#"className="col">Drive Thru</a>
            <a href="#"className="col">In Place</a>
          </div>
        </div>
      </div>
      <div className="w-full border-t-2 h-14 flex justify-between items-center text-white">
        <p>@2023 damiun.cs</p>
        <div className="flex gap-4"><IoLogoInstagram/> <FaLinkedin/><FaGithub/></div>
      </div>
    </div>
  );
}

export default Footer;
