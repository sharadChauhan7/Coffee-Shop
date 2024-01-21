import React from 'react'

function Button({text,link}) {
  return (
    <a className='border max-w-32 p-3 text-center rounded-3xl bg-white' href={`${link}`}>{text}</a>
  )
}

export default Button;