import React from 'react'
import Button from './Button'

function booking() {
  return (
    <div className='border w-full h-60 rounded-[50px] bg-booking bg-cover px-10 py-8'>
      <div className='w-1/3 h-full flex flex-col items-start justify-center gap-4'>
        <h1 className='text-2xl font-bold text-white'>Request an order for your private party or event?</h1>
        <p className='text-sm text-white font-light'>We are open to ordering party events such as weddings, celebrations, or other events</p>
        <Button text='Book Now' link='booking' style='text-lg px-5'/>
      </div>

    </div>
  )
}

export default booking