import React from 'react'

function card({data}) {
  return (
    <div className='w-60 h-72  overflow-hidde shadow-md rounded-3xl border'>
        <img src={data.image_url} className='w-full h-3/4' alt="" />
        <div className='h-20 p-2'>
            <div className='flex justify-between items-center'>
                <h1 className='text-base font-bold'>{data.name}</h1>
                <h1 className='w-14 text-center rounded-xl border'> &#36;{data.price}</h1>
            </div>
            <p className='text-sm'>Region: {data.region}</p>
        </div>
    </div>
  )
}

export default card