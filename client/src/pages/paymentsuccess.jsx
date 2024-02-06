import React from 'react'
import Landing from './landing'
import {Link} from 'react-router-dom'
function paymentsuccess() {
  return (
    <>
    <Link to='/'>
            <div className='bg-black opacity-80 fixed top-0 bottom-0 left-0 right-0 h-screen w-screen overflow-y-hidden'>
                <div className='flex justify-center items-center h-full'>
                    <h1 className='text-white text-7xl font-semibold'>Payment Successfull</h1>
                </div>
            </div>
    </Link>
        <Landing/>
    </>
  )
}

export default paymentsuccess   