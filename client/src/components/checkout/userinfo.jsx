import React from 'react'
import { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import axios from 'axios';
function userinfo({handler,total}) {
    // let user = JSON.parse(localStorage.getItem('user')).providerData[0];
    useEffect(() => {
        document.title = 'Checkout'

    }, [])

    let [user, setUser] = useState(JSON.parse(localStorage.getItem('user')).providerData[0]);

    function handlechange(e) {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    function saveData(){
        let current=JSON.parse(localStorage.getItem('user'));
        current.providerData[0].address=user.address;
        current.providerData[0].phoneNumber=user.phoneNumber;
        localStorage.setItem('user',JSON.stringify(current));
        
        let res=axios.post('http://localhost:3000/auth/update',current.providerData[0]);
    }

    return (
        <div>
            <div className=' font-sans'>
                <h2 className='text-5xl font-medium font-sans '>Checkout Details</h2>
                <p className='my-5 text-gray-600 text-xl font-sans'> Varify your personal detail to complete your purchase</p>
                <div className='flex gap-10'>
                    <div className='w-3/5 text-gray-700'>
                        <h2 className='text-3xl font-medium font-sans my-3'>Billing Address</h2>
                        <form action="">
                            <div className='flex flex-col gap-5'>
                                <div className='flex justify-between gap-5 items-center'> 
                                    <label htmlFor="phone" className='text-2xl mr-20'> Phone</label>
                                    <input type="text" placeholder="Phone" className='border-b-2 w-3/4 focus:outline-none' name='phoneNumber' id="phone" value={user.phoneNumber} onChange={handlechange} />
                                </div>
                                <div className='flex justify-between gap-5 items-center'>
                                    <label htmlFor="address" className='text-2xl mr-20'> Address</label>
                                    <input type="text" placeholder="Address" className='border-b-2 w-3/4 focus:outline-none' name='address' id="address" value={user.address} onChange={handlechange} />
                                </div>

                            </div>
                        </form>
                    </div>
                    {/* Cart card */}
                    <div className='w-2/5  h-[50vh] flex justify-center items-center '>
                        <ProductCard handelCheckout={handler} total={total} saveData={saveData}  />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default userinfo