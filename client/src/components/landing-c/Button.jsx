import React from 'react'

function Button({text,link,style=""}) {
  return (
    <a className={`border max-w-32 min-w-24 p-3 text-center rounded-3xl ${style} bg-white`} href={`${link}`}>{text}</a>
  )
}

export default Button;