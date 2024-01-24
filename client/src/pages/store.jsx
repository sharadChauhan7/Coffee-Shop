import React from "react";
import Navbar from "../components/store-c/Navbar";
import CardBox from "../components/store-c/CardBox";
import { Link } from 'react-router-dom'
function store() {
  return (
    <div>
      <Navbar />
        <div className="px-[5%] text-3xl my-10 mt-32"><Link className="navbar-item" activeClassName="is-active" to="/">
              Home
            </Link> | <button>Store</button> </div>
      <div className="flex px-[5%] w-[100vw] justify-between">
        <div className="border w-[20%]">
          filter
        </div>
        <div className="w-[75%]">
          <CardBox items={20} style="grid-cols-3"/>
        </div>
      </div>
    </div>
  );
}

export default store;
