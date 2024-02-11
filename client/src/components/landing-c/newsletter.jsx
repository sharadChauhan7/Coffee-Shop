import React from 'react'
import Bg from '../../assets/newsletter.svg'

function newsletter() {
  return (
    <div className='w-11/12 max-xs:w-full h-full mx-auto relative top-10 rounded-3xl'>
        <img src={Bg} alt=""  className='object-cover w-full h-full xs:rounded-3xl absolute '/>
        <div className=' absolute text-white z-10 py-10 px-7 w-full'>
                <h1 className='text-5xl max-sm:text-3xl'>Newsletter</h1>
                <p className='my-4'>Subscribe and get 20% off your first purchase</p>
                <form action="#" className='flex'>
                  <input type="search" className=' w-10/12 mx-auto h-12 opacity-30 rounded-3xl px-4 max-sm:text-xl' placeholder='Your email...' />
                  <button className='bg-white text-black w-2/12 min-w-24 mx-auto h-12 rounded-3xl'>Subscribe</button>

                </form>     
        </div>
    </div>
  )
}

export default newsletter