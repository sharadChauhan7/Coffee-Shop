import React from 'react'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";


function quantity({handleQuantity,quantity}) {
  return (
    <div className='border w-32 rounded-3xl bg-gray-200 text-black flex justify-between px-4 py-2 text-xl'>
        <button onClick={()=>{handleQuantity(quantity-1)}}><FaMinus/></button><button>{quantity}</button><button onClick={()=>{handleQuantity(quantity+1)}}><FaPlus/></button>
    </div>
  )
}

export default quantity;