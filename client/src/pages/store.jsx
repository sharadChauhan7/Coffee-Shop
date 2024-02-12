import React from "react";
import Navbar from "../components/store-c/Navbar";
import CardBox from "../components/store-c/CardBox";
import Signup from "../components/main/signup";
import Login from "../components/main/login";
import Cart from "../components/store-c/cart";
import { usePopup } from "../config/popup";
import Routes from "../components/main/routes";
import Filter from '../components/store-c/filter'
import { useState,useEffect } from "react";
import {filData,getData} from "../util/filter";

import Footer from "../components/main/Footer";
let link = [["Home" , "/"]];
function store() {
  let [filters, setFilters] = useState({ grind_option: "", region:"",price:1300 });
  let [sorted,setSorted]=useState(null);
  useEffect( ()=>{
    async function getData(){
    if(filters.grind_option!="" || filters.region!="" || filters.price!=1300){
      let newData= await filData(filters);
      setSorted(newData);
    }
    else{
      setSorted(null);
    }
    }
    getData();
  },[filters]);

  const { popup, handelPopcart, signup, handelsignup, login, handellogin } = usePopup();


  let handleChange = (e) => {
    if(e=="reset"){
      
      setFilters({ grind_option: "", region:"" ,price:1300});
      return;
    }
      setFilters({ ...filters, [e.target.name]: e.target.value });
  }
  return (
    <div>
      {/* Login Sign Up */}
      {login ? <Login quit={handellogin} /> : null}
      {signup ? <Signup quit={handelsignup} /> : null}
      {popup ? <Cart quit={handelPopcart} /> : null}

      <Navbar />
      <div className="px-[5%] text-3xl my-10 mt-32 ">
        <Routes Rout={link} btn="Store" />
      </div>
      <div className="flex px-[5%] w-[100vw] justify-between">
        <div className="w-[20%] max-md:hidden ">
          {/* Filterrrr */}
         <Filter filters={filters} handleChange={handleChange}/>
          </div>
        <div className="w-[75%] mb-24 max-md:w-screen">
          <CardBox items={20} style=" grid grid-cols-3 max-sm:grid-cols-2 max-xs:grid-cols-1" filteredData={sorted} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default store;
