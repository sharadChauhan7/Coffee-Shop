import React from 'react'
import {Link} from 'react-router-dom'
function Button({text,link,style=""}) {
  return (
    <Link to={link}>
      <span className={`border max-w-32 min-w-24 p-3 text-center rounded-3xl ${style} bg-white`} >{text}</span>
    </Link>
  )
}

export default Button;