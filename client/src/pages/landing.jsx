import React from "react";
import { useState } from "react";
import { Info, Tab, Tabsearch } from "../components/landing-c/Head";
import { Heading } from "../components/landing-c/Head";
import Bg from "../assets/Bg.png";

import CardBox from "../components/store-c/CardBox";
import Login from "../components/main/login";

function landing() {
  let btns = [
    ["Home", "#home"],
    ["About Us", "#aboutus"],
    ["Services", "#services"],
    ["Store", "store"],
    ["Contact Us", "#contactus"],
  ];

  let [login,setLogin]=useState(true);

  function quit(){
    setLogin(!login);
  }

  return (
    <>
      {login?<Login quit={quit}/>:null}
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
      <section className="px-[5%]">
        <div className="h-[75vh] mt-20">
          <Info />
          {/* Card Component */}

          <div className="h-3/4 py-20">
            <CardBox items={4} />
            <div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default landing;
