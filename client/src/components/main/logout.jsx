import React from "react";
import { auth } from "../../config/firebase";
import { useUser } from "../../config/user";
import {toast} from 'react-toastify';
import axios from "axios";
function logout({ bg = "bg-black", text = "text-white",home=false, quit }) {

  let { setIsLoggedIn } = useUser();
  let view=home?"top-20 right-[28%]":"top-24 right-[6%]";
  
  async function logout() {
    await auth.signOut();
    localStorage.removeItem("token");
    // Fetching User Data
    let userData=JSON.parse(localStorage.getItem("user"));
    userData=userData.email;

    localStorage.removeItem("user");
    setIsLoggedIn(false);
    toast.success('User Logged Out');
    let cartData = JSON.parse(localStorage.getItem("cart"));
    localStorage.removeItem("cart");
    
    let result=await axios.post("http://localhost:3000/cart",{cartData,userData});
    console.log(result);


  }
  return (
    <div
      className={`absolute ${view} w-36 h-20 ${bg} rounded-3xl flex flex-col gap-2  items-center justify-center`}
    >
      <button
        onClick={() => {
          logout();
          quit();
        }}
        className={`text-xl font-semibold ${text}`}
      >
        Logout
      </button>
    </div>
  );
}

export default logout;
