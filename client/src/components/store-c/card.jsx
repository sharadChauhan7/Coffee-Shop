import React from 'react'

function card({data}) {
    // data={ 
    //     id:1,
    //     name:"Rainforest Rhapsody",
    //     description:"Very Good",
    //     price:"10",
    //     region:"Asia",
    //     weight:"5kg",
    //     flavor_profile:["Dark Chocolate","Black Berruy"],
    //     grind_option:["Wheate","Bread"],
    //     roast_level:5,
    //     image_url:"https://images.unsplash.com/photo-1587049016823-69ef9d68bd44?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlJTIwYmVhbnN8ZW58MHx8MHx8fDA%3D",
    //   };
  return (
    <div className='w-60 h-72 rounded-3xl overflow-hidde shadow-xl border'>
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