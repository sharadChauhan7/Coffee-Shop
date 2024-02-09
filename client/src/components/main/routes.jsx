import React from 'react'
import { Link } from 'react-router-dom'

function routes({Rout,btn}) {
  return (
    <div className="text-3xl my-10 mt-32 border-b-2 pb-5">

            {Rout.map((value,index)=>{
                return (<Link className="navbar-item text-gray-500" activeclassname="is-active" to={value[1]} key={index}>
                    {value[0]}{"  "}|{"  "}
                </Link>)
            })}
         <button className="text-black">{btn}</button>
      </div>
  )
}

export default routes