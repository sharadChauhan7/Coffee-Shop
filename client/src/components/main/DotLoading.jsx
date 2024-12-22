import React from 'react'

function DotLoading() {
    return (
        <div className='flex h-7 space-x-2 justify-center items-center bg-white  dark:invert'>
            {/* <span class='sr-only'>Loading...</span> */}
            <div className='h-4 w-4 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
            <div className='h-4 w-4 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
            <div className='h-4 w-4 bg-black rounded-full animate-bounce'></div>
        </div>
    )
}

export default DotLoading