import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import Button from "./Button";
import Wood from "../../assets/Logo.png";

function Heading() {
  // console.log(Wood);
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
          <a className="mx-4" href={`#${data}`} key={index}>
            {data}
          </a>
        );
      })}
    </>
  );
}

function Tabsearch() {
  return (
    <div className="bg-white border mt-5 h-12 rounded-3xl gap-2 flex items-center justify-center text-xl px-5">
      <a href="#">
        <CiSearch />
      </a>
      <a href="#">
        <IoBagOutline />
      </a>
    </div>
  );
}

function Info() {
  return (
    <div className="w-[100%] rounded-3xl h-48 border overflow-hidden bg-wood bg-cover px-28 py-5 flex">
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
