import React from 'react'
import { Outlet ,Navigate} from 'react-router-dom'
import {useUser} from '../config/user'
import {toast} from 'react-toastify'


const Privaterout=()=> {
  let {isLoggedIn}=useUser();

  return (

    <>
        {isLoggedIn?<Outlet />:(toast.warn('You are not logged in'),<Navigate to="/" />)}
    </>
  )
}

export default Privaterout