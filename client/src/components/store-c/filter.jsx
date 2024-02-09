import React from 'react'
import { useState } from 'react'
function Filter({filters, handleChange }) {


  const grind = ["Whole Bean", "Cafetiere", "Filter", "Espresso", "French press", "Pour Over"];
  const Region = ["Central America", "Africa", "South America", "Asia Pacific", "Middle East",]
  return (
    <div className='sticky w-full h-[75vh] border-2 top-40 rounded-3xl p-4 overflow-y-scroll'>
      <div className=''>
        <div className='flex justify-between'>
        <h1 className='text-3xl font-medium'>Price</h1>
          <button className='text-2xl bg-black text-white px-2' onClick={()=>{handleChange("reset")}}>Re-set</button>
        </div>
        <input type="range" min={800} max={1300} step={100} value={filters.price}name="price" onChange={handleChange} className=' py-3 w-4/5' />
        
        <div className='flex justify-between border-b-2'>
        <h2 className='text-lg font-normal text-gray-500  pb-4'>Min.&#8377; 800</h2>
        <h2 className='text-lg font-normal text-gray-500  pb-4'>Max.&#8377; {filters.price}</h2>
        </div>
      </div>

      <div className='py-3'>
        <h1 className='text-3xl font-medium py-3'>Region </h1>
        <ul>
          {Region.map((data, index) => {
            return (<li key={index}>
              <input type="radio" id={data} name="region" checked={filters.region==data} value={data} onChange={handleChange} />
              <label htmlFor={data} className='mx-2 my-2'>{data}</label>
            </li>)
          })}
        </ul>
      </div>

      {/* Grind Option */}
      <div className='border-b-2 py-3'>
        <h1 className='text-3xl font-medium py-3'>Grind </h1>
        <ul>
          {grind.map((data, index) => {
            return (<li key={index}>
              <input type="radio" id={data} name="grind_option" value={data} checked={filters.grind_option==data} onChange={handleChange} />
              <label htmlFor={data} className='mx-2 my-2'>{data}</label>
            </li>)
          })}
        </ul>
      </div>


    </div>
  )
}

export default Filter