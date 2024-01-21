import React from "react";
import { Info, Tab, Tabsearch } from "../components/landing-c/Head";
import { Heading } from "../components/landing-c/Head";
import Bg from '../assets/Bg.png'


function landing() {
  return (
    <>
      <img src={Bg} alt="" className="w-full h-[85vh] position absolute -z-10 mb-2"/>
      <main className="px-[5%] h-[85vh] bg-cover border">
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
      <div className="h-[100vh] mt-20">
          <Info/>
        </div>
      </section>
    </>
  );
}

export default landing;
