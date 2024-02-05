import React from 'react'
import { IoBagOutline } from "react-icons/io5";
import {usePopup} from '../../config/popup'

function ProductCard({handelCheckout ,total}) {
  let {popup,handelPopcart}=usePopup();
  return (
      <>
      {/* Make a product card it should contain an image  then a heading name all products and a button displaying total amount */}
      <div className='h-[90%] w-3/5 rounded-3xl p-3 shadow-2xl border-2'>
        <div className='w-full h-4/6 text-black' onClick={handelPopcart}>
          <IoBagOutline className='text-9xl text-gray-700 w-full h-full bg-gray-200 rounded-3xl'/>
        </div>
        <div className='flex justify-start items-start flex-col'>
          <h1 className='text-3xl font-medium border-b-2 w-full mt-3'>View Cart</h1>
          <button className='bg-black text-2xl text-white px-5 py-2 mt-4 w-full rounded-3xl h-14' onClick={handelCheckout}>Pay ${total}</button>
        </div>
      </div>
      </>

  )
}

export default ProductCard