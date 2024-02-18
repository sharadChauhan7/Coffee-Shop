import React from 'react'
import Button from './Button'

function booking() {
  return (
    <div className='border w-full md:h-60 rounded-[50px] bg-black bg-cover px-10 py-8 bg-[linear-gradient(315deg,_#000000_0%,_#414141_74%)]'>
      <div className='md:w-1/3 max-md:w-3/6 max-sm:w-4/6 max-ss:w-5/6  h-full flex flex-col items-start justify-center gap-4'>
        <h1 className='text-2xl font-bold text-white'>Request an order for your private party or event?</h1>
        <p className='text-sm text-white font-light'>We are open to ordering party events such as weddings, celebrations, or other events</p>
        <Button text='Book Now' link='store' style='xs:text-lg px-5'/>
      </div>

    </div>
  )
}

export default booking
